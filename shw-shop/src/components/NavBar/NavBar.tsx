import React from 'react';

import { toggleCartSlideBar } from '../../helpers/toggleCartSlideBar';

import NavLinks from '../NavLinks/NavLinks';
import CartIcon from '../Cart/CartIcon/CartIcon';
import CartBar from '../Cart/CartSlideBar/CartSlideBar';

import {
  NavBarContainer,
  NavLinkWrapper,
  NavLogo,
  Icon,
} from './NavBar.component';

const NavBar: React.FC = () => {
  return (
    <NavBarContainer>
      <NavLogo to="/">Shw</NavLogo>

      <CartBar />

      <NavLinkWrapper>
        <NavLinks />

        <Icon
          onClick={() => {
            toggleCartSlideBar();
          }}
          data-testid="cart-icon"
        >
          <CartIcon />
        </Icon>
      </NavLinkWrapper>
    </NavBarContainer>
  );
};

export default NavBar;
