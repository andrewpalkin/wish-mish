import React, {Component} from "react";
import {Button, Dimmer, Divider, Form, Grid, Header, Icon, Image, Loader, Modal, Sticky} from "semantic-ui-react";
import {Field, reduxForm} from "redux-form";

import renderDatePicker from "../common/components/form/RenderDatePicker";
import WishDetailsCardComponent from "./WishDetailsCardComponent";
import DeliveryOfferComponent from "./DeliveryOfferComponent";
import dateDiff from "../common/utils/dates/dateDiff";

import ItemQuantityComponent from "../common/form-component/ItemQuantityComponent";

class WishDetailsMainComponent extends Component {
    state = {active: true, makeYouOfferModalStatus: false};
    handleContextRef = contextRef => this.setState({contextRef});

    required = value => (value ? undefined : "Required");
    openMakeYouOfferModalStatus = () => {
        this.setState({makeYouOfferModalStatus: true});
    };

    closeMakeYouOfferModal = () => {
        this.props.clearSubmitWishOfferDataOperation();
        this.setState({makeYouOfferModalStatus: false});
    };

    render() {
        const wishId = this.props.match.params.id;
        const wishDetails = this.props.wishDetails;
        const offers = this.props.offers;
        const {contextRef} = this.state;
        const {handleSubmit} = this.props;
        const uidOfLoggedInUser = this.props.uidOfLoggedInUser;
        const currentDate = new Date();
        const handleAcceptOffer = this.props.handleAcceptOffer;

        return (
            <div ref={this.handleContextRef}>
                {wishDetails ? (
                    <>
                        <Divider hidden/>
                        <Grid stackable>
                            <Grid.Row>
                                <Grid.Column width={8} floated="right">
                                    <div className="ui card fluid" style={{height: "100%"}}>
                                        <div className="image" fluid>
                                            <Image src="https://react.semantic-ui.com/images/wireframe/image.png"/>
                                        </div>
                                        <div className="content centered">
                                            <a centered className="header">
                                                {wishDetails.productName}
                                            </a>
                                        </div>
                                    </div>
                                </Grid.Column>

                                <Grid.Column width={4}>
                                    <Sticky active={false} context={contextRef} offset={50}>
                                        <WishDetailsCardComponent
                                            wishDetails={wishDetails}
                                            uidOfLoggedInUser={uidOfLoggedInUser}
                                            offers={offers}
                                            diffDate={dateDiff(
                                                wishDetails.publishedDate,
                                                currentDate
                                            )}
                                            openMakeYouOfferModalStatus={
                                                this.openMakeYouOfferModalStatus
                                            }
                                        />
                                    </Sticky>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Grid centered textAlign="center">
                            <Grid.Row>
                                <div>
                                    <br/>
                                    <br/>
                                    <span class="right floated time">
                    <strong>DELIVERY OFFERS</strong>
                  </span>
                                </div>
                            </Grid.Row>
                        </Grid>
                        <Grid stackable centered>
                            <Grid.Column width={8}>
                                <>
                                    {offers ? (
                                        offers.map(offer => {
                                            return (
                                                <>
                                                    <DeliveryOfferComponent
                                                        {...offer}
                                                        key={offer.id}
                                                        userIdByWish={wishDetails.userId}
                                                        wishStatus={wishDetails.status}
                                                        diffDate={dateDiff(offer.createdDate, currentDate)}
                                                        handleAcceptOffer={() => handleAcceptOffer(wishId, offer.id)}
                                                    />
                                                    <Divider hidden/>
                                                </>
                                            );
                                        })
                                    ) : (
                                        <Dimmer inverted active>
                                            <Loader>Loading</Loader>
                                        </Dimmer>
                                    )}
                                </>
                            </Grid.Column>
                        </Grid>
                        <Modal
                            open={
                                this.state.makeYouOfferModalStatus &&
                                this.props.makeYourOfferStatus !== "succed"
                            }
                            size="mini"
                            ononClose={this.closeMakeYouOfferModal}
                            onUnmount={this.closeMakeYouOfferModal}
                        >
                            {this.props.makeYourOfferShowSpinner ? (
                                <Dimmer inverted active>
                                    <Loader>Loading</Loader>
                                </Dimmer>
                            ) : null}
                            <Header icon="browser" content="Offer details"/>
                            <Modal.Content>
                                <Form onSubmit={handleSubmit}>
                                    <Field
                                        component={Form.Input}
                                        label="Delivery from"
                                        name="deliveryFrom"
                                        placeholder="Delivery from"
                                    />
                                    <Field
                                        component={Form.Input}
                                        label="Traveler reward"
                                        name="travelerReward"
                                        placeholder="Traveler reward"
                                    />
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
                                        Delivery date
                                    </label>
                                    <Field
                                        component={renderDatePicker}
                                        label="Delivery date"
                                        name="deliveryDate"
                                        placeholder="Product URL from online shops like Amazon, eBay etc..."
                                    />
                                    <Field component={ItemQuantityComponent} name="quantity"/>
                                </Form>
                            </Modal.Content>
                            <Modal.Actions>
                                <Button
                                    inverted
                                    color="red"
                                    onClick={this.closeMakeYouOfferModal}
                                >
                                    <Icon name="remove"/> Cancel
                                </Button>
                                <Button
                                    color="green"
                                    loaded={this.props.makeYourOfferShowSpinner}
                                    onClick={() => this.props.submitWishOffer(this.props.wishId)}
                                    inverted
                                >
                                    <Icon name="checkmark"/> Submit
                                </Button>
                            </Modal.Actions>
                            )}
                        </Modal>
                    </>
                ) : (
                    <Dimmer inverted active>
                        <Loader>Loading</Loader>
                    </Dimmer>
                )}
            </div>
        );
    }
}

export default reduxForm({
    form: "makeYourOfferForm",
    destroyOnUnmount: false,
    initialValues: {quantity: 1}
})(WishDetailsMainComponent);
