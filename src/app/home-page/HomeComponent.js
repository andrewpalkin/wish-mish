import React, {Component} from "react";
import WishLightComponent from "./WishLightComponent";
import CompleteWishComponent from "./CompleteWishComponent";
import {Link} from "react-router-dom";
import {Button, Grid, Header, Menu, Segment, Image} from "semantic-ui-react";
import dateDiff from "../common/utils/dates/dateDiff";

export default class HomePage extends Component {

    state = {activeItem: 'wisher'};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const currentDate = new Date();
        const {activeItem} = this.state;

        return (
            <>
                <Segment basic>
                    <Image src='http://media.virbcdn.com/files/b1/6d1d02deff9a0674-worldmap_noborder_nopoles.png' fluid/>
                </Segment>
                <Segment basic>
                    <Header as="h1" textAlign="center">
                        Recently Completed Wishes
                    </Header>
                    <Header as="h3" textAlign="center" disabled>
                        These wishes were recently delivered to the happy people.
                    </Header>
                    <Grid
                        columns={3}
                        stackable
                        style={{
                            paddingTop: "20px",
                            paddingBottom: "10px"
                        }}
                    >
                        {this.props.wishesComplete &&
                        this.props.wishesComplete.map(wish => {
                            return (
                                <Grid.Column
                                    key={wish.id}
                                    style={{
                                        paddingTop: "5px",
                                        paddingBottom: "5px",
                                        paddingRight: "5px",
                                        paddingLeft: "5px"
                                    }}
                                >
                                    <CompleteWishComponent {...wish} key={wish.id}/>
                                </Grid.Column>
                            );
                        })}
                        <Grid.Row centered>
                            <Button
                                style={{
                                    backgroundColor: "#F89235",
                                    color: "white"
                                }}
                            >
                                See how simple to use Wish-Mish site
                            </Button>
                        </Grid.Row>
                    </Grid>
                </Segment>

                <Segment basic>
                    <Header as="h1" textAlign="center">
                        Latest Wishes
                    </Header>
                    <Header as="h3" textAlign="center" disabled>
                        These wishes were recently requested to be delivered.
                    </Header>

                    <Grid
                        columns={2}
                        stackable
                        style={{
                            paddingTop: "20px",
                            paddingBottom: "10px"
                        }}
                    >
                        {this.props.wishesOpen &&
                        this.props.wishesOpen.map(wish => {
                            const diffDate = dateDiff(wish.publishedDate, currentDate);
                            return (
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
                                        <WishLightComponent
                                            {...wish}
                                            key={wish.id}
                                            diffDate={diffDate}
                                        />
                                    </Link>
                                </Grid.Column>
                            );
                        })}
                        <Grid.Row centered>
                            <Button
                                style={{
                                    backgroundColor: "#F89235",
                                    color: "white"
                                }}
                            >
                                See full list of wishes
                            </Button>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment basic>
                    <Header as="h1" textAlign="center">
                        How Wish-Mish works
                    </Header>
                    <Header as="h3" textAlign="center" disabled>
                        Wish-Mish is the go-to way to get the products that aren’t available in your country.<p/>
                        You can request just anything on Wish-Mish, from baby clothes and kids toys to tech gadgets.
                    </Header>
                    <Menu pointing widths={8} secondary>
                        <Menu.Item name='wisher' active={activeItem === 'wisher'} onClick={this.handleItemClick}>
                            For Wishers
                        </Menu.Item>
                        <Menu.Item name='traveler' active={activeItem === 'traveler'} onClick={this.handleItemClick}>
                            For Travelers
                        </Menu.Item>
                    </Menu>
                    <Segment basic>
                        <Segment>
                            <Grid columns={2}>
                                <Grid.Column width={1}>
                                    <Header as="h1" style={{
                                        paddingTop: "15px",
                                        paddingLeft: "15px"
                                    }}>1</Header>
                                </Grid.Column>
                                <Grid.Column width={15}>
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
                                            WIth Wish-Mish you can get any item from around the world. To get started,
                                            create an wish for a product you wish and include details such as how much
                                            it costs and from where traveler can get it.
                                        </Header>
                                    </Grid.Row>
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
                                <Grid.Column width={15}>
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
                                <Grid.Column width={15}>
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
                                            including the monetary reward you agree to pay your traveler for delivering
                                            your item.
                                        </Header>
                                    </Grid.Row>
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
                                <Grid.Column width={15}>
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
                </Segment>
            </>
        );
    };
};
