import React from "react";
import { Link } from "react-router-dom";
import { Menu, Icon, Header } from "semantic-ui-react";
import styles from "../../style/style.css.js";

const NavBarMenuComponent = props => {
  return (
    <div>
      <Menu borderless fixed="top" style={styles.fixedMenuStyle} inverted>
        <Menu.Item>
          <Icon loading name="wifi" />
        </Menu.Item>
        <Menu.Item onClick={props.handleItemClick} name="logo">
          <Header inverted>WISH MISH</Header>
        </Menu.Item>
        <Menu.Item
          as={Link}
          onClick={props.handleItemClick}
          name="app"
          exact
          to="/app"
          active={props.activeItem === "app"}
        >
          Home
        </Menu.Item>

        <Menu.Item
          as={Link}
          onClick={props.handleItemClick}
          active={props.activeItem === "about"}
          name="about"
          to="/about"
        >
          About
        </Menu.Item>

        <Menu.Menu position="right">
          <Menu.Item />
          {props.children}
        </Menu.Menu>
      </Menu>
    </div>
  );
};

export default NavBarMenuComponent;
