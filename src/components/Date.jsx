import styled from 'styled-components';
import { MIN_MEDIUM_DEVICES } from '../../styles/constants';
const Date = ({ children, items }) => {
  return (
    <StyledDate>
      <h4>{children}</h4>
      {items.map(item => (
        <div key={item.id}>
          <span>{item.schedule}</span>
        </div>
      ))}
    </StyledDate>
  );
};

const StyledDate = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 2px solid var(--chem-color-sand);
  }

  ${MIN_MEDIUM_DEVICES} {
    flex-direction: row;
    height: 60px;
  }
  & h4 {
    color: var(--chem-color-main);
    text-transform: uppercase;
    padding: 1rem 0;

    padding: 0;
    width: 200px;
    text-align: center;
    margin: 1.4rem auto;

    ${MIN_MEDIUM_DEVICES} {
      margin: 1rem;
      margin-right: 1rem;
    }
  }
`;
export default Date;
