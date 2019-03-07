import React from "react";
import {Divider, Grid, Header, Segment} from "semantic-ui-react";

import ShoppingCardOneRowComponent from "./ShoppingCardOneRowComponent"

const ShoppingCardComponent = props => {
    const {formDataStep1 = {}, formDataStep2 = {}} = props;

    return (
        <Segment basic style={{
            paddingLeft: "0px",
            paddingRight: "0px",
            paddingTop: "0px",
            paddingBottom: "0px"
        }}>
            <Grid.Row>
                <Header size="small">
                    {formDataStep1 ? formDataStep1.productName : null}
                </Header>
            </Grid.Row>
            <Grid.Row>
                {formDataStep2.deliveryTo ||
                formDataStep2.deliveryFrom ||
                formDataStep2.deliveryBeforeDate ? (
                    <Divider clearing/>
                ) : null}
            </Grid.Row>
            <Grid.Row>
                {formDataStep2.deliveryTo ? (
                    <ShoppingCardOneRowComponent description="Delivery to"
                                                 value={formDataStep2.deliveryTo}/>
                ) : null}
            </Grid.Row>
            <Grid.Row>
                {formDataStep2.deliveryFrom ?
                    <ShoppingCardOneRowComponent description="Delivery from"
                                                 value={formDataStep2.deliveryFrom}/>
                    : null}
            </Grid.Row>
            <Grid.Row>
                {formDataStep2.deliveryBeforeDate ?
                    <ShoppingCardOneRowComponent description="Delivery before"
                                                 value={formDataStep2.deliveryBeforeDate}/>
                    : null}
            </Grid.Row>
            <Grid.Row>
                {formDataStep1 && formDataStep1.itemPrice ? (
                    <>
                        <Divider clearing/>
                        <ShoppingCardOneRowComponent description="Item Price"
                                                     value={`$ ${(formDataStep1.itemPrice * formDataStep1.quantity)
                                                         .toFixed(2)
                                                         .replace(/\d(?=(\d{3})+\.)/g, "$&,")}`}/>
                        <ShoppingCardOneRowComponent description="Reward"
                                                     value={`$ ${formDataStep2.reward}`}/>
                    </>
                ) : null}
            </Grid.Row>
        </Segment>
    );
};

export default ShoppingCardComponent;
