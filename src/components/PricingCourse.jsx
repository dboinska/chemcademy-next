import styled from 'styled-components';

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
    <div className="option">
      <div>
        <h2>{title}</h2>
        <h3>
          od <span className="minPrice">{minimumPrice} zł</span> za lekcję
        </h3>
        <h4>{lasts}miesięcy</h4>
        <a href={link}>Pobierz program</a>
      </div>
      <div>
        <p>
          <span className="dark">{weekly}</span> w tygodniu
        </p>
        <p>
          <span className="dark">{schoolHours}</span> godzin lekcyjnych
        </p>
      </div>
      {pricingSmallGroup.map(smallGroup => (
        <div className="price" key={smallGroup.id}>
          <p>
            <Price className="light">{smallGroup.lesson}zł</Price>/ lekcja
          </p>
          <p>
            <Price className="medium">{smallGroup.month}zł</Price>/ miesiąc
          </p>
          <p>
            <Price>{smallGroup.course}zł</Price>/ kurs
          </p>
        </div>
      ))}
      {pricingMediumGroup.map(mediumGroup => (
        <div className="price" key={mediumGroup.id}>
          <p>
            <Price className="light">{mediumGroup.lesson}zł</Price>/ lekcja
          </p>
          <p>
            <Price className="medium">{mediumGroup.month}zł</Price>/ msc
          </p>
          <p>
            <Price>{mediumGroup.course}zł</Price>/ kurs
          </p>
        </div>
      ))}
      {pricingLargeGroup
        ? pricingLargeGroup.map(largeGroup => (
            <div className="price" key={largeGroup.id}>
              <p>
                <Price className="light">{largeGroup.lesson}zł</Price>/ lekcja
              </p>
              <p>
                <Price className="medium">{largeGroup.month}zł</Price>/ msc
              </p>
              <p>
                <Price>{largeGroup.course}zł</Price>/ kurs
              </p>
            </div>
          ))
        : ''}
    </div>
  );
};

const Price = styled.span`
  font-weight: bold;
  color: var(--chem-color-main);
  font-size: 1rem;
`;

export default PricingCourse;
