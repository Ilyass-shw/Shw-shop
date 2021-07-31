import styled from 'styled-components';
import { CustomButton, RouterLink } from '../../../App/App.component';

export const Logo = styled(RouterLink)`
  font-size: 1.8rem;
  font-weight: bold;
  color: #55565a;
  display: flex;
  width: 100vw;
  align-items: center;
  justify-content: center;
  height: 9rem;

  @media screen and (min-width: 1200px) {
    width: 62vw;
  }
`;

// ============= ============= ============= ============= =============

export const FormContainer = styled.div`
  width: 95vw;
  @media screen and (min-width: 1200px) {
    width: 65vw;
  }
`;

// ============= ============= ============= ============= =============

export const Form = styled.form`
  color: #333;
  padding: 2rem 0.5rem;
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: auto;
`;

// ============= ============= ============= ============= =============

export const MainLabel = styled.h2`
  padding: 0.9rem 0;
`;

// ============= ============= ============= ============= =============

export const SignIn = styled.p``;

// ============= ============= ============= ============= =============

export const Link = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

// ============= ============= ============= ============= =============

export const SubmitButton = styled(CustomButton)`
  padding-top: 1.75em;
  padding-bottom: 1.75em;
  background-color: #5c5c5c;
  border: 1px transparent solid;
  border-radius: 5px;
  font-weight: 600;
  color: white;
  margin: 1rem 0;
`;

// ============= ============= ============= ============= =============

export const ReturnLink = styled(RouterLink)`
  padding-top: 1.75em;
  padding-bottom: 1.75em;
  font-weight: 600;
  color: black;
  text-align: center;
  font-size: smaller;
`;
