import React, { useState } from 'react';
import HoverBarWrapper from '../CustomComponents/HoverBarWrapper/HoverBarWrapper/HoverBarWrapper';
import {
  NavLink,
  Links,
  LinkButton,
  CategoryList,
  Category,
} from './NavLinks.component';

const NavLinks: React.FC = () => {
  const [shopHoveredOn, setShopHoveredOn] = useState(false);
  const [caterogiesHoveredOn, setCaterogiesHoveredOn] = useState(false);

  return (
    <Links>
      <NavLink>
        <HoverBarWrapper
          durationInSec={'1s'}
          repeate={1}
          active={shopHoveredOn}
        >
          <LinkButton
            onMouseEnter={(): void => setShopHoveredOn(true)}
            onMouseLeave={(): void => setShopHoveredOn(false)}
            to="/"
          >
            Shop
          </LinkButton>
        </HoverBarWrapper>
      </NavLink>

      <NavLink>
        <HoverBarWrapper
          durationInSec={'1s'}
          repeate={1}
          active={caterogiesHoveredOn}
        >
          <LinkButton
            onMouseEnter={(): void => setCaterogiesHoveredOn(true)}
            onMouseLeave={(): void => setCaterogiesHoveredOn(false)}
            to="/"
          >
            Categories
          </LinkButton>
        </HoverBarWrapper>
        <CategoryList
          data-testid="dropdown Categories"
          onMouseEnter={(): void => setCaterogiesHoveredOn(true)}
          onMouseLeave={(): void => setCaterogiesHoveredOn(false)}
          isHover={caterogiesHoveredOn}
        >
          <Category to="/">Jewelry</Category>
          <Category to="/">Photo prints</Category>
        </CategoryList>
      </NavLink>
    </Links>
  );
};

export default NavLinks;
