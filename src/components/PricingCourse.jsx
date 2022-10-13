import styled from 'styled-components';
import { H2, H3Pricing, H5Pricing } from './headers';

const PricingCourse = ({
  title,
  minimumPrice,
  lasts,
  link,
  weekly,
  schoolHours,
  pricingSmallGroup,
  pricingMediumGroup,
  pricingLargeGroup,
}) => {
  return (
    <StyledOption>
      <StyledContainer>
        <H2>{title}</H2>
        <H3Pricing>
          od <span>{minimumPrice} zł</span> za lekcję
        </H3Pricing>
        <h4>{lasts}miesięcy</h4>
        <a href={link}>Pobierz program</a>
      </StyledContainer>
      <StyledContainer>
        <H5Pricing>
          <span>{weekly}</span> w tygodniu
        </H5Pricing>
        <H5Pricing>
          <span>{schoolHours}</span> godzin lekcyjnych
        </H5Pricing>
      </StyledContainer>
      {pricingSmallGroup.map(smallGroup => (
        <StyledPriceGroup key={smallGroup.id}>
          <StyledPriceContainer>
            <StyledPrice color="var(--chem-color-blue-gray)">{smallGroup.lesson}zł</StyledPrice>/ lekcja
          </StyledPriceContainer>
          <StyledPriceContainer>
            <StyledPrice color="var(--chem-color-blue)">{smallGroup.month}zł</StyledPrice>/ miesiąc
          </StyledPriceContainer>
          <StyledPriceContainer>
            <StyledPrice>{smallGroup.course}zł</StyledPrice>/ kurs
          </StyledPriceContainer>
        </StyledPriceGroup>
      ))}
      {pricingMediumGroup.map(mediumGroup => (
        <StyledPriceGroup key={mediumGroup.id}>
          <StyledPriceContainer>
            <StyledPrice color="var(--chem-color-blue-gray)">{mediumGroup.lesson}zł</StyledPrice>/ lekcja
          </StyledPriceContainer>
          <StyledPriceContainer>
            <StyledPrice color="var(--chem-color-blue)">{mediumGroup.month}zł</StyledPrice>/ msc
          </StyledPriceContainer>
          <StyledPriceContainer>
            <StyledPrice>{mediumGroup.course}zł</StyledPrice>/ kurs
          </StyledPriceContainer>
        </StyledPriceGroup>
      ))}
      {pricingLargeGroup &&
        pricingLargeGroup.map(largeGroup => (
          <StyledPriceGroup key={largeGroup.id}>
            <StyledPriceContainer>
              <StyledPrice color="var(--chem-color-blue-gray)">{largeGroup.lesson}zł</StyledPrice>/ lekcja
            </StyledPriceContainer>
            <StyledPriceContainer>
              <StyledPrice color="var(--chem-color-blue)">{largeGroup.month}zł</StyledPrice>/ msc
            </StyledPriceContainer>
            <StyledPriceContainer>
              <StyledPrice>{largeGroup.course}zł</StyledPrice>/ kurs
            </StyledPriceContainer>
          </StyledPriceGroup>
        ))}
    </StyledOption>
  );
};

const StyledOption = styled.div`
  width: 300px;
  border: 3px solid var(--chem-color-light-blue);
  border-radius: 12px;
  padding: 1rem 0;
  min-height: 600px;
  display: flex;
  flex-direction: column;

  h2,
  h4 {
    margin: 1rem;
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
`;

const StyledContainer = styled.div`
  min-height: 120px;
`;

const StyledPriceContainer = styled.div`
  margin: 1rem 0;
  height: 20px;
`;

const StyledPrice = styled.span`
  font-weight: bold;
  color: ${props => (props.color ? props.color : 'var(--chem-color-main)')};
  font-size: 1rem;
`;

const StyledPriceGroup = styled.div`
  border-top: 2px solid var(--chem-color-sand);
  min-height: 120px;
`;

export default PricingCourse;
