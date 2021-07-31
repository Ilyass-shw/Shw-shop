import styled from 'styled-components';

interface itemImage {
  currentImgg: boolean;
  index: number;
}
export const ItemImages = styled.div`
  white-space: nowrap;
  overflow: hidden;
  height: 55vh;
`;

// ============= ============= ============= ============= =============

export const ItemImage = styled.img<itemImage>`
  display: inline-block;
  position: relative;
  /* left: 0; */
  opacity: ${({ currentImgg }) => (currentImgg ? '1' : '0')};
  left: ${({ index }) => '-' + index * 100 + '%'};
  top: 0;
  width: 100%;
  object-fit: cover;
  height: 55vh;
`;
