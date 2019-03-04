import React, {Component} from "react";
import {Card, Grid, Header, Icon} from "semantic-ui-react";


class AccountPlacedOfferComponent extends Component {

    render() {
        const {diffDate} = this.props;
        return (
            <Card fluid link>
                <Card.Content>
                    <Grid columns={4}>
                        <Grid.Column width={6}>
                            <label
                                style={{
                                    fontSize: "1em",
                                    color: "rgba(0, 0, 0, 0.4)"
                                }}
                            >Traveler Reward</label>
                        </Grid.Column>
                        <Grid.Column width={1} textAlign="right" style={{
                            paddingRight: "0px",
                            paddingLeft: "0px"
                        }}>
                            <Icon disabled name="dollar"/>
                        </Grid.Column>
                        <Grid.Column width={2} style={{
                            paddingLeft: "0px"
                        }}>
                            <Header as="h3">{this.props.travelerReward}</Header>
                        </Grid.Column>
                        <Grid.Column textAlign="right" width={7}>
                            <label
                                style={{
                                    fontSize: "1em",
                                    color: "rgba(0, 0, 0, 0.4)"
                                }}
                            >
                                {diffDate ? `${diffDate} ago` : null}
                            </label>
                        </Grid.Column>
                    </Grid>
                </Card.Content>
                <Card.Content extra>
                    <Grid columns="equal">
                        <Grid.Row style={{
                            paddingTop: "10px",
                            paddingBottom: "0px"
                        }}>
                            <Grid.Column verticalAlign="middle"
                                         style={{
                                             paddingTop: "5px",
                                             paddingBottom: "0px"
                                         }}
                            >
                                <Icon disabled name="calendar alternate outline"/>
                                <label
                                    style={{
                                        fontSize: "1em",
                                        color: "rgba(0, 0, 0, 0.4)"
                                    }}
                                >
                                    Delivery Date
                                </label>

                            </Grid.Column>
                            <Grid.Column verticalAlign="middle" textAlign="right"
                                         style={{
                                             paddingTop: "5px",
                                             paddingBottom: "0px"
                                         }}
                            >
                                <Header
                                    as="h4"
                                    style={{
                                        marginLeft: "0px",
                                        marginTop: "0px",
                                        marginBottom: "0px"
                                    }}
                                >
                                    {this.props.deliveryDate}
                                </Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style={{
                            paddingTop: "0px",
                            paddingBottom: "0px"
                        }}>
                            <Grid.Column verticalAlign="middle"
                                         style={{
                                             paddingTop: "5px",
                                             paddingBottom: "0px"
                                         }}
                            >
                                <Icon disabled name="plane"/>
                                <label
                                    style={{
                                        fontSize: "1em",
                                        color: "rgba(0, 0, 0, 0.4)"
                                    }}
                                >
                                    Delivery From
                                </label>

                            </Grid.Column>
                            <Grid.Column verticalAlign="middle" textAlign="right"
                                         style={{
                                             paddingTop: "5px",
                                             paddingBottom: "0px"
                                         }}
                            >
                                <Header
                                    as="h4"
                                    style={{
                                        marginLeft: "0px",
                                        marginTop: "0px",
                                        marginBottom: "0px"
                                    }}
                                >
                                    {this.props.deliveryFrom}
                                </Header>
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row style={{
                            paddingTop: "0px",
                            paddingBottom: "10px"
                        }}>
                            <Grid.Column verticalAlign="middle"
                                         style={{
                                             paddingTop: "5px",
                                             paddingBottom: "0px"
                                         }}
                            >
                                <Icon disabled name="boxes"/>
                                <label
                                    style={{
                                        fontSize: "1em",
                                        color: "rgba(0, 0, 0, 0.4)"
                                    }}
                                >
                                    Quantity
                                </label>

                            </Grid.Column>
                            <Grid.Column verticalAlign="middle" textAlign="right"
                                         style={{
                                             paddingTop: "5px",
                                             paddingBottom: "0px"
                                         }}
                            >
                                <Header
                                    as="h4"
                                    style={{
                                        marginLeft: "0px",
                                        marginTop: "0px",
                                        marginBottom: "0px"
                                    }}
                                >
                                    {this.props.quantity}
                                </Header>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Card.Content>
            </Card>
        );
    };
}

export default AccountPlacedOfferComponent;
