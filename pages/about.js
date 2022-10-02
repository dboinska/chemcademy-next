import Head from 'next/head';
import styled from 'styled-components';

const Title = styled.h1`
  color: var(--chem-color-main);
  font-size: 5rem;
`;
export default function About() {
  return (
    <div>
      <Head>
        <title>O autorze | Chemcademy</title>
        <meta name="description" content="About the author of course" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title>About page</Title>
      </main>
    </div>
  );
}
