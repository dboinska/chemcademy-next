import styled from 'styled-components';
import { H2 } from './headers';
import FaqItem from './FaqItem';

const Faq = ({ items }) => {
  return (
    <StyledFaq>
      <H2>Najczęściej zadawane pytania</H2>
      {items.map(item => (
        <FaqItem key={item.id} question={item.question} answer={item.answer}></FaqItem>
      ))}
    </StyledFaq>
  );
};

const StyledFaq = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.4rem;
  margin: 1rem 0 2rem 0;
`;

export default Faq;
