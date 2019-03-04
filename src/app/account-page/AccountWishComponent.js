import React, {Component}  from "react";
import {Button, Card, Grid, Header, Icon, Image, Segment, Modal} from "semantic-ui-react";

class AccountWishComponent  extends Component {

    state = {modalOpen: false};
    handleOpen = () => this.setState({modalOpen: true});
    handleClose = () => this.setState({modalOpen: false});

    handleYesClick = (wishId) => {
        this.props.cancelWishAccountMainComponent(wishId);
        this.handleClose();
    };

    render() {
        const {diffDate} = this.props;

        return (
            <>
                <Modal basic size='small'
                       open={this.state.modalOpen}
                       onClose={this.handleClose}>
                    <Header icon='archive' content='Archive Old Messages'/>
                    <Modal.Content>
                        <p>
                            Are you sure to cancel the current WISH?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={this.handleClose}>
                            <Icon name='remove'/> No
                        </Button>
                        <Button color='green' inverted onClick={() => this.handleYesClick(this.props.id)}>
                            <Icon name='checkmark'/> Yes
                        </Button>
                    </Modal.Actions>
                </Modal>

                <Card fluid href={"/wish/" + this.props.id} style={{ paddingBottom: "0px", marginBottom: "0px" }} >
                    <Card.Content>
                        <Grid>
                            <Grid.Column width={8}>
                                <Header as="h3">{this.props.productName}</Header>
                            </Grid.Column>
                            <Grid.Column textAlign="right" width={8}>
                                <label
                                    style={{
                                        fontSize: "1em",
                                        color: "rgba(0, 0, 0, 0.4)"
                                    }}
                                >
                                    Placed {diffDate ? `${diffDate} ago` : null}
                                </label>
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                    <Card.Content extra>
                        <Grid stackable>
                            <Grid.Column width={4}>
                                <Image
                                    rounded
                                    fluid
                                    bordered
                                    centered
                                    src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/image/AppleInc/aos/published/images/i/ph/iphone8/plus/iphone8-plus-silver-select-2018?wid=470&hei=556&fmt=png-alpha&.v=1522347733364"
                                />
                            </Grid.Column>
                            <Grid.Column width={12}>
                                <Grid.Row>
                                    <Segment secondary>
                                        <Grid.Row>
                                            <Grid columns={3}>
                                                <Grid.Column verticalAlign="middle" style={{
                                                    paddingTop: "5px",
                                                    paddingBottom: "0px"
                                                }}>
                                                    <Header
                                                        as="h4"
                                                        style={{
                                                            marginLeft: "0px",
                                                            marginTop: "5px",
                                                            marginBottom: "5px"
                                                        }}
                                                    >
                                                        {this.props.deliveryFrom}
                                                    </Header>
                                                </Grid.Column>
                                                <Grid.Column verticalAlign="middle" textAlign="center" style={{
                                                    paddingTop: "5px",
                                                    paddingBottom: "0px"
                                                }}>
                                                    <Icon disabled name="plane"/>
                                                </Grid.Column>
                                                <Grid.Column verticalAlign="middle" textAlign="right"
                                                             style={{
                                                                 paddingTop: "5px",
                                                                 paddingBottom: "0px"
                                                             }}>
                                                    <Header
                                                        as="h4"
                                                        style={{
                                                            marginLeft: "0px",
                                                            marginTop: "5px",
                                                            marginBottom: "5px"
                                                        }}
                                                    >
                                                        {this.props.deliveryTo}
                                                    </Header>
                                                </Grid.Column>
                                            </Grid>
                                        </Grid.Row>

                                        {this.props.deliveryBeforeDate ? (
                                            <Grid columns={2}>
                                                <Grid.Column verticalAlign="middle"
                                                             style={{
                                                                 paddingTop: "5px",
                                                                 paddingBottom: "0px"
                                                             }}
                                                >
                                                    <label
                                                        style={{
                                                            fontSize: "1em",
                                                            color: "rgba(0, 0, 0, 0.4)"
                                                        }}
                                                    >
                                                        Before
                                                    </label>
                                                    <Icon disabled name="calendar alternate outline"/>
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
                                                            marginTop: "5px",
                                                            marginBottom: "5px"
                                                        }}
                                                    >
                                                        {this.props.deliveryBeforeDate}
                                                    </Header>
                                                </Grid.Column>
                                            </Grid>
                                        ) : null}

                                    </Segment>
                                </Grid.Row>

                                <Grid
                                    style={{
                                        paddingTop: "10px",
                                        paddingBottom: "5px",
                                        paddingRight: "5px",
                                        paddingLeft: "5px"
                                    }}
                                >
                                    <Grid.Column width={10} verticalAlign="middle">
                                        <label
                                            style={{
                                                display: "inline-block",
                                                fontSize: "1em",
                                                color: "rgba(0, 0, 0, 0.4)"
                                            }}
                                        >
                                            Item price: $
                                            {(this.props.itemPrice * this.props.quantity)
                                                .toFixed(2)
                                                .replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                                        </label>
                                    </Grid.Column>
                                    <Grid.Column width={6} align="right" verticalAlign="middle">
                                        <label
                                            style={{
                                                display: "inline-block",
                                                fontSize: "1em",
                                                color: "rgba(0, 0, 0, 0.4)"
                                            }}
                                        >
                                            2 offers
                                        </label>
                                    </Grid.Column>
                                </Grid>
                            </Grid.Column>
                        </Grid>
                    </Card.Content>
                </Card>
                {this.props.status === "open" ?
                    <Button attached='bottom' negative onClick={this.handleOpen}>
                        <Icon name='cancel'/> Cancel
                    </Button>
                    : null}
            </>
        );
    };
}

export default AccountWishComponent;
