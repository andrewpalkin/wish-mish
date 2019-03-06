import React, {Component} from "react";
import WishLightComponent from "./WishLightComponent";
import CompleteWishComponent from "./CompleteWishComponent";
import {Link} from "react-router-dom";
import {Button, Grid, Header, Image, Menu, Segment} from "semantic-ui-react";
import dateDiff from "../common/utils/dates/dateDiff";
import WisherInstructionsComponent from "./WisherInstructionsComponent";
import TravelerInstructionsComponent from "./TravelerInstructionsComponent";

export default class HomePage extends Component {

    state = {activeItem: 'wisher'};
    handleItemClick = (e, {name}) => this.setState({activeItem: name});

    render() {
        const currentDate = new Date();
        const {activeItem} = this.state;

        return (
            <>
                <Segment basic>
                    <Image src='http://media.virbcdn.com/files/b1/6d1d02deff9a0674-worldmap_noborder_nopoles.png'
                           fluid/>
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
                    {activeItem === 'wisher' ? <WisherInstructionsComponent/> : <TravelerInstructionsComponent/>}

                </Segment>

            </>
        );
    };
};
