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
      <Header>Contact details:</Header>
      <Title>Marianna Żurek</Title>
      <Title>zurekmarianna@gmail.com</Title>
      <Title>+48 798 033 947</Title>
      <Anchor href="https://github.com/maniazurek" target="_blank">
        GitHub
      </Anchor>
      <CloseButton>
        <span class="fa fa-close" onClick={closeProfile}></span>
      </CloseButton>
    </Window>
  );
};

export default Profile;
