import styled from 'styled-components';
import PricingCourse from './PricingCourse';

import { MAX_LARGE_DEVICES, MIN_LARGE_DEVICES } from '../../styles/constants';

const PricingCourses = ({ items, children }) => {
  return (
    <StyledOffer>
      <div className="option label">
        {children !== 'notLarge' ? <div className="group">grupy 10-12 osobowe</div> : ''}
        <div className="group">grupy 7-9 osobowe</div>
        <div className="group">grupy 5-6 osobowe</div>
      </div>
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

  .option {
    width: 300px;
    border: 3px solid var(--chem-color-light-blue);
    border-radius: 12px;
    padding: 1rem 0;
    min-height: 600px;
    display: flex;
    flex-direction: column;

    &.label {
      ${MAX_LARGE_DEVICES} {
        max-width: 80px;
      }
    }
    &:first-of-type {
      border: none;
      flex-direction: column-reverse;
    }
    h2,
    h3,
    h4 {
      margin: 1rem;
    }
    div {
      min-height: 120px;

      &.group {
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      &.price {
        border-top: 2px solid var(--chem-color-sand);
      }

      :first-of-type:not(.group) {
        min-height: 234px;
      }
    }

    p {
      margin: 1rem 0;
    }
    a {
      display: block;
      border: 3px solid var(--chem-color-main);
      border-radius: 12px;
      color: var(--chem-color-white);
      background-color: var(--chem-color-main);
      padding: 0.6rem;
      margin: 2rem auto;
      text-decoration: none;
      max-width: 180px;
    }
  }

  span {
    &.minPrice {
      color: var(--chem-color-blue);
      font-size: 1.6rem;
    }
    &.dark {
      color: var(--chem-color-dark);
      font-weight: bold;
    }
    &.medium {
      color: var(--chem-color-blue);
    }
    &.light {
      color: var(--chem-color-blue-gray);
    }
  }
`;

export default PricingCourses;
