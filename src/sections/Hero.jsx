import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { MIN_MEDIUM_DEVICES, MAX_SMALL_DEVICES } from '../../styles/constants';
import { H1, H2, H3 } from '../components/headers';

const Hero = () => (
  <StyledHero>
    <LogoContainer>
      <Image src="/logobiale.png" alt="logo" width="92" height="88" />
      <H1>Chemcademy</H1>
    </LogoContainer>
    <H2>Kompleksowe kursy chemiczne</H2>
    <H3>dr inż. Tomasz Boinski</H3>
    <LinksContainer>
      <Link href="/">korepetycje</Link>
      <Link href="/"> kursy</Link>
      <Link href="/"> Konsultacje </Link>
    </LinksContainer>
  </StyledHero>
);

const StyledHero = styled.div`
  background: var(--chem-gradient-hero), url('tlo.png') no-repeat center right fixed;
  min-height: 520px;
  height: 100vh;
  object-fit: cover;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem;

  & div {
    margin: 1rem 0;
  }
  img {
    width: 92px;
    margin: 0 8px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  flex-direction: column;

  ${MIN_MEDIUM_DEVICES} {
    flex-direction: row;
    align-items: flex-end;
  }

  a {
    display: inline-flex;
    align-items: center;
  }
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 1rem;
  flex-wrap: wrap;

  ${MAX_SMALL_DEVICES} {
    flex-direction: column;
  }
  & a {
    margin: 1rem;
    color: var(--chem-color-blue-gray);
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.25rem;
    text-decoration: none;

    ${MAX_SMALL_DEVICES} {
      width: 100%;
      text-align: center;
      margin: 0.5rem 0;
    }
  }

  & a:hover,
  & a:focus {
    color: var(--chem-color-blue);
  }
  & a:focus-visible {
    outline: 2px solid var(--chem-color-blue);
    outline-offset: 4px;
    border-radius: 4px;
  }
`;

export default Hero;
