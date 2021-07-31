import styled from 'styled-components';
import { FieldError } from 'react-hook-form';

type InputTypeProps = {
  isError: FieldError | undefined;
};
export const Select = styled.select<InputTypeProps>`
  color: #55565a;
  border-radius: 5px;
  border: 1px solid;
  padding: 1.2rem;
  margin: 0.9rem 0;
  font-size: 0.9rem;
`;

// ============= ============= ============= ============= =============

export const Country = styled.option``;

// ============= ============= ============= ============= =============

export const Optgroup = styled.optgroup``;

// ============= ============= ============= ============= =============

export const FormError = styled.p`
  color: red;
  margin: 0 0 0.8rem 1rem;
`;
