import React from "react";
import { SideNavigation } from "../utils/styledComponents";
import NavigationItems from "./NaviationItems";

const Navigation = ({ openProfile }) => {
  return (
    <SideNavigation>
      <NavigationItems
        openProfile={openProfile}
      />
    </SideNavigation>
  );
};

export default Navigation;
