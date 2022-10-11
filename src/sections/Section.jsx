import styled, { css } from 'styled-components/';
import Image from 'next/image';
import { H2Section, H3Section } from '../components/headers';
import { MAX_SMALL_DEVICES, MIN_MEDIUM_DEVICES, MIN_LARGE_DEVICES } from '../../styles/constants';

const Section = ({ children, item, imgPosition = 'left', color, content, margin, height, width, maxWidthOnSmall }) => {
  return (
    <StyledSection color={color} content={content} margin={margin}>
      <StyledContainer imgPosition={imgPosition}>
        <H2Section>{children}</H2Section>
        <H3Section>{item.subheader}</H3Section>
        <p>{item.desc}</p>
        {item.subDesc ? <p>{item.subDesc}</p> : ''}
        {item.warning ? <p className="warning">{item.warning}</p> : ''}
      </StyledContainer>
      <StyledImageContainer imgPosition={imgPosition} height={height} width={width} maxWidthOnSmall={maxWidthOnSmall}>
        <Image src={item.img} alt={item.alt} layout="fill" objectFit="cover"></Image>
      </StyledImageContainer>
    </StyledSection>
  );
};

const divStyles = css`
  max-width: var(--chem-width-wide);
  border-radius: 12px;
  overflow: hidden;
  margin: 0.6rem;
`;

const StyledSection = styled.section`
  overflow: hidden;
  display: flex;
  margin: ${({ margin }) => (margin ? margin : '1rem')};
  justify-content: ${({ content }) => (content ? content : 'center')};
  flex-wrap: wrap;
  padding: 1rem 0;
  background-color: ${({ color }) => (color ? color : 'var(--chem-color-transparent)')};
  max-width: calc(100vw - 2rem);
  
  ${MIN_LARGE_DEVICES} {
    margin: ${({ margin }) => (margin ? margin : '3rem 0')};
    min-width: 1100px;
  }
  p {
    margin: 1rem 0;
    line-height: 1.4;
    &.warning {
      background-color: var(--chem-color-main);
      text-align: center;
      color: var(--chem-color-white);
      padding: 1rem;
      margin-top: 2rem;
      border-radius: 10px;
    }
  }
  a {
    color: var(--chem-color-white);
    text-decoration: none;
    &:hover {
      cursor: pointer;
    }
  }
  img {
    width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

const StyledContainer = styled.div`
  ${divStyles}
  order: 0;
  ${MIN_MEDIUM_DEVICES} {
    order: ${({ imgPosition }) => (imgPosition === 'left' ? 1 : 0)};
  }
`;

const StyledImageContainer = styled.div`
  ${divStyles}
  order: 1;
  position: relative;
  width: var(--chem-width-wide);
  height: ${({ height }) => (height ? height : '378px')};
  width: ${({ width }) => (width ? width : '567px')};

  ${MAX_SMALL_DEVICES} {
    min-height: 220px;
    max-height: 270px;
    max-width: ${({ maxWidthOnSmall }) => (maxWidthOnSmall ? maxWidthOnSmall : '335px')};
  }

  ${MIN_MEDIUM_DEVICES} {
    order: ${({ imgPosition }) => (imgPosition === 'left' ? 0 : 1)};
  }
`;
export default Section;
