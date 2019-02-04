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

  handleItemClick = (e, { name }) => {
    if (name === "logo") {
      this.setState({ activeItem: "app" });
    } else if (name === "login") {
      this.show(e);
    } else {
      this.setState({ activeItem: name });
    }
  };

  render() {
    const {
      showLoginModal,
      closeOnDimmerClick = false,
      activeItem,
      menuFixed
    } = this.state;
    const { loginSuccess } = this.props;
    console.log("activeItem : ", activeItem);

    return (
      <Visibility
        onTopPassed={this.stickTopMenu}
        onTopVisible={this.unStickTopMenu}
        once={false}
      >
        <Modal
          open={showLoginModal && !loginSuccess}
          size="small"
          onClose={this.close}
          closeOnDimmerClick={closeOnDimmerClick}
          closeIcon
          style={{
            height: "425px"
          }}
        >
          <LoginFormContainer
            onSubmit={this.onSubmitLogin}
            activeItem={activeItem}
          />
        </Modal>
        <NavBarMenu
          menuFixed={menuFixed}
          handleItemClick={this.handleItemClick}
          activeItem={activeItem}
        >
          {loginSuccess ? (
            <NavBarAddWishSignOutButtons
              handleItemClick={this.handleItemClick}
              activeItem={activeItem}
            />
          ) : (
            <NavBarLoginSignUpButtons
              handleItemClick={this.handleItemClick}
              activeItem={activeItem}
            />
          )}
        </NavBarMenu>
      </Visibility>
    );
  }
}
