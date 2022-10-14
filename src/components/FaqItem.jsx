import { useState } from 'react';
import styled from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { H3Question } from './headers';
import { MAX_LARGE_DEVICES, MIN_LARGE_DEVICES } from '../../styles/constants';

const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledQuestion onClick={() => setIsOpen(currentState => !currentState)}>
      <StyledTitleContainer>
        <H3Question>{question}</H3Question>
        <IoIosArrowDown />
      </StyledTitleContainer>
      <StyledAnswerContainer active={isOpen === true}>{answer}</StyledAnswerContainer>
    </StyledQuestion>
  );
};

const StyledQuestion = styled.div`
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

  &:hover {
    background-color: var(--chem-color-main);
    color: var(--chem-color-white);
  }

  svg {
    right: 20px;
    margin: 0.4rem;
    ${MIN_LARGE_DEVICES} {
      position: absolute;
      right: 10px;
    }
  }
`;
const StyledTitleContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem 0;
  @media screen and (min-width: 733px) {
    justify-content: space-between;
  }
`;

const StyledAnswerContainer = styled.div`
  color: var(--chem-color-dark);
  font-weight: 300;
  width: 100%;
  padding: 1rem;
  text-align: left;
  display: ${props => (props.active ? 'flex' : 'none')};
  background-color: var(--chem-color-white);
`;

export default FaqItem;
