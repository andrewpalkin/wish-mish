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
  Header,
  Segment
} from "semantic-ui-react";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <Segment>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
        <Segment>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
        <Segment>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
        <Segment>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
        <Segment>
          <Image src="https://react.semantic-ui.com/images/wireframe/paragraph.png" />
        </Segment>
      </>
    );
  }
}
