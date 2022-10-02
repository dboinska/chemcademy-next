import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const Logo = () => {
  return (
    <>
      <Link href="/" className="light" passHref>
        <StyledLogoContainer blue>
          <Image src="/logobiale.png" alt="logo" width="48" height="46" />
          chemcademy
        </StyledLogoContainer>
      </Link>
    </>
  );
};

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

  @media screen and (max-width: 630px) {
    flex-direction: column;
  }
`;

export default Logo;
