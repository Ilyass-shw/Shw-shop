import styled from 'styled-components';

export const ToggleButton = styled.div`
  height: 4rem;
  cursor: pointer;
  border-bottom: 1px solid #e6e6e6;
`;
// ============= ============= ============= ============= =============

export const ButtonContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  max-width: 40rem;
  margin: auto;
  height: 100%;
`;
// ============= ============= ============= ============= =============

export const ButtonHeader = styled.h5<{ show: boolean }>`
  display: flex;
  align-items: center;
  width: 14rem;
  justify-content: space-evenly;
  position: relative;
  &::after {
    content: '◀';
    position: absolute;
    top: ${({ show }) => (show ? '2px' : 0)};
    right: 19px;
    transform-origin: center;
    transition: all 0.4s;
    transform: ${({ show }) =>
      show ? 'rotate(270deg) scale(0.9)' : 'rotate(90deg) scale(0.9)'};
  }
`;

// ============= ============= ============= ============= =============

export const TotalPrice = styled.h4``;
