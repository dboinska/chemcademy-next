import styled from 'styled-components';
import Course from './Course';

import { MIN_LARGE_DEVICES } from '../../styles/constants';

const Courses = ({ items }) => {
  return (
    <StyledCourses>
      {items.map(item => (
        <Course key={item.id} imageUrl={item.img} imageAlt={item.alt} featured={item.importants} title={item.title}>
          {item.text}
        </Course>
      ))}
    </StyledCourses>
  );
};

const StyledCourses = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 0;
  margin: 0 auto;
  justify-content: center;

  @media screen and (min-width: 992px) {
    max-width: 900px;
  }

  ${MIN_LARGE_DEVICES} {
    max-width: 1200px;
    padding: 0;
  }
`;

export default Courses;
