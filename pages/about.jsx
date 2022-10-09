import Head from 'next/head';
import styled from 'styled-components';

import Section from '../src/sections/Section';

import { aboutAchievements, aboutPrivate, features } from '../data/about';
import Badges from '../src/components/Badges';
import Container from '../src/components/Container';

export default function About() {
  return (
    <>
      <div>
        <Head>
          <title>O autorze | Chemcademy</title>
          <meta name="description" content="About the author of course" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>
      <Container>
        <Section item={aboutAchievements} height="271px" width="203px" content="space-around" margin="4rem 1rem 0 1rem">
          Dr inż. Tomasz Boinski
        </Section>
        <Badges items={features} fontWeight="bold"></Badges>
        <Section item={aboutPrivate} height="378px" width="359px" maxWidthOnSmall="257px" imgPosition="right">
          Więcej o mnie
        </Section>
      </Container>
    </>
  );
}
