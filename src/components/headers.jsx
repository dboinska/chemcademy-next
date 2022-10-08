import styled, { css } from 'styled-components';

import { MAX_SMALL_DEVICES, MAX_LARGE_DEVICES } from '../../styles/constants';

const typography = css`
  font-size: clamp(1.6rem, 2vw, 2rem);
  text-align: center;
`;

export const H1 = styled.h1`
  color: var(--chem-color-main);
  text-shadow: 1px 1px 2px var(--chem-color-main);
  text-transform: uppercase;
  margin: 1rem;
  text-align: center;
  font-family: var(--chem-font-main);
  font-size: clamp(1.8rem, 3.5vw, 4rem);
`;

export const H2 = styled.h2`
  color: var(--chem-color-main);
  margin: 0.1rem;
  text-transform: uppercase;
  ${typography}

  ${MAX_SMALL_DEVICES} {
    margin: 0 1rem;
  }
`;

export const H3 = styled.h3`
  color: var(--chem-color-dark);
  margin: 2rem 0 3rem;
  ${typography}
  font-weight: 300;
`;

export const H2Courses = styled(H2)`
  background-color: var(--chem-color-main);
  color: var(--chem-color-white);
  font-size: 1.2rem;
  margin: 0;
  padding: 1rem 0.4rem;
`;

export const H2Section = styled(H2)`
  text-align: left;
  border-bottom: 2px solid var(--chem-color-main);
  margin: ${({ margin }) => (margin ? margin : '1rem auto')};

  ${MAX_LARGE_DEVICES} {
    max-width: 1100px;
  }
`;


export const H3Badges = styled.h3`
  color: var(--chem-color-main);
  text-transform: uppercase;
  margin-left: 1rem;
`;

export const H3Section = styled.h3`
  color: var(--chem-color-main);
  text-transform: uppercase;
  padding: 1rem 0;
`;
