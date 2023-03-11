import React from "react";
import {
  NavLinkElement,
  NavigationItem,
  NavigationItemsContainer,
} from "../utils/styledComponents";

const NavigationItems = () => {
  return (
    <NavigationItemsContainer>
      <NavLinkElement to="/carts">
        <NavigationItem>All carts</NavigationItem>
      </NavLinkElement>
    </NavigationItemsContainer>
  );
};

export default NavigationItems;