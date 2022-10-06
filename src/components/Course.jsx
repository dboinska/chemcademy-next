import styled from 'styled-components';
import Image from 'next/image';
import { BsStars } from 'react-icons/bs';
import { MAX_SMALL_DEVICES } from '../../styles/constants';
import { H2Courses } from './headers';

const Course = ({ imageUrl, imageAlt, featured, children, title }) => (
  <StyledCourse>
    <Image src={imageUrl} alt={imageAlt} width="335" height="180" objectFit="cover" />
    <H2Courses>{title}</H2Courses>
    <StyledUl>
      {featured.map(important => (
        <StyledLi key={important.id} fontColor={important.color}>
          <BsStars />
          {important.p}
        </StyledLi>
      ))}
    </StyledUl>
    <p>{children}</p>
  </StyledCourse>
);

const StyledCourse = styled.div`
  border: 3px solid var(--chem-color-light-blue);
  border-radius: 20px;
  width: 340px;
  margin: 0.6rem;
  overflow: hidden;
  position: relative;

  ${MAX_SMALL_DEVICES} {
    margin: 1rem 2rem;
  }

  p {
    padding: 1.2rem;
    display: flex;
    background-color: var(--chem-color-white-blue);
    position: absolute;
    bottom: 0;
    height: 140px;
    align-items: center;
    border-top: 2px solid var(--chem-color-light-blue);
    font-weight: 400;
  }

  span {
    vertical-align: bottom;
  }
`;

const StyledUl = styled.ul`
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding: 0 1rem;
  min-height: 168px;
  justify-content: space-evenly;
`;

const StyledLi = styled.li`
  margin: 0.25rem;
  color: ${({ fontColor }) => (fontColor === 'blue' ? 'var(--chem-color-blue)' : 'var(--chem-color-main)')};
  font-weight: 500;
  list-style: none;

  svg {
    margin-right: 4px;
    display: inline-block;
  }
`;
export default Course;
