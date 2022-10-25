import styled from 'styled-components';

import SEO from '../src/components/SEO';
import Section from '../src/sections/Section';

import Container from '../src/components/Container';
import { schedule } from '../data/schedule.js';
import Date from '../src/components/Date';

import { MIN_LARGE_DEVICES, MIN_MEDIUM_DEVICES } from '../styles/constants';

import { lo1, lo2, lo3, maturaNieorg, maturaOrg, olimpiada } from '../data/schedule.js';

export default function Schedule() {
  return (
    <>
      <SEO
        url="terminarz"
        title="Terminarz zajęć"
        description="Zapraszam do zapoznania się z terminarzem moich kursów."
      />
      <Container>
        <Section item={schedule} width="378px" height="378px" imgPosition="right" margin="4rem 1rem 1rem 1rem">
          Terminarz kursów
        </Section>
        <ScheduleContainer>
          <Date items={lo1}>licealny klasa 1</Date>
          <Date items={lo2}>licealny klasa 2</Date>
          <Date items={lo3}>licealny klasa 3</Date>
          <Date items={maturaNieorg}>maturalny nieorganiczna</Date>
          <Date items={maturaOrg}>maturalny organiczna</Date>
          <Date items={olimpiada}>olimpijski</Date>
        </ScheduleContainer>
      </Container>
    </>
  );
}

const ScheduleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  border: 3px solid var(--chem-color-light-blue);
  padding: 1rem;
  border-radius: 10px;
  width: 100%;
  margin-bottom: 2rem;

  & span {
    margin: 0.4rem;
    display: inline-block;
    text-align: center;
    width: 200px;
    ${MIN_LARGE_DEVICES} {
      margin: 0 auto;
    }
  }
  ${MIN_MEDIUM_DEVICES} {
    width: auto;
  }
`;
