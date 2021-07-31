import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
`;
// ============= ============= ============= ============= =============

export const ToTheRight = styled.div`
  display: flex;
  align-items: center;
`;
// ============= ============= ============= ============= =============

export const Img = styled.div`
  position: relative;
`;
// ============= ============= ============= ============= =============

export const ItemImg = styled.img`
  height: 4rem;
  border-radius: 5px;
  object-fit: cover;
`;
// ============= ============= ============= ============= =============

export const Quantity = styled.div`
  position: absolute;
  color: white;
  top: -10px;
  right: -10px;
  height: 1.5rem;
  width: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: small;
  background-color: #808080;
  border-radius: 50%;
`;
// ============= ============= ============= ============= =============

export const ItemName = styled.p`
  margin: 0 1rem;
`;
// ============= ============= ============= ============= =============

export const ItemPrice = styled.h4``;
