import _ from "lodash";
import React, {Component} from "react";
import {Modal} from "semantic-ui-react";
import {withRouter} from 'react-router-dom'

import NavBarMenuComponent from "../../components/navbar/NavBarMenu";
import NavBarLoginSignUpButtons from "../../components/navbar/NavBarLoginSignUpButtons";
import NavBarAddWishSignOutButtons from "../../components/navbar/NavBarAddWishSignOutButtons.js";

import LoginFormContainer from "../login/LoginFormContainer";
import styles from "../../style/style.css.js";

class StickyNavBar extends Component {
    state = {
        menuFixed: false,
        overlayFixed: false,
        showLoginModal: false,
        activeItem: "app",
        menuStyle: styles.fixedMenuStyleWithoutShadow
    };

    setShadowMenu = () => {
        this.setState({menuStyle: styles.fixedMenuStyleWithShadow});
    };

    unSetShadowMenu = () => {
        this.setState({menuStyle: styles.fixedMenuStyleWithoutShadow});
    };

    close = () => {
        this.props.cleanLoginError();
        this.setState({showLoginModal: false});
    };

    onSubmitLogin = () => {
    };

    show = e => {
        e.preventDefault();
        this.setState({showLoginModal: true});
    };

    handleItemClick = (e, {name}) => {
        if (name === "logo") {
            this.setState({activeItem: "app"});
        } else if (name === "login") {
            this.show(e);
        } else {
            this.setState({activeItem: name});
        }
    };

    handleDropdownChange = (history) => (e, {name, value}) => {
        switch (value) {
            case "account" : {
                history.push(`/account/${this.props.auth.uid}`);
                break;
            }

            case "settings" : {
                break;
            }

            case "signout" : {
                this.props.signout();
                break;
            }

            default: {
                console.log("Please check the value of menu, as it was not found and default state triggered");
            }
        }
    };

    render() {
        const {
            showLoginModal,
            closeOnDimmerClick = false,
            activeItem,
            menuFixed,
            menuStyle
        } = this.state;
        const {auth, history} = this.props;

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
                <NavBarMenuComponent
                    menuFixed={menuFixed}
                    handleItemClick={this.handleItemClick}
                    activeItem={activeItem}
                    menuStyle={menuStyle}
                    setShadowMenu={this.setShadowMenu}
                    unSetShadowMenu={this.unSetShadowMenu}
                >
                    {auth.uid ? (
                        <NavBarAddWishSignOutButtons
                            handleItemClick={this.handleItemClick}
                            activeItem={activeItem}
                            handleDropdownChange={this.handleDropdownChange(history)}
                            userName={this.props.userName}
                            initials={this.props.initials}
                        />
                    ) : (
                        <NavBarLoginSignUpButtons
                            handleItemClick={this.handleItemClick}
                            activeItem={activeItem}
                        />
                    )}
                </NavBarMenuComponent>
            </>
        );
    }
}

export default withRouter(StickyNavBar);