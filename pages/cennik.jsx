import styled, { css } from 'styled-components';
import SEO from '../src/components/SEO';
import Section from '../src/sections/Section';
import Container from '../src/components/Container';
import PricingCourses from '../src/components/PricingCourses';

import { useState, useEffect } from 'react';

import Faq from '../src/components/Faq';
import { H2 } from '../src/components/headers';
import { MIN_LARGE_DEVICES } from '../styles/constants';

import { faq } from '../data/faq';
import { categories, lo, matura, olimpiada, individual, consultation } from '../data/pricing';

const PriceList = () => {
  const [chooseCourse, setChooseCourse] = useState('kursy licealne');
  const [isActive, setIsActive] = useState();

  useEffect(() => {
    setIsActive(isActive);
  }, [isActive]);

  return (
    <>
      <SEO
        url="cennik"
        title="Cennik | Chemcademy"
        description="Cennik realizowanych kursów oraz zajęć indywidualnych wraz dostępnymi okresami rozliczeniowymi."
      />
      <Container>
        <H2 margin="4rem 1rem 1rem 1rem">Kursy</H2>
        <StyledSwitch>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setChooseCourse(category)}
              className={category === chooseCourse ? 'active' : 'inactive'}
            >
              {category}
            </button>
          ))}
        </StyledSwitch>
        <OverflowContainer>
          {chooseCourse === 'kursy licealne' ? <PricingCourses items={lo} /> : ''}
          {chooseCourse === 'kursy maturalne' ? <PricingCourses items={matura} /> : ''}
          {chooseCourse === 'kursy olimpijskie' ? <PricingCourses items={olimpiada}>notLarge</PricingCourses> : ''}
        </OverflowContainer>
        <Section item={individual} margin="0" imgPosition="right">
          Korepetycje indywidualne
        </Section>
        <Section item={consultation} margin="0">
          Konsultacje
        </Section>
        <Faq items={faq} />
      </Container>
    </>
  );
};

const OverflowContainer = styled(Container)`
  @media screen and (max-width: 1290px) {
    flex-wrap: no-wrap;
    overflow-x: scroll;
    margin: 0 1rem;
    max-width: 100%;
    justify-content: start;
    align-items: start;
    padding: 2rem 0.2rem;
  }
`;
const activeStyle = css`
  background-color: var(--chem-color-sand);
  transition: all 0.3s ease;
`;

const StyledSwitch = styled.div`
  display: flex;
  justify-content: start;
  text-align: center;
  border: 3px solid var(--chem-color-sand);
  border-radius: 12px;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;
    margin: 0;
    font-size: 1rem;
    color: var(--chem-color-main);
    padding: 0.6rem;
    ${props => props.active && activeStyle}

    ${MIN_LARGE_DEVICES} {
      padding: 1.2rem;
    }
    &.active,
    &:hover {
      background-color: var(--chem-color-sand);
    }

    &.inactive {
      background-color: transparent;
    }
  }
`;

export default PriceList;
