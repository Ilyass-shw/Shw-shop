import styled from 'styled-components';
import { CustomButton } from '../../../App/App.component';

// ============= ============= ============= ============= =============
export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 93%;
  margin: 1rem;
  max-width: 34rem;
`;

// ============= ============= ============= ============= =============

export const MoveToRight = styled.div`
  display: flex;
  align-items: center;
  align-self: self-start;
`;

// ============= ============= ============= ============= =============

export const Img = styled.div`
  position: relative;
  width: 4rem;
  flex-shrink: 0;
  border-radius: 5px;
`;

// ============= ============= ============= ============= =============

export const Info = styled.div`
  margin: 0 1rem;
`;

// ============= ============= ============= ============= =============

export const MoveToLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #cccccc;
  flex-shrink: 0;
  min-width: fit-content;
`;

// ============= ============= ============= ============= =============

export const ItemImg = styled.img`
  height: 4rem;
  border-radius: 5px;
  object-fit: cover;
`;

// ============= ============= ============= ============= =============

export const ItemName = styled.p`
  text-overflow: ellipsis;
  color: #4f4e4e;
`;

// ============= ============= ============= ============= =============

export const ItemPrice = styled.p`
  font-size: smaller;
  color: #666666b3;
`;

// ============= ============= ============= ============= =============

export const RemoveButton = styled(CustomButton)`
  padding: 0.6rem;
  color: #939393;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    width: 80%;
    height: 1px;
    left: 7px;
    bottom: 9.5px;
    background: currentColor;
    transform: scale(1, 1);
    transform-origin: left center;
    transition: transform 0.2s ease-in-out;
  }
  &:hover:before {
    transform: scale(0, 1);
  }
`;
