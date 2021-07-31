import styled from 'styled-components';
import { FieldError } from 'react-hook-form';

type InputTypeProps = {
  isError: FieldError | undefined;
};
export const Input = styled.input<InputTypeProps>`
  border-radius: 5px;
  border: 1px solid ${({ isError }) => (isError ? 'red' : '#d9d9d9')};
  padding: 1.2rem;
  margin: 0.9rem 0;
  font-size: 0.9rem;
  &:focus-visible {
    border-color: red;
  }
`;

// ============= ============= ============= ============= =============

export const FormError = styled.p`
  color: red;
  margin: 0 0 0.8rem 1rem;
`;
