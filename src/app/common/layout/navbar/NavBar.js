import React, { Component } from "react";
import {
  Icon,
  Image,
  Menu,
  Responsive,
  Sidebar,
  Segment,
  Header
} from "semantic-ui-react";

class NavBar extends Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    const { visible } = this.state;
    return (
      <div>
        <Sidebar.Pushable as={Segment} padded>
          <Sidebar
            as={Menu}
            animation="push"
            icon="labeled"
            inverted
            onHide={this.handleSidebarHide}
            vertical
            visible={visible}
            width="thin"
          >
            <Menu.Item as="a">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="gamepad" />
              Games
            </Menu.Item>
            <Menu.Item as="a">
              <Icon name="camera" />
              Channels
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Menu fixed="top" borderless>
              <Menu.Item>
                <Image
                  size="mini"
                  src="https://react.semantic-ui.com/logo.png"
                />
              </Menu.Item>
              <Menu.Item as={"a"}>
                <Responsive as={Icon} maxWidth={768}>
                  <Icon name="sidebar" onClick={this.handleShowClick} />
                </Responsive>
              </Menu.Item>
              <Menu.Item as={"a"} content={"Home"} key={"home"} />
              <Menu.Item as={"a"} content={"Users"} key={"users"} />
              <Menu.Menu position="right">
                <Menu.Item as={"a"} content={"Login"} key={"login"} />
                <Menu.Item as={"a"} content={"Register"} key={"register"} />
              </Menu.Menu>
            </Menu>
            <Segment padded basic />
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}
export default NavBar;
