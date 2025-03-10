import { useRouter } from 'next/router';
import styled from 'styled-components';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import SEO from '../../src/components/SEO';
import Container from '../../src/components/Container';
import { H2Section } from '../../src/components/headers';
import client from '../../contentful';
import { profanityFilter } from '../../src/utils/profanityFilter';

export async function getStaticPaths() {
  try {
    const response = await client.getEntries({
      content_type: 'chemcademy',
    });

    const paths = response.items.map(article => ({
      params: { id: article.sys.id },
    }));

    return {
      paths,
      fallback: true,
    };
  } catch (error) {
    console.error('Error generating paths:', error);
    return { paths: [], fallback: true };
  }
}

export async function getStaticProps({ params }) {
  try {
    const article = await client.getEntry(params.id, {
      include: 2,
    });

    if (!article) {
      return { notFound: true };
    }

    return {
      props: { article },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching article:', error);
    return { notFound: true };
  }
}

const richTextOptions = {
  renderMark: {
    [MARKS.BOLD]: text => <strong>{text}</strong>,
    [MARKS.ITALIC]: text => <em>{text}</em>,
    [MARKS.CODE]: text => {
      try {
        if (text.startsWith('\\ce{')) {
          return (
            <EquationWrapper>
              <BlockMath math={text} />
            </EquationWrapper>
          );
        }
        if (text.includes('\\frac') || text.includes('^') || text.includes('_')) {
          return (
            <EquationWrapper>
              <BlockMath math={text} />
            </EquationWrapper>
          );
        }
        return <CodeBlock>{text}</CodeBlock>;
      } catch (error) {
        console.error('LaTeX rendering error:', error);
        return <ErrorBlock>Error rendering equation: {text}</ErrorBlock>;
      }
    },
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => {
      const processText = text => {
        if (!text) return text;

        const blockParts = text.split(/(\$\$[^$]*?\$\$)/);
        const processedBlock = blockParts.map((part, index) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            const mathContent = part.slice(2, -2).trim();
            return (
              <EquationWrapper key={`block-${index}`}>
                <BlockMath math={mathContent} />
              </EquationWrapper>
            );
          }
          if (!part.includes('$$')) {
            const inlineParts = part.split(/(\$[^$]*?\$)/);
            return inlineParts.map((inlinePart, inlineIndex) => {
              if (inlinePart.startsWith('$') && inlinePart.endsWith('$')) {
                const inlineMathContent = inlinePart.slice(1, -1).trim();
                return (
                  <InlineMathWrapper key={`inline-${inlineIndex}`}>
                    <InlineMath math={inlineMathContent} />
                  </InlineMathWrapper>
                );
              }
              return inlinePart;
            });
          }
          return part;
        });
        return processedBlock;
      };

      const processedChildren = Array.isArray(children)
        ? children.map(child => {
            if (typeof child === 'string') {
              return processText(child);
            }
            return child;
          })
        : children;

      const containsBlockElements = node.content.some(
        item =>
          item.nodeType === 'embedded-asset-block' || (item.marks && item.marks.some(mark => mark.type === 'code'))
      );

      return containsBlockElements ? (
        <RichTextBlock>{processedChildren}</RichTextBlock>
      ) : (
        <RichTextParagraph>{processedChildren}</RichTextParagraph>
      );
    },
    [BLOCKS.HEADING_2]: (node, children) => <RichTextH2>{children}</RichTextH2>,
    [BLOCKS.HEADING_3]: (node, children) => <RichTextH3>{children}</RichTextH3>,
    [BLOCKS.UL_LIST]: (node, children) => <RichTextUl>{children}</RichTextUl>,
    [BLOCKS.OL_LIST]: (node, children) => <RichTextOl>{children}</RichTextOl>,
    [BLOCKS.LIST_ITEM]: (node, children) => <RichTextLi>{children}</RichTextLi>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file, title, description } = node.data.target.fields;

      if (!file || !file.url) {
        console.error('Missing image URL:', node.data.target);
        return null;
      }

      let imageSize = 'medium';

      if (description) {
        const lowercaseDesc = description.toLowerCase();
        if (lowercaseDesc.includes('large')) {
          imageSize = 'large';
        } else if (lowercaseDesc.includes('xsmall')) {
          imageSize = 'xsmall';
        } else if (lowercaseDesc.includes('small')) {
          imageSize = 'small';
        } else if (lowercaseDesc.includes('vertical')) {
          imageSize = 'vertical';
        } else if (lowercaseDesc.includes('horizontal')) {
          imageSize = 'horizontal';
        }
      }

      return (
        <RichTextAsset>
          <RichTextImageWrapper $size={imageSize}>
            <RichTextImage src={`https:${file.url}`} alt={title || 'Article image'} $size={imageSize} />
          </RichTextImageWrapper>
          {title && <ImageLabel>{title}</ImageLabel>}
        </RichTextAsset>
      );
    },
  },
  renderText: text => {
    const validatedText = profanityFilter(text);
    return !validatedText ? 'Treść zablokowana' : text;
  },
};

const ResourcePage = ({ article }) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <Container>
        <StyledContainer>
          <LoadingMessage>Wczytywanie artykułu...</LoadingMessage>
        </StyledContainer>
      </Container>
    );
  }

  const { header, introduction, category, mainContent, mainImage, summary } = article.fields;
  const publicationDate = new Date(article.sys.createdAt).toLocaleDateString('pl-PL');

  return (
    <>
      <SEO url={`materialy/${article.sys.id}`} title={header} description={introduction} />
      <Container>
        <StyledContainer>
          <ArticleHeader>
            <H2Section margin="0 0 1.5rem 0">{header}</H2Section>
            <ArticleMetadata>
              <StyledFlex>
                <Category>{category}</Category>
                <PublicationDate>{publicationDate}</PublicationDate>
              </StyledFlex>
            </ArticleMetadata>
            <MainImage
              src={mainImage.fields.file.url}
              alt={mainImage.fields.title}
              style={mainImage.fields.description?.includes('contain') ? { objectFit: 'contain' } : {}}
            />
            {introduction && <StyledParagraph>{introduction}</StyledParagraph>}
          </ArticleHeader>
          <ArticleContent>{documentToReactComponents(mainContent, richTextOptions)}</ArticleContent>
          {summary && <StyledParagraph>{summary}</StyledParagraph>}
        </StyledContainer>
      </Container>
    </>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto;
  padding-top: 100px;
  max-width: 800px;
  width: 100%;
`;

const ArticleHeader = styled.header`
  margin-bottom: 2rem;
`;

const ArticleMetadata = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const Category = styled.span`
  background-color: var(--chem-color-light-gray);
  padding: 0.5rem;
  border-radius: 4px;
  font-size: 0.875rem;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const PublicationDate = styled.time`
  color: var(--chem-color-blue-gray);
  font-size: 0.875rem;
`;

const StyledParagraph = styled.p`
  line-height: 1.6;
  color: var(--chem-color-blue-gray);

  &:last-child {
    margin-bottom: 3rem;
  }
`;

const ArticleContent = styled.article`
  padding: 0 1rem;
  line-height: 1.8;
  font-size: 1.1rem;
  overflow: hidden;
  max-width: 100%;
`;

const MainImage = styled.img`
  width: 100%;
  height: 200px;
  border-radius: 12px;
  object-fit: cover;
  margin-bottom: 3rem;
  @media (min-width: 768px) {
    height: 260px;
  }
`;

const LoadingMessage = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: var(--chem-color-blue-gray);
  padding: 2rem;
`;

const RichTextImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;
  width: auto;
  max-width: ${props => {
    switch (props.$size) {
      case 'large':
        return '800px';
      case 'xsmall':
        return '200px';
      case 'small':
        return '400px';
      case 'vertical':
        return '400px';
      case 'horizontal':
        return '900px';
      default:
        return '600px';
    }
  }};
`;

const RichTextImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${props => {
    switch (props.$size) {
      case 'large':
        return `max-height: 620px;`;
      case 'xsmall':
        return `max-height: 200px;`;
      case 'small':
        return `max-height: 300px;`;
      case 'vertical':
        return `max-height: 900px;`;
      case 'horizontal':
        return `max-height: 400px;`;
      default:
        return `max-height: 400px;`;
    }
  }}

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ImageLabel = styled.label`
  display: block;
  text-align: center;
  color: var(--chem-color-blue-gray);
  font-size: 0.9rem;
  margin-top: 0.5rem;
  font-style: italic;
`;

const RichTextBlock = styled.div`
  margin: 1.5rem 0;
`;

const RichTextParagraph = styled.div`
  margin: 1.5rem 0;
  line-height: 1.8;
  font-size: 1.1rem;
`;

const RichTextH2 = styled.h2`
  margin: 2rem 0 1rem;
  font-size: 1.75rem;
  font-weight: 600;
`;

const RichTextH3 = styled.h3`
  margin: 1.5rem 0 1rem;
  font-size: 1.5rem;
  font-weight: 600;
`;

const RichTextUl = styled.ul`
  margin: 1.5rem 0;
  padding-left: 2rem;
`;

const RichTextOl = styled.ol`
  margin: 1.5rem 0;
  padding-left: 2rem;
`;

const RichTextLi = styled.li`
  margin: 0.75rem 0;
  line-height: 1.6;
`;

const EquationWrapper = styled.div`
  margin: 1rem 0;
  padding: 0.5rem;
  border-radius: 8px;
  overflow-x: auto;

  .katex-display {
    margin: 0;
  }

  .katex {
    font-size: 1.1em;
  }
`;

const InlineMathWrapper = styled.span`
  display: inline;
  vertical-align: baseline;

  .katex {
    font-size: 1.1em;
  }
`;

const RichTextAsset = styled.div`
  margin: 2rem 0;
`;

const CodeBlock = styled.code`
  background-color: var(--chem-color-light-gray);
  padding: 0.2em 0.4em;
  border-radius: 4px;
  font-family: monospace;
  font-size: 0.9em;
`;

const ErrorBlock = styled.div`
  margin: 1rem 0;
  padding: 1rem;
  background-color: #fff3f3;
  border: 1px solid #ff8080;
  border-radius: 4px;
  color: #d63030;
`;

export default ResourcePage;
