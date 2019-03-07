import React from "react";
import {Button, Divider, Header, Image, Label} from "semantic-ui-react";

import offerPerUserExist from "../common/utils/offerPerUserExist";

const WishDetailsCardComponent = props => {
    const wishDetails = props.wishDetails;
    const uidOfLoggedInUser = props.uidOfLoggedInUser;
    const offers = props.offers;
    return (
        <div class="ui card fluid">
            <div class="content">
                <div class="center aligned  author">
                    {wishDetails.imageURL ? (
                        <Image
                            circular
                            size="big"
                            src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                        />
                    ) : (
                        <Label
                            size="big"
                            circular
                            style={{
                                marginRight: "4px",
                                backgroundColor: "#F89235",
                                color: "white"
                            }}
                        >
                            {wishDetails.initials}
                        </Label>
                    )}
                </div>
                <br/>

                <div class="center aligned header">{wishDetails.firstName}</div>
                <Divider hidden/>
                <div class="meta">
                    <span class="right floated time">{`${props.diffDate} ago`}</span>
                    <span class="category">Requested</span>
                </div>
                <Divider/>
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

                {uidOfLoggedInUser &&
                wishDetails.userId !== uidOfLoggedInUser &&
                !offerPerUserExist(offers, uidOfLoggedInUser) ? (
                    <>
                        <Divider hidden/>
                        <Button primary fluid onClick={props.openMakeYouOfferModalStatus}>
                            Make your offer
                        </Button>
                    </>
                ) : null}

                <Divider/>
                <div>
          <span class="right floated time">
            <strong>{wishDetails.deliveryTo}</strong>
          </span>
                    <span class="category meta">
            <i class="share icon"/>
            Delivery to
          </span>
                </div>
                <div>
          <span class="right floated time">
            <strong>{wishDetails.deliveryFrom}</strong>
          </span>
                    <span class="category meta">
            <i class="reply icon"/>
            From
          </span>
                </div>
                <div>
             <span className="right floated time">
                 <Header link href={wishDetails.productURL} size="tiny" color="blue">
                Link URL
            </Header>
             </span>

                    <span class="category meta">
            <i class="map pin  icon"/>
            Where to buy
          </span>
                </div>
                <div>
          <span class="right floated time">
            <strong>{wishDetails.quantity}</strong>
          </span>
                    <span class="category meta">
            <i class="database icon"/>
            Quantity
          </span>
                </div>
            </div>
            <div class="extra content">
                <i class="comments outline icon"/>
                {offers && offers.length === 1 ? (
                    <>{offers && offers.length} Offer</>
                ) : (
                    <>
                        {offers && offers.length > 0 ? (
                            <>{offers && offers.length} Offers</>
                        ) : (
                            "No Offers"
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default WishDetailsCardComponent;
