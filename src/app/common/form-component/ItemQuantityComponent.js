import React, { Component } from "react";

import {
  Form,
  Message,
  Label,
  Transition,
  Segment,
  Grid,
  Button,
  Header,
  Divider,
  Icon
} from "semantic-ui-react";

export default class MyCustomInput extends React.Component {
  render() {
    const {
      input: { value, onChange }
    } = this.props;
    console.log("value: " + value);
    return (
      <Grid>
        <Grid.Column width={8}>
          <label
            style={{
              display: "inline-block",
              margin: "0 0 .28571429rem 0",
              color: "rgba(0,0,0,.87)",
              fontSize: ".92857143em",
              fontWeight: "700",
              textTransform: "none"
            }}
          >
            Quantity
          </label>
        </Grid.Column>
        <Grid.Column width={8} align="right">
          <Icon
            disabled={value < 2 ? true : false}
            circular
            color="blue"
            name="minus"
            style={{ marginRight: "6px" }}
            onClick={value > 1 ? () => onChange(+value - 1) : null}
          />
          <label>{value}</label>
          <Icon
            link
            circular
            color="blue"
            name="plus"
            style={{ marginLeft: "6px" }}
            onClick={() => onChange(+value + 1)}
          />
        </Grid.Column>
      </Grid>
    );
  }
}
