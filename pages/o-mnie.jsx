import SEO from '../src/components/SEO';
import Section from '../src/sections/Section';

import { aboutAchievements, aboutPrivate, features } from '../data/about';
import Badges from '../src/components/Badges';
import Container from '../src/components/Container';

export default function About() {
  return (
    <>
      <SEO
        url="o-mnie"
        title="O mnie"
        description="Dr inż. Tomasz Boinski, założyciel firmy Chemcademy. Korepetytor z pasją do nauczania oraz licznymi sukcesami dydaktycznymi."
      />
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
