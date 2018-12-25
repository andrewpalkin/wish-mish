import _ from "lodash";
import React, { Component } from "react";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
  Button,
  Icon,
  Header
} from "semantic-ui-react";

const fixedMenuStyle = {
  backgroundColor: "#fff",
  border: "1px solid #ddd",
  boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)",
  padding: "5px"
};

const menuStyle = {
  border: "none",
  borderRadius: 0,
  boxShadow: "none",
  marginBottom: "1em",
  marginTop: "4em",
  transition: "box-shadow 0.5s ease, padding 0.5s ease"
};

export default class StickyNavBar extends Component {
  state = {
    menuFixed: false,
    overlayFixed: false
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

  render() {
    const { menuFixed } = this.state;

    return (
      <Visibility
        onBottomPassed={this.stickTopMenu}
        onBottomVisible={this.unStickTopMenu}
        once={false}
      >
        <Menu
          borderless
          fixed={menuFixed ? "top" : undefined}
          style={menuFixed ? fixedMenuStyle : menuStyle}
          inverted={menuFixed ? false : true}
        >
          <Container>
            <Menu.Item>
              <Icon loading name="certificate" />
            </Menu.Item>
            <Menu.Item>
              <Header color="pink">WISH MISH</Header>
            </Menu.Item>
            <Menu.Item as="a">Blog</Menu.Item>
            <Menu.Item as="a">Articles</Menu.Item>

            <Menu.Menu position="right">
              <Button
                basic={menuFixed ? true : false}
                compact
                color={menuFixed ? "pink" : "pink"}
                style={{ margin: "15px" }}
              >
                Add Wish
              </Button>
              <Dropdown text="Dropdown" pointing className="link item">
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
          </Container>
        </Menu>
      </Visibility>
    );
  }
}
