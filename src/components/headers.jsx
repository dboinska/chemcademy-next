import styled, { css } from 'styled-components';

import { MAX_SMALL_DEVICES } from '../../styles/constants';

export const H1 = ({ children }) => <StyledH1>{children}</StyledH1>;

export const H2 = ({ children }) => <StyledH2>{children}</StyledH2>;

export const H3 = ({ children }) => <StyledH3>{children}</StyledH3>;

const typography = css`
  font-size: clamp(1.6rem, 2vw, 2rem);
  text-align: center;
`;

const StyledH1 = styled.h1`
  color: var(--chem-color-main);
  text-shadow: 1px 1px 2px var(--chem-color-main);
  text-transform: uppercase;
  margin: 1rem;
  text-align: center;
  font-family: var(--chem-font-main);
  font-size: clamp(1.8rem, 3.5vw, 4rem);
`;

const StyledH2 = styled.h2`
  color: var(--chem-color-main);
  margin: 0.1rem;
  text-transform: uppercase;
  ${typography}

  ${MAX_SMALL_DEVICES} {
    margin: 0 1rem;
  }
`;

const StyledH3 = styled.h3`
  color: var(--chem-color-dark);
  margin: 2rem 0 3rem;
  ${typography}
  font-weight: 300;
`;
