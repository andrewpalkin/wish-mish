import _ from "lodash";
import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
  Button,
  Icon,
  Header,
  Modal
} from "semantic-ui-react";
import toClass from "recompose/toClass";
import LoginFormContainer from "../login/LoginFormContainer";

const ButtonAsClass = toClass(Button);

const fixedMenuStyle = {
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
  padding: "5px"
};

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "0em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease"
};

export default class StickyNavBar extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    showLoginModal: false
  };

  handleOverlayRef = c => {
    const { overlayRect } = this.state;

    if (!overlayRect) {
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), "height", "width")
      });
    }
  };

  stickOverlay = () => this.setState({ overlayFixed: true });

  stickTopMenu = () => this.setState({ menuFixed: true });

  unStickOverlay = () => this.setState({ overlayFixed: false });

  unStickTopMenu = () => this.setState({ menuFixed: false });

  close = () => this.setState({ showLoginModal: false });

  onSubmitLogin = () => {};

  show = e => {
    e.preventDefault();
    this.setState({ showLoginModal: true });
  };

  render() {
    const {
      menuFixed,
      showLoginModal,
      closeOnDimmerClick = false
    } = this.state;

    return (
      <Visibility
        onTopPassed={this.stickTopMenu}
        onTopVisible={this.unStickTopMenu}
        once={false}
      >
        <Modal
          open={showLoginModal}
          size="small"
          onClose={this.close}
          closeOnDimmerClick={closeOnDimmerClick}
          closeIcon
          style={{
            height: "425px"
          }}
        >
          <LoginFormContainer onSubmit={this.onSubmitLogin} />
        </Modal>
        <Menu
          pointing
          borderless
          fixed={menuFixed ? "top" : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
          inverted
        >
          <Menu.Item>
            <Icon loading name="certificate" />
          </Menu.Item>
          <Menu.Item>
            <Header inverted as={NavLink} to="/">
              WISH MISH
            </Header>
          </Menu.Item>
          <Menu.Item as={NavLink} name="home" exact to="/">
            Home
          </Menu.Item>
          <Menu.Item as={NavLink} to="/about">
            About
          </Menu.Item>

          <Menu.Menu position="right">
            <Menu.Item onClick={this.show}>Login</Menu.Item>
            <Menu.Item as={NavLink} to="/signup">
              Sign Up
            </Menu.Item>
            <ButtonAsClass
              compact
              style={{
                margin: "15px",
                backgroundColor: "#F89235",
                color: "white"
              }}
              as={NavLink}
              to="/submit-wish"
            >
              Add Wish
            </ButtonAsClass>

            <Dropdown text="Dropdown" className="link item">
              <Dropdown.Menu>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Header>Header Item</Dropdown.Header>
                <Dropdown.Item>
                  <i className="dropdown icon" />
                  <span className="text">Submenu</span>
                  <Dropdown.Menu>
                    <Dropdown.Item>List Item</Dropdown.Item>
                    <Dropdown.Item>List Item</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown.Item>
                <Dropdown.Item>List Item</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Menu>
        </Menu>
      </Visibility>
    );
  }
}
