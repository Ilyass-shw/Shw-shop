import styled, { createGlobalStyle } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';

export const GlobalStyle = createGlobalStyle<{ canScroll: boolean }>`

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Oxygen', sans-serif;
  overflow: ${({ canScroll }) => (canScroll ? 'hidden' : '')};
}
`;

export const RouterLink = styled(LinkR)`
  cursor: pointer;
  text-decoration: none;
`;
export const CustomButton = styled.button`
  border: none;
  background-color: transparent;
  font-family: inherit;
  padding: 0;
  cursor: pointer;
`;
