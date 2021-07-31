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
  margin: 0 0 0 1rem;
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

// ============= ============= ============= ============= =============

export const CategoryList = styled.div<{
  isHover: boolean;
}>`
  position: absolute;
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 9%);
  padding-top: 15px;
  transform: ${({ isHover }) =>
    isHover ? 'translateY(2px)' : 'translateY(0)'};
  visibility: ${({ isHover }) => (isHover ? 'visible' : 'hidden')};
  transition: 0.18s;
  z-index: 100;
`;
// ============= ============= ============= ============= =============

export const Category = styled(RouterLink)`
  position: relative;
  color: black;
  padding: 10px 10px;
  white-space: nowrap;
`;
