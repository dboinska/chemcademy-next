import styled from 'styled-components';
import { H2Section } from '../components/headers';
import Image from 'next/image';
import { H3Badges } from '../components/headers';

const Badges = ({ items, children, color, textAlign, fontWeight }) => {
  return (
    <>
      <StyledDiv>
        <H2Section>{children}</H2Section>
      </StyledDiv>
      <StyledOffered color={color} textAlign={textAlign} fontWeight={fontWeight}>
        {items.map(item => (
          <div key={item.id}>
            <div className="flex">
              <Image src={item.img} alt={item.alt} height="58" weight="58" />
              <H3Badges>{item.title}</H3Badges>
            </div>
            <p>{item.text}</p>
          </div>
        ))}
      </StyledOffered>
    </>
  );
};

const StyledDiv = styled.div`
  max-width: 80%;
  margin: 0 auto;
`;

const StyledOffered = styled.section`
  margin: 3rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;

  div {
    max-width: 300px;
    margin: 0.875rem;

    &.flex {
      display: flex;
      align-items: center;
    }

    p {
      color: ${({ color }) => (color ? color : 'var(--chem-color-main)')};
      text-align: ${({ textAlign }) => (textAlign ? textAlign : 'left')};
      font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : '300')};
      line-height: 1.6;
    }
  }
`;

export default Badges;
