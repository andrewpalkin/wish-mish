import _ from "lodash";
import React, { Component } from "react";
import { Visibility, Modal } from "semantic-ui-react";

import NavBarMenu from "../../components/navbar/NavBarMenu";
import NavBarLoginSignUpButtons from "../../components/navbar/NavBarLoginSignUpButtons";
import NavBarAddWishSignOutButtons from "../../components/navbar/NavBarAddWishSignOutButtons.js";

import LoginFormContainer from "../login/LoginFormContainer";

export default class StickyNavBar extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false,
    showLoginModal: false,
    activeItem: "app"
  };

  handleOverlayRef = c => {
    const { overlayRect } = this.state;

    if (!overlayRect) {
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), "height", "width")
      });
    }
  };

  close = () => {
    this.props.cleanLoginError();
    this.setState({ showLoginModal: false });
  };

  onSubmitLogin = () => {};

  show = e => {
    e.preventDefault();
    this.setState({ showLoginModal: true });
  };

  handleItemClick = (e, { name }) => {
    if (name === "logo") {
      this.setState({ activeItem: "app" });
    } else if (name === "login") {
      this.show(e);
    } else {
      this.setState({ activeItem: name });
    }
  };

  handleDropdownChange = (e, { name, value }) => {
    console.log("handleDropdownChange name: ", name + "  value:" + value);
    if (value === "signout") this.props.signout();
  };

  render() {
    const {
      showLoginModal,
      closeOnDimmerClick = false,
      activeItem,
      menuFixed
    } = this.state;
    const { auth } = this.props;
    console.log("activeItem : ", activeItem);

    return (
      <>
        {!auth.uid ? (
          <Modal
            open={showLoginModal}
            size="small"
            onClose={this.close}
            closeOnDimmerClick={closeOnDimmerClick}
            closeIcon
            onUnmount={this.close}
            style={{
              height: "425px"
            }}
          >
            <LoginFormContainer
              onSubmit={this.onSubmitLogin}
              activeItem={activeItem}
            />
          </Modal>
        ) : null}
        <NavBarMenu
          menuFixed={menuFixed}
          handleItemClick={this.handleItemClick}
          activeItem={activeItem}
        >
          {auth.uid ? (
            <NavBarAddWishSignOutButtons
              handleItemClick={this.handleItemClick}
              activeItem={activeItem}
              handleDropdownChange={this.handleDropdownChange}
              userName={this.props.userName}
              initials={this.props.initials}
            />
          ) : (
            <NavBarLoginSignUpButtons
              handleItemClick={this.handleItemClick}
              activeItem={activeItem}
            />
          )}
        </NavBarMenu>
      </>
    );
  }
}
