import React, { Component } from "react";

class WishDetailsMainComponent extends Component {
  state = {};
  render() {
    const wishId = this.props.match.params.id;
    const wishDetails = this.props.wishDetails;
    console.log("Wish details is: ", wishDetails);
    return (
      <div>
        <div>Wisher name: {wishDetails.firstName}</div>
        <div>Item price: {wishDetails.itemPrice}</div>
        <div>Product Name: {wishDetails.productName}</div>
        <div>Reward: {wishDetails.reward}</div>
      </div>
    );
  }
}

export default WishDetailsMainComponent;
