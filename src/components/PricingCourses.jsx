import styled from 'styled-components';
import PricingCourse from './PricingCourse';

import { MAX_LARGE_DEVICES, MIN_LARGE_DEVICES } from '../../styles/constants';

const PricingCourses = ({ items, children }) => {
  return (
    <StyledOffer>
      <StyledOptionLabel>
        {children !== 'notLarge' && <div>grupy 10-12 osobowe</div>}
        <div>grupy 7-9 osobowe</div>
        <div>grupy 5-6 osobowe</div>
      </StyledOptionLabel>
      {items.map(item => (
        <PricingCourse
          key={item.id}
          title={item.title}
          minimumPrice={item.min}
          lasts={item.lasts}
          link={item.link}
          weekly={item.weekly}
          schoolHours={item.schoolHours}
          pricingSmallGroup={item.smallGroup}
          pricingMediumGroup={item.mediumGroup}
          pricingLargeGroup={item.largeGroup}
        />
      ))}
    </StyledOffer>
  );
};

const StyledOffer = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 0.5rem;

  ${MIN_LARGE_DEVICES} {
    margin: 1rem;
  }
`;

const StyledOptionLabel = styled.div`
  width: 300px;
  border: 3px solid var(--chem-color-light-blue);
  border-radius: 12px;
  padding: 1rem 0;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  border: none;
  flex-direction: column-reverse;
  ${MAX_LARGE_DEVICES} {
    max-width: 80px;
  }

  div {
    min-height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export default PricingCourses;
