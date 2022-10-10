import styled from 'styled-components';
import { H2 } from './headers';
import FaqItem from './FaqItem';
import { MIN_LARGE_DEVICES, MAX_LARGE_DEVICES } from '../../styles/constants';

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

  .inline {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem 0;
    @media screen and (min-width: 733px) {
      justify-content: space-between;
    }
  }

  .question {
    border: 3px solid var(--chem-color-light-blue);
    border-radius: 12px;
    min-width: 320px;
    margin: 0 auto;
    text-align: center;
    width: 50%;
    color: var(--chem-color-main);
    font-weight: bold;
    position: relative;
    font-size: 0.875rem;
    line-height: 1.618;
    transition: all 0.3s ease;
    .open {
      background-color: var(--chem-color-white);
    }
    &:hover {
      background-color: var(--chem-color-main);
      color: var(--chem-color-white);
    }

    h3 {
      padding: 0 0.6rem;
    }
    ${MAX_LARGE_DEVICES} {
      padding-left: 0.2rem;
      text-align: left;
    }

    svg {
      right: 20px;
      margin: 0.4rem;
      ${MIN_LARGE_DEVICES} {
        position: absolute;
        right: 10px;
      }
    }
  }

  .answer {
    color: var(--chem-color-dark);
    font-weight: 300;
    width: 100%;
    padding: 1rem;
    text-align: left;
    display: none;

    &.open {
      display: flex;
    }
  }
`;

export default Faq;
