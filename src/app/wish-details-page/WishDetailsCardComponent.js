import React from "react";
import {
  Container,
  Dropdown,
  Image,
  Menu,
  Visibility,
  Button,
  Icon,
  Header,
  Segment,
  Step,
  Grid,
  Dimmer,
  Loader,
  Divider,
  Rating,
  Rail,
  Sticky,
  Modal,
  Form
} from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";

const WishDetailsCardComponent = props => {
  const wishDetails = props.wishDetails;
  return (
    <div class="ui card fluid">
      <div class="content">
        <div class="center aligned  author">
          <img
            class="ui avatar image big"
            src="https://react.semantic-ui.com/images/avatar/small/matt.jpg"
          />
        </div>
        <br />

        <div class="center aligned header">{wishDetails.firstName}</div>
        <Divider hidden />
        <div class="meta">
          <span class="right floated time">2 days ago</span>
          <span class="category">Requested</span>
        </div>
        <Divider />
        <div>
          <span class="right floated time">
            <strong>{wishDetails.itemPrice}$</strong>
          </span>
          <span class="category meta">Price for 1 item</span>
        </div>
        <div>
          <span class="right floated time">
            <strong>{wishDetails.reward}$</strong>
          </span>
          <span class="category meta">Reward for one item</span>
        </div>

        <Divider hidden />
        <Button primary fluid onClick={props.openMakeYouOfferModalStatus}>
          Make your offer
        </Button>
        <Divider />
        <div>
          <span class="right floated time">
            <strong>{wishDetails.deliveryTo}</strong>
          </span>
          <span class="category meta">
            <i class="share icon" />
            Delivery to
          </span>
        </div>
        <div>
          <span class="right floated time">
            <strong>{wishDetails.deliveryFrom}</strong>
          </span>
          <span class="category meta">
            <i class="reply icon" />
            From
          </span>
        </div>
        <div>
          <span class="right floated time">
            <strong>{wishDetails.productURL}</strong>
          </span>
          <span class="category meta">
            <i class="map pin  icon" />
            Where to buy
          </span>
        </div>
        <div>
          <span class="right floated time">
            <strong>{wishDetails.quantity}</strong>
          </span>
          <span class="category meta">
            <i class="database icon" />
            Quantity
          </span>
        </div>
      </div>
      <div class="extra content">
        <a>
          <i class="comments outline icon" />2 Offers
        </a>
      </div>
    </div>
  );
};

export default WishDetailsCardComponent;
