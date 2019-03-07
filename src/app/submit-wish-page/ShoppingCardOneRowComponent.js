import React from "react";
import { Grid, Header} from "semantic-ui-react";

const ShoppingCardOneRowComponent = props => {

    const {description, value} = props;

    return(
        <Grid columns="equal">
            <Grid.Column floated="left"
                         style={{
                             paddingTop: "5px",
                             paddingBottom: "5px"
                         }}>
                <Header size="small" disabled
                        style={{
                            marginBottom: "5px",
                            marginTop: "5px"
                        }}>{description}</Header>
            </Grid.Column>
            <Grid.Column floated="right" textAlign="right"
                         style={{
                             paddingTop: "5px",
                             paddingBottom: "5px"
                         }}>
                <Header size="small"
                        style={{
                            marginBottom: "5px",
                            marginTop: "5px"
                        }}>
                    {value}
                </Header>
            </Grid.Column>
        </Grid>
    );
};

export default ShoppingCardOneRowComponent;