import React, {Component} from "react";
import {Divider, Grid, Header, Icon} from 'semantic-ui-react'
import dateDiff from "../common/utils/dates/dateDiff";
import {Link} from "react-router-dom";
import AccountWishComponent from "./AccountWishComponent";
import AccountPlacedOfferComponent from "./AccountPlacedOfferComponent";

class AccountMainComponent extends Component {

    render() {
        const currentDate = new Date();
        const cancelWishAccountMainComponent = this.props.cancelWishAccountMainComponent;

        return (

            <React.Fragment>

                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='box'/>
                        Open Wishes
                    </Header>
                </Divider>

                <Grid
                    columns={3}
                    stackable
                    style={{
                        paddingTop: "20px",
                        paddingBottom: "10px"
                    }}
                >
                    {this.props.accountRelatedWishes &&
                    this.props.accountRelatedWishes.map(wish => {
                        const diffDate = dateDiff(wish.publishedDate, currentDate);
                        return (
                            (wish.status === "open") ?
                                <Grid.Column
                                    key={wish.id}
                                    style={{
                                        paddingTop: "5px",
                                        paddingBottom: "5px",
                                        paddingRight: "5px",
                                        paddingLeft: "5px"
                                    }}
                                >

                                        <AccountWishComponent
                                            {...wish}
                                            key={wish.id}
                                            diffDate={diffDate}
                                            cancelWishAccountMainComponent={() => cancelWishAccountMainComponent(wish.id)}
                                        />

                                </Grid.Column> : null
                        );
                    })}
                </Grid>

                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='box'/>
                        Complete Wishes History
                    </Header>
                </Divider>

                <Grid
                    columns={3}
                    stackable
                    style={{
                        paddingTop: "20px",
                        paddingBottom: "10px"
                    }}
                >
                    {this.props.accountRelatedWishes &&
                    this.props.accountRelatedWishes.map(wish => {
                        const diffDate = dateDiff(wish.publishedDate, currentDate);
                        return (
                            (wish.status === "complete") ?
                                <Grid.Column
                                    key={wish.id}
                                    style={{
                                        paddingTop: "5px",
                                        paddingBottom: "5px",
                                        paddingRight: "5px",
                                        paddingLeft: "5px"
                                    }}
                                >
                                    <Link to={"/wish/" + wish.id}>
                                        <AccountWishComponent
                                            {...wish}
                                            key={wish.id}
                                            diffDate={diffDate}
                                        />
                                    </Link>
                                </Grid.Column> : null
                        );
                    })}
                </Grid>

                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='plane'/>
                        Placed offers
                    </Header>
                </Divider>

                <Grid
                    columns={3}
                    stackable
                    style={{
                        paddingTop: "20px",
                        paddingBottom: "10px"
                    }}
                >
                    {this.props.accountRelatedOffers &&
                    this.props.accountRelatedOffers.map(offer => {
                        return (
                            <Grid.Column
                                key={offer.id}
                                style={{
                                    paddingTop: "5px",
                                    paddingBottom: "5px",
                                    paddingRight: "5px",
                                    paddingLeft: "5px"
                                }}
                            >
                                <Link to={"/wish/" + offer.wishId}>
                                    <AccountPlacedOfferComponent
                                        {...offer}
                                        key={offer.id}
                                        diffDate={dateDiff(offer.createdDate, currentDate)}
                                    />
                                </Link>
                            </Grid.Column>
                        );
                    })}
                </Grid>

            </React.Fragment>
        );
    };
}

export default AccountMainComponent;