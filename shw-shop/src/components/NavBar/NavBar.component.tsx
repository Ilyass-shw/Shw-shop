import styled from 'styled-components';
import { RouterLink } from '../../App/App.component';

export const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  width: 100vw;
  height: 6rem;
  background-color: white;
  z-index: 2;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

// ============= ============= ============= ============= =============

export const NavLinkWrapper = styled.div`
  display: flex;
  align-items: center;

  @media screen and (min-width: 360px) {
    flex-direction: row;
  }
`;
// ============= ============= ============= ============= =============

export const NavLogo = styled(RouterLink)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #55565a;
  padding: 0 0 0 1rem;

  @media screen and (min-width: 700px) {
    margin: 0 3rem 0 2rem;
  }
`;

// ============= ============= ============= ============= =============

export const Icon = styled.div``;
