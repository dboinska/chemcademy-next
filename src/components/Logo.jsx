import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

import { MAX_SMALL_DEVICES } from '../../styles/constants';

const Logo = () => (
  <Link href="/" className="light" passHref>
    <StyledLogoContainer blue>
      <Image src="/logobiale.png" alt="logo" width="48" height="46" />
      chemcademy
    </StyledLogoContainer>
  </Link>
);

const StyledLogoContainer = styled.a`
  font-weight: bold;
  display: flex;
  align-items: flex-end;
  gap: 0.4rem;
  color: ${props => (props.blue ? 'var(--chem-color-main)' : 'var(--chem-color-white)')};
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  text-decoration: none;

  /* ${MAX_SMALL_DEVICES} {
    flex-direction: column;
  } */
`;

export default Logo;
