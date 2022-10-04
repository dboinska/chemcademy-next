import styled from 'styled-components';

import Link from 'next/link';
import { StyledUl, StyledList } from './List';

const Address = ({ children, items }) => {
  return (
    <StyledUl>
      <h2>{children}</h2>
      <AddressStyledList>
        <Link className="light" href={items.link} target={items.target} rel={items.rel}>
          <a>
            <span className="flex">
              {items.icon}
              {items.apartment}
            </span>
            <span>{items.street}</span>
            <span>{items.zipCode}</span>
          </a>
        </Link>
      </AddressStyledList>
    </StyledUl>
  );
};

const AddressStyledList = styled(StyledList)`
  a {
    display: flex;
    flex-direction: column;

    .flex {
      display: flex;
      align-items: center;
    }

    span {
      display: block;
      text-align: left;
      width: 100%;
    }
  }
`;

export default Address;
