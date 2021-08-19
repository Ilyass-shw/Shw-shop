import styled from 'styled-components';
import { RouterLink } from '../../App/App.component';

export const Links = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-right: 0.3rem;
`;

// ============= ============= ============= ============= =============

export const NavLink = styled.div`
  margin: 0 1rem 0 1rem;
`;

// ============= ============= ============= ============= =============

export const LinkButton = styled(RouterLink)`
  font-weight: 700;
  color: black;
  padding-bottom: 1rem;

  @media screen and (min-width: 780px) {
    font-size: 1.2rem;
  }
`;
