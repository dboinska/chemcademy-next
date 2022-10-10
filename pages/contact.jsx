import styled from 'styled-components';
import Container from '../src/components/Container';
import { H2Section } from '../src/components/headers';
import List from '../src/components/List';

import { contact } from '../data/contact';

export default function Contact() {
  return (
    <>
      <Container>
        <ContactSection margin="4rem 1rem 1rem 1rem">
          <div className="contactDetails">
            <H2Section>Skontaktuj się ze mną</H2Section>
            <List items={contact}>Dr inż. Tomasz Boinski</List>
          </div>
          <div className="map">
            <iframe
              className="mapResponsive"
              title="googleMap"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2357.509108477963!2d20.48784595287365!3d53.780425816088695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46e27932a8723f9f%3A0x79cfd3d66996656b!2sManhattan.%20Dom%20handlowy!5e0!3m2!1spl!2spl!4v1662543237698!5m2!1spl!2spl"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </ContactSection>
      </Container>
    </>
  );
}

const ContactSection = styled.div`
  overflow: hidden;
  display: flex;
  margin: ${({ margin }) => (margin ? margin : '1rem;')};
  /* justify-content: ${({ content }) => (content ? content : 'center')}; */
  flex-wrap: wrap;
  padding: 1rem 0;
  width: 100%;
  justify-content: center;

  h2,
  a {
    color: #284275;
  }
  @media screen and (min-width: 1200px) {
    /* min-width: 1100px; */
  }

  & div {
    max-width: calc(1200px / 2 - 2rem);
    border-radius: 12px;
    overflow: hidden;
    margin: 0.6rem;
    width: 100%;

    @media screen and (min-width: 1200px) {
      width: 50%;
    }

    &.map {
      min-height: 400px;
      @media screen and (min-width: 1200px) {
        order: 0;
      }
    }

    &.contactDetails {
      @media screen and (min-width: 1200px) {
        order: 1;
      }
    }
  }
`;
