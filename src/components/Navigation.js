import React from "react";
import { useNavigate } from "react-router";
import { SideNavigation, NavigationHeader } from "../utils/styledComponents";
import NavigationItems from "./NaviationItems";

const Navigation = () => {
    const navigate = useNavigate();

    const onWelcomePageNavigate = () => {
      navigate("/");
    };

  return (
    <SideNavigation>
      <NavigationHeader onClick={onWelcomePageNavigate}>Welcome</NavigationHeader>
      <NavigationItems />
    </SideNavigation>
  );
};

export default Navigation;
