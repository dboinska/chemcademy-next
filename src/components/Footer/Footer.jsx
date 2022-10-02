import styled from 'styled-components';
import List from '../List';
import { address, courses, individual, contact } from './constants.js';
import Logo from '../Logo';
import Address from '../Address';

const Footer = () => {
  return (
    <StyledFooter>
      <Container paddingTop>
        <Logo />
      </Container>
      <Container>
        <Address items={address}>Dr inż. Tomasz Boinski</Address>
        <List items={courses}>Kursy grupowe</List>
        <List items={individual}>Zajęcia indywidualne</List>
        <List items={contact}>kontakt</List>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  background-color: var(--chem-color-main);
  padding: 2rem;
`;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: ${props => (props.paddingTop ? '3rem 0 0 0' : '0 0 2rem 0')};
  flex-wrap: wrap;
  @media screen and (min-width: 1200px) {
    max-width: 1100px;
  }
  a {
    color: var(--chem-color-white);
    display: flex;
    align-items: center;
  }
`;

export default Footer;
