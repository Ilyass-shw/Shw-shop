import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';

export const QuantityBlock = styled.div`
  border: 1px solid #e7e7e7;
  width: 7.8rem;
  height: 2.45rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;

  @media screen and (max-width: 334px),
    (max-width: 990px) and (min-width: 916px) {
    width: 5.8rem;
  }
`;

// ============= ============= ============= ============= =============

export const QuantityButton = styled(CustomButton)`
  font-size: x-large;
  font-weight: bold;
  flex-grow: 1;
  height: 100%;
  color: #a7a7a7;
  box-shadow: inset 0 -1.4em 1em 0 rgb(0 0 0 / 2%);
  &:hover,
  :focus {
    box-shadow: none;
  }
`;

// ============= ============= ============= ============= =============

export const Quantity = styled.h3`
  display: inline-block;
  color: #939393;
  box-shadow: inset 0 -1.4em 1em 0 rgb(0 0 0 / 2%);
  font-size: medium;
`;
