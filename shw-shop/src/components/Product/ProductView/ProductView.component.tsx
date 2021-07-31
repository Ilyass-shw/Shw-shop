import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 6rem;
  @media screen and (min-width: 916px) {
    flex-direction: row;
    padding: 2rem 2rem 2rem 0;
  }
`;

// ============= ============= ============= ============= =============

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

// ============= ============= ============= ============= =============

export const Size = styled.div`
  padding: 1rem;
  display: block;
`;

// ============= ============= ============= ============= =============

export const CustomLabel = styled.label`
  padding: 1rem 0;
  display: block;
`;

// ============= ============= ============= ============= =============

export const CustomSelect = styled.select`
  padding: 0.5rem;
  width: 90%;
  border: 1px solid #8c8c8c;
  box-shadow: inset 0 -1.4em 1em 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  &:hover {
    box-shadow: none;
  }
`;

// ============= ============= ============= ============= =============

export const CustomOption = styled.option``;

// ============= ============= ============= ============= =============

export const ButtomView = styled.div`
  padding: 1rem;
  display: flex;
`;

// ============= ============= ============= ============= =============

export const NumberOfItem = styled.div`
  display: inline-block;
`;

// ============= ============= ============= ============= =============

export const QuantityButton = styled(CustomButton)`
  height: 2rem;
  width: 2rem;
  font-size: large;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  display: inline-block;
`;

// ============= ============= ============= ============= =============

export const TheNumber = styled.p`
  display: inline-block;
  width: 2rem;
  border: 1px solid #ddd;
  height: 100%;
  text-align: center;
`;

// ============= ============= ============= ============= =============

export const AddToCartButton = styled(CustomButton)`
  display: inline-block;
  padding: 0.6rem 1.9rem;
  background-color: black;
  margin-left: 0.5rem;
  border-radius: 2px;
  font-weight: 900;
  color: white;
  @media screen and (max-width: 334px) {
    padding: 0.6rem 1.2rem;
  }
`;
