import styled from 'styled-components';

export const PriceCalculator = styled.div`
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
`;

// ============= ============= ============= ============= =============

export const CalculatorBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem;
`;

// ============= ============= ============= ============= =============

export const Label = styled.p`
  color: #535353;
`;

// ============= ============= ============= ============= =============

export const UntilNextStep = styled.p`
  color: #535353;
  font-size: smaller;
`;

// ============= ============= ============= ============= =============

export const Price = styled.h4``;

// ============= ============= ============= ============= =============

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem 1rem;
`;

// ============= ============= ============= ============= =============

export const TotalLabel = styled.h2`
  font-size: larger;
`;

// ============= ============= ============= ============= =============

export const TotalPrice = styled.h3`
  @media screen and (min-width: 1200px) {
    font-size: x-large;
  }
`;
