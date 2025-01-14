import styled, { css } from 'styled-components';
import Image from 'next/image';
import { H3Section } from '../components/headers';
import { MAX_SMALL_DEVICES, MIN_MEDIUM_DEVICES } from '../../styles/constants';

const Resource = ({
  articles,
  imgPosition = 'left',
  color,
  content,
  margin,
  height,
  width,
  maxWidthOnSmall,
  onClick,
}) => {
  if (!articles || !articles.length) {
    return <div>Brak dostępnych materiałów</div>;
  }

  return (
    <>
      {articles.map(article => (
        <StyledSection
          key={article.sys.id}
          color={color}
          content={content}
          margin={margin}
          onClick={() => onClick(article.sys.id)}
          role="article"
          aria-labelledby={`article-header-${article.sys.id}`}
        >
          <StyledContainer imgPosition={imgPosition}>
            <StyledFlex>
              <StyledCategory>{article.fields.category}</StyledCategory>
              <StyledDate>{new Date(article.sys.createdAt).toLocaleDateString()}</StyledDate>
            </StyledFlex>
            <H3Section padding="4px">{article.fields.header}</H3Section>
            <StyledParagraph>{article.fields.preview}</StyledParagraph>
          </StyledContainer>
          {article.fields.mainImage && (
            <StyledImageContainer
              imgPosition={imgPosition}
              height={height}
              width={width}
              maxWidthOnSmall={maxWidthOnSmall}
            >
              <Image
                src={`https:${article.fields.mainImage.fields.file.url}`}
                alt={article.fields.mainImage.fields.title || article.fields.header}
                layout="fill"
                objectFit="cover"
              />
            </StyledImageContainer>
          )}
        </StyledSection>
      ))}
    </>
  );
};

const divStyles = css`
  max-width: var(--chem-width-wide);
  border-radius: 12px;
  overflow: hidden;
  margin: 0.6rem;
`;

const StyledFlex = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
`;

const StyledDate = styled.span`
  color: var(--chem-color-blue-gray);
`;

const StyledCategory = styled.span`
  background-color: var(--chem-color-light-gray);
  border-radius: 8px;
  padding: 4px 8px;
  text-transform: uppercase;
  font-size: 12px;
`;

const StyledParagraph = styled.p`
  margin: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const StyledSection = styled.section`
  overflow: hidden;
  display: flex;
  padding: 1rem;
  justify-content: ${({ content }) => (content ? content : 'center')};
  flex-wrap: wrap;
  background-color: ${({ color }) => (color ? color : 'var(--chem-color-transparent)')};
  max-width: calc(100vw - 2rem);
  border-bottom: 3px solid var(--chem-color-light-blue);
  display: flex;
  width: 100%;
  max-width: 1000px;
  cursor: pointer;

  &:last-of-type {
    border: none;
    margin-bottom: 3rem;
  }

  p {
    margin: 1rem 0;
    line-height: 1.4;
  }

  a {
    color: var(--chem-color-white);
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

const StyledContainer = styled.div`
  ${divStyles}
  order: 0;
  ${MIN_MEDIUM_DEVICES} {
    order: ${({ imgPosition }) => (imgPosition === 'left' ? 1 : 0)};
  }
  width: 100%;
`;

const StyledImageContainer = styled.div`
  ${divStyles}
  order: 1;
  position: relative;
  width: var(--chem-width-wide);
  height: ${({ height }) => (height ? height : '378px')};
  width: ${({ width }) => (width ? width : '567px')};

  ${MAX_SMALL_DEVICES} {
    min-height: 220px;
    max-height: 270px;
    max-width: ${({ maxWidthOnSmall }) => (maxWidthOnSmall ? maxWidthOnSmall : '335px')};
  }

  ${MIN_MEDIUM_DEVICES} {
    order: ${({ imgPosition }) => (imgPosition === 'left' ? 0 : 1)};
  }
`;

export default Resource;
