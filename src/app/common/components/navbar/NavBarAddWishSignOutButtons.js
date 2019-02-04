import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu, Button } from "semantic-ui-react";
import toClass from "recompose/toClass";

const ButtonAsClass = toClass(Button);

const trigger = (
  <span>
    <Image
      avatar
      src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
    />
    Steve
  </span>
);

const options = [
  { key: "user", text: "Account", icon: "user" },
  { key: "settings", text: "Settings", icon: "settings" },
  { key: "sign-out", text: "Sign Out", icon: "sign out" }
];

const NavBarLoginSignUpButtons = props => {
  return (
    <>
      <Menu.Item
        name="addWish"
        onClick={props.handleItemClick}
        active={props.activeItem === "addWish"}
        as={Link}
        to="/submit-wish"
      >
        <ButtonAsClass
          compact
          style={{
            backgroundColor: "#F89235",
            color: "white",
            margin: "0px"
          }}
        >
          Add Wish
        </ButtonAsClass>
      </Menu.Item>
      <Menu.Item>
        <Dropdown
          trigger={trigger}
          options={options}
          pointing="top right"
          icon={null}
        />
      </Menu.Item>
    </>
  );
};

export default NavBarLoginSignUpButtons;
