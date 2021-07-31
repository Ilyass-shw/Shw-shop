import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';

export const MainImgContainer = styled.div`
  position: relative;
`;

// ============= ============= ============= ============= =============

export const Arrow = styled(CustomButton)<{ left: boolean }>`
  position: absolute;
  z-index: 1;
  padding: 0.5rem;
  top: 50%;
  ${({ left }) => (left ? 'left: 10%' : 'right: 10%')};
  transform: scale(3.5);
`;
