import React from "react";
import {
  Window,
  CloseButton,
  Header,
  Title,
  Anchor,
} from "../utils/styledComponents";

const Profile = ({ closeProfile }) => {
  return (
    <Window>
      <Header>Details:</Header>
      <Anchor href="https://dummyjson.com/carts" target="_blank">
        BASE API URL
      </Anchor>
      <Anchor href="https://github.com/maniazurek/Carts" target="_blank">
        GitHub/Carts
      </Anchor>
      <CloseButton>
        <span class="fa fa-close" onClick={closeProfile}></span>
      </CloseButton>
    </Window>
  );
};

export default Profile;
