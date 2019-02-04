import React from "react";
import { Link } from "react-router-dom";
import { Dropdown, Image, Menu, Button, Label } from "semantic-ui-react";
import toClass from "recompose/toClass";

const ButtonAsClass = toClass(Button);

const trigger = userDetails => (
  <span>
    {false ? (
      <Image
        avatar
        src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
      />
    ) : (
      <Label size="large" color="pink" circular style={{ marginRight: "4px" }}>
        {userDetails.initials}
      </Label>
    )}
    {userDetails.userName}
  </span>
);

const options = [
  { key: "user", text: "Account", icon: "user", value: "user" },
  { key: "settings", text: "Settings", icon: "settings", value: "settings" },
  { key: "sign-out", text: "Sign Out", icon: "sign out", value: "signout" }
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
          trigger={trigger({
            userName: props.userName,
            initials: props.initials
          })}
          options={options}
          pointing="top right"
          icon={null}
          onChange={props.handleDropdownChange}
        />
      </Menu.Item>
    </>
  );
};

export default NavBarLoginSignUpButtons;
