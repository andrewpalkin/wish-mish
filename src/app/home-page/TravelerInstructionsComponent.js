import React from "react";
import {Button, Grid, Header, Image, Segment} from "semantic-ui-react";

const TravelerInstructionsComponent = props => {
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
                            <Header as="h2">Find an wish you can deliver and make an offer</Header>
                        </Grid.Row>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h4" disabled>
                                Search for orders based on where are traveling to next. Make an offer and set your
                                traveler reward—the amount of money your shopper will pay you for delivering their item.
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
                            src="https://image.shutterstock.com/z/stock-photo-three-amazed-friends-watching-media-content-on-line-in-a-computer-sitting-on-a-couch-in-the-living-598145828.jpg"
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
                            <Header as="h2">Confirm details with your wisher</Header>
                        </Grid.Row>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h4" disabled>
                                When your offer was selected by wisher, use email or phone to confirm details with your
                                wisher
                                like the size and color of the item. You can also ask if they have other orders they’d
                                like delivered.
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
                            src="https://image.shutterstock.com/z/stock-photo-young-attractive-freelancer-talking-on-phone-while-confirming-order-for-book-review-via-modern-576869968.jpg"
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
                            <Header as="h2">Get the item to hotel or place that you stay</Header>
                        </Grid.Row>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h4" disabled>
                                This way, you save the time and you can check what item are bringing to you, if
                                this is the same item that was described in WISH request or different one.
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
                            src="https://image.shutterstock.com/z/stock-photo-delivery-man-in-red-uniform-carrying-mail-packages-using-the-intercom-at-door-1180539382.jpg"
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
                            <Header as="h2">Deliver your wisher’s item and get paid</Header>
                        </Grid.Row>
                        <Grid.Row style={{
                            paddingTop: "5px",
                            paddingBottom: "5px",
                            paddingRight: "5px",
                            paddingLeft: "5px"
                        }}>
                            <Header as="h4" disabled>
                                Coordinate a time and place to meet your wisher. When you deliver
                                wisher item, make sure to give the rating to your wisher.
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
                            src="https://image.shutterstock.com/z/stock-photo-delivery-man-in-blue-uniform-handing-parcel-box-to-recipient-courier-service-concept-530531899.jpg"
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

export default TravelerInstructionsComponent;