import React from "react";
import { Rating } from "semantic-ui-react";

const DeliveryOfferComponent = props => {
  return (
    <div class="ui card fluid">
      <div class="content">
        <div class="right floated meta">{`${props.diffDate} ago`}</div>
        <img
          class="ui avatar large image"
          src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
        />{" "}
        Elliot
        <div>
          <Rating maxRating={5} disabled defaultRating={3} />
        </div>
      </div>
      <div class="content">
        <div>
          <span class="right floated time">
            <strong>{props.deliveryDate}</strong>
          </span>
          <span class="category meta">
            <i class="calendar outline icon" />
            Delivery date
          </span>
        </div>
        <div>
          <span class="right floated time">
            <strong>{props.deliveryFrom}</strong>
          </span>
          <span class="category meta">
            <i class="reply icon" />
            Delivery from
          </span>
        </div>
        <div>
          <span class="right floated time">
            <strong>{props.quantity}</strong>
          </span>
          <span class="category meta">
            <i class="reply icon" />
            Quantity
          </span>
        </div>
        <div>
          <span class="right floated time">
            <i class="dollar icon" />
            <strong>{props.travelerReward}</strong>
          </span>
          <span class="category meta">
            <i class="reply icon" />
            Item price
          </span>
        </div>
      </div>
      <div class=" content">
        <div class="ui large left icon">
          <span class="category ">Traveler reward</span>
          <span class="right floated time">
            <i class="dollar icon" />
            <strong>{props.travelerReward}</strong>
          </span>
        </div>
      </div>
      {props.userId === props.userIdByWish && props.wishStatus === "open" ? (
        <div class="ui bottom attached button orange">
          <i class="handshake outline icon" />
          Agree to Offer
        </div>
      ) : null}
    </div>
  );
};

export default DeliveryOfferComponent;
