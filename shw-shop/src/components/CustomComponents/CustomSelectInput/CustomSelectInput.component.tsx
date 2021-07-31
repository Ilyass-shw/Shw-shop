import styled from 'styled-components';

export const CustomLabel = styled.label`
  font-size: clamp(0.8rem, 3vw, 1rem);
  padding: 0 1rem 0 0.5rem;
  text-shadow: 0 0 black;
  display: flex;
  align-items: center;
`;

// ============= ============= ============= ============= =============

export const CustomSelect = styled.select`
  padding: 0.5rem;
  width: 40%;
  border: 1px solid #8c8c8c;
  box-shadow: inset 0 -1.4em 1em 0 rgb(0 0 0 / 5%);
  border-radius: 2px;
  &:hover {
    box-shadow: none;
  }
  @media screen and (min-width: 420px) {
    width: 90%;
  }
`;

// ============= ============= ============= ============= =============

export const CustomOption = styled.option``;
