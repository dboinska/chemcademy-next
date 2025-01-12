import styled from 'styled-components';
import SEO from '../../src/components/SEO';
import Container from '../../src/components/Container';
import { H2Section } from '../../src/components/headers';
import Resource from '../../src/sections/Resource';
import { profanityFilter } from '../../src/utils/profanityFilter';

import client from '../../contentful';
import { useRouter } from 'next/router';

export async function getStaticProps() {
  try {
    const response = await client.getEntries({
      content_type: 'chemcademy',
    });

    const filteredArticles = response.items.filter(article => {
      const { header, category, preview } = article.fields;

      const validatedHeader = profanityFilter(header);
      const validatedCategory = profanityFilter(category);
      const validatedPreview = profanityFilter(preview);

      return validatedCategory && validatedHeader && validatedPreview;
    });

    return {
      props: {
        articles: filteredArticles,
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Błąd podczas pobierania danych:', error);
    return {
      props: {
        articles: [],
      },
    };
  }
}

const Resources = ({ articles }) => {
  const router = useRouter();

  const handleArticleClick = articleSlug => {
    router.push(`/artykuly/${articleSlug}`);
  };
  console.log({ articles });
  return (
    <>
      <SEO url="materialy" title="Artykuły" description="Artykuły i pomoce edukacyjne." />
      <Container>
        <StyledContainer>
          <H2Section margin="0 0 3rem 0">Artykuły</H2Section>
        </StyledContainer>
        <Resource width="300px" height="200px" articles={articles} onClick={handleArticleClick} />
      </Container>
    </>
  );
};

const StyledContainer = styled.div`
  margin: 0 auto;
  padding-top: 100px;
`;

export default Resources;
