import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';

type Props = {
  isCartEmpty: boolean;
};
export const CartWrapper = styled(CustomButton)<Props>`
  position: relative;
  padding: 0.75rem 0.875rem;
  background-color: ${({ isCartEmpty }) => (isCartEmpty ? 'rgb(255, 35, 0)' : 'white')};
  border-radius: 50%;
  margin: 0 0.9rem;

  @media screen and (min-width: 780px) {
    margin: 0 3rem 0 2rem;
  }
`;

// ============= ============= ============= ============= =============

export const NumberOfItemsIndicator = styled.h5<Props>`
  position: absolute;
  padding: 0.05rem 0.15rem;
  background-color: ${({ isCartEmpty }) => (isCartEmpty ? 'white' : 'rgb(255, 35, 0)')};
  color: ${({ isCartEmpty }) => (isCartEmpty ? 'black' : 'rgb(255, 35, 0)')};
  font-weight: bolder;
  border-radius: 50%;
  transform: translate(1.2rem, -1.8rem);
  @media screen and (min-width: 780px) {
    transform: translate(1.7rem, -2.4rem);
  }
`;
