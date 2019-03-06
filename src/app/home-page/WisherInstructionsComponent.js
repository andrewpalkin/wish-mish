import React from "react";
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";

const WisherInstructionsComponent = props => {
    return (
        <Segment basic>
            <Segment>
                <Grid columns={3}>
                    <Grid.Column width={1}>
                        <Header as="h1" style={{
                            paddingTop: "15px",
                            paddingLeft: "15px"
                        }}>1</Header>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h2">Tell us about the item you are wish to get</Header>
                        </Grid.Row>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h4" disabled>
                                WIth Wish-Mish you can get any item from around the world. To get
                                started,
                                create an wish for a product you wish and include details such as how
                                much
                                it costs and from where traveler can get it.
                            </Header>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={6} style={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px"
                    }}>
                        <Image
                            src="https://image.shutterstock.com/z/stock-photo-picture-showing-pretty-woman-shopping-online-with-credit-card-571340965.jpg"
                            fluid/>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Segment>
                <Grid columns={2}>
                    <Grid.Column width={1}>
                        <Header as="h1" style={{
                            paddingTop: "15px",
                            paddingLeft: "15px"
                        }}>2</Header>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h2">Wait for travelers to make offers</Header>
                        </Grid.Row>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h4" disabled>
                                Once you publish your wish, we’ll share it with traveler community.
                                Then, travelers heading to your city will bid to deliver it by making an
                                offer.
                            </Header>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={6} style={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px"
                    }}>
                        <Image
                            src="https://image.shutterstock.com/z/stock-photo-make-an-offer-475900072.jpg"
                            fluid/>
                    </Grid.Column>

                </Grid>
            </Segment>
            <Segment>
                <Grid columns={2}>
                    <Grid.Column width={1}>
                        <Header as="h1" style={{
                            paddingTop: "15px",
                            paddingLeft: "15px"
                        }}>3</Header>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h2">Agree on a reward for your traveler</Header>
                        </Grid.Row>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h4" disabled>
                                You need to agree with your traveler about all applicable taxes and fees
                                (importing of item to your country),
                                including the monetary reward you agree to pay your traveler for
                                delivering
                                your item.
                            </Header>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={6} style={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px"
                    }}>
                        <Image
                            src="https://image.shutterstock.com/z/stock-photo-close-up-man-and-woman-shaking-hands-getting-acquaintance-agreement-greeting-at-meeting-in-1282770028.jpg"
                            fluid/>
                    </Grid.Column>

                </Grid>
            </Segment>
            <Segment>
                <Grid columns={2}>
                    <Grid.Column width={1}>
                        <Header as="h1" style={{
                            paddingTop: "15px",
                            paddingLeft: "15px"
                        }}>4</Header>
                    </Grid.Column>
                    <Grid.Column width={9}>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h2">Meet with your traveler and receive your item</Header>
                        </Grid.Row>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h4" disabled>
                                Coordinate a time and place to meet your traveler. When you receive
                                your item, make sure to give the rating to your traveler.
                            </Header>
                        </Grid.Row>
                    </Grid.Column>
                    <Grid.Column width={6} style={{
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        paddingRight: "0px",
                        paddingLeft: "0px"
                    }}>
                        <Image
                            src="https://image.shutterstock.com/z/stock-photo-asian-woman-receiving-a-package-at-home-from-a-delivery-guy-613872155.jpg"
                            fluid/>
                    </Grid.Column>
                </Grid>
            </Segment>
            <Grid>
                <Grid.Row centered>
                    <Button
                        style={{
                            backgroundColor: "#F89235",
                            color: "white"
                        }}
                    >
                        Add new Wish now
                    </Button>
                </Grid.Row>
            </Grid>
        </Segment>
    );
};

export default WisherInstructionsComponent;