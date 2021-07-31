import styled from 'styled-components';

export const Filter = styled.div`
  font-size: clamp(0.8rem, 3vw, 1rem);
  padding: 1.5rem 0;
  width: 16rem;
  margin: auto;
  display: flex;
  justify-content: center;
  svg {
    width: 1.3rem;
    transform: translateY(4px);
  }
  @media screen and (min-width: 420px) {
    svg {
      width: 2rem;
      transform: translateY(3px);
    }
  }
`;
