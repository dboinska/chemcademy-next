import styled from 'styled-components';

import { MIN_LARGE_DEVICES } from '../../styles/constants';

import Link from 'next/link';
const List = ({ children, items }) => {
  return (
    <StyledUl>
      <h2>{children}</h2>
      {items.map(item => (
        <StyledList key={item.id}>
          <Link className="light" href={item.link} target={item.target} rel={item.rel}>
            <a>
              {item.icon}
              {item.label}
            </a>
          </Link>
        </StyledList>
      ))}
    </StyledUl>
  );
};
export const StyledUl = styled.ul`
  display: flex;
  flex-direction: column;
  color: var(--chem-color-light-blue);
  padding: 1rem;
  max-width: 340px;

  h2 {
    color: var(--chem-color-light-blue);
    font-size: 1rem;
    margin: 2rem 0.1rem 1rem 0.1rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;

    ${MIN_LARGE_DEVICES} {
      margin-top: 1rem;
    }
  }
`;

export const StyledList = styled.li`
  margin: 6px;
  font-size: 0.9rem;
  list-style: none;
  svg {
    margin-right: 0.4rem;
    display: inline-block;
  }
  a {
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default List;
