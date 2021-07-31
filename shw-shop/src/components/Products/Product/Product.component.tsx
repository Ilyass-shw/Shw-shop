import styled from 'styled-components';
import { RouterLink } from '../../../App/App.component';

export const ProductItem = styled.li`
  overflow: hidden;
  padding: 1rem 1rem;
  width: 85vw;
  margin: auto;
  line-height: 1.8rem;
  @media screen and (min-width: 960px) {
    width: 40vw;
  }
  @media screen and (min-width: 1276px) {
    width: 30vw;
  }
`;

// ============= ============= ============= ============= =============

export const ProductLink = styled(RouterLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: black;
`;

// ============= ============= ============= ============= =============

export const ItemName = styled.h4`
  padding: 0.2rem 0 0 0;
  text-align: center;
`;

// ============= ============= ============= ============= =============

export const ItemPrice = styled.h6`
  font-weight: 600;
`;
