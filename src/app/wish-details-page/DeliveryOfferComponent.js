import React, {Component} from "react";
import {Button, Header, Icon, Modal, Rating} from "semantic-ui-react";

class DeliveryOfferComponent extends Component {

    state = {modalOpen: false};
    handleOpen = () => this.setState({modalOpen: true});
    handleClose = () => this.setState({modalOpen: false});

    handleYesClick = () => {
        this.props.handleAcceptOffer();
        this.handleClose();
    };

    render() {
        return (
            <>
                <Modal basic size='small'
                       open={this.state.modalOpen}
                       onClose={this.handleClose}>
                    <Header icon='archive' content='Archive Old Messages'/>
                    <Modal.Content>
                        <p>
                            Your inbox is getting full, would you like us to enable automatic archiving of old messages?
                        </p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button basic color='red' inverted onClick={this.handleClose}>
                            <Icon name='remove'/> No
                        </Button>
                        <Button color='green' inverted onClick={this.handleYesClick}>
                            <Icon name='checkmark'/> Yes
                        </Button>
                    </Modal.Actions>
                </Modal>

                <div className="ui card fluid">
                    <div className="content">
                        <div className="right floated meta">{`${this.props.diffDate} ago`}</div>
                        <img className="ui avatar large image"
                            src="https://react.semantic-ui.com/images/avatar/large/elliot.jpg"
                        />{" "}
                        Elliot
                        <div>
                            <Rating maxRating={5} disabled defaultRating={3}/>
                        </div>
                    </div>
                    <div className="content">
                        <div>
          <span className="right floated time">
            <strong>{this.props.deliveryDate}</strong>
          </span>
                            <span className="category meta">
            <i className="calendar outline icon"/>
            Delivery date
          </span>
                        </div>
                        <div>
          <span className="right floated time">
            <strong>{this.props.deliveryFrom}</strong>
          </span>
                            <span className="category meta">
            <i className="reply icon"/>
            Delivery from
          </span>
                        </div>
                        <div>
          <span className="right floated time">
            <strong>{this.props.quantity}</strong>
          </span>
                            <span className="category meta">
            <i className="reply icon"/>
            Quantity
          </span>
                        </div>
                        <div>
          <span className="right floated time">
            <i className="dollar icon"/>
            <strong>{this.props.travelerReward}</strong>
          </span>
                            <span className="category meta">
            <i className="reply icon"/>
            Item price
          </span>
                        </div>
                    </div>
                    <div className=" content">
                        <div className="ui large left icon">
                            <span className="category ">Traveler reward</span>
                            <span className="right floated time">
            <i className="dollar icon"/>
            <strong>{this.props.travelerReward}</strong>
          </span>
                        </div>
                    </div>
                    {this.props.userId === this.props.userIdByWish && this.props.wishStatus === "open" ? (
                        <div className="ui bottom attached button orange" onClick={this.handleOpen}>
                            <i className="handshake outline icon"/>
                            Agree to Offer
                        </div>
                    ) : null}
                </div>

            </>
        );
    };
}

export default DeliveryOfferComponent;
