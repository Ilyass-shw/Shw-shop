import styled from 'styled-components';
import { CustomButton, RouterLink } from '../../../App/App.component';

interface WrapperProps {
  open: boolean;
}

export const CartBarWrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  height: ${(props: WrapperProps) => (props.open ? '100vh' : '0')};
  width: 100vw;
  transition: background-color 0.28s ease-in-out, height 0s ease-in-out;
  background-color: ${(props: WrapperProps) =>
    props.open ? '#0000006e;' : 'transparent;'};
`;

// ============= ============= ============= ============= =============

interface ContentProps {
  open: boolean;
  fullPage: boolean;
}

export const Content = styled.div`
  z-index: 101;
  position: fixed;
  overflow-y: scroll;
  width: 100vw;
  opacity: ${(props: ContentProps) => (props.open ? '1' : '0')};
  top: ${(props: ContentProps) => {
    if (props.open) {
      if (props.fullPage) {
        return '0';
      } else {
        return '50vh';
      }
    } else {
      return '100vh';
    }
  }};
  height: ${(props: ContentProps) => {
    if (props.open && props.fullPage) {
      return '100vh';
    } else {
      return '50vh';
    }
  }};
  transition: all 0.28s;
  background-color: white;

  @media screen and (min-width: 780px) {
    top: 0;
    right: 0;
    width: 40vw;
    min-width: 28rem;
    height: 100vh;
    transform: ${(props: ContentProps) =>
      props.open ? 'translateX(0)' : 'translateX(100%)'};
  }
`;

// ============= ============= ============= ============= =============

export const Items = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// ============= ============= ============= ============= =============

export const CloseButton = styled(CustomButton)`
  position: absolute;
  right: 0;
  top: 0;
  padding: 5px;
`;
// ============= ============= ============= ============= =============

export const Total = styled.div`
  height: 3rem;
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
// ============= ============= ============= ============= =============

export const Price = styled.p``;

// ============= ============= ============= ============= =============

export const CheckoutFooter = styled.div`
  padding: 1.25rem 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// ============= ============= ============= ============= =============
interface CheckoutButtonProps {
  disable: string;
}

export const CheckoutButton = styled(RouterLink)<CheckoutButtonProps>`
  height: 2.7rem;
  width: 100%;
  background-color: ${({ disable }) =>
    disable === 'true' ? '#000000b5' : 'black'};
  border-radius: 35px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: ${({ disable }) => (disable === 'true' ? 'none' : 'auto')};
`;
