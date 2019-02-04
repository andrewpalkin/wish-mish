import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

const NavBarLoginSignUpButtons = props => {
  return (
    <>
      <Menu.Item
        as={Link}
        name="login"
        active={props.activeItem === "login"}
        onClick={props.handleItemClick}
        exact
        to="/login"
      >
        Login
      </Menu.Item>
      <Menu.Item
        as={Link}
        name="signup"
        active={props.activeItem === "signup"}
        onClick={props.handleItemClick}
        exact
        to="/signup"
      >
        Sign Up
      </Menu.Item>
    </>
  );
};

export default NavBarLoginSignUpButtons;
