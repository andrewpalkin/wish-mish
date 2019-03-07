import React from "react";
import {Button, Grid, Header, Message, Segment} from "semantic-ui-react";

import ShoppingCardComponent from "./ShoppingCardComponent"

const SubmitWishStep3Component = props => {
    return (
        <Grid>
            <Grid.Column width={11}>
                <Segment style={{minHeight: "680px"}}>
                    <Header as="h1" dividing>
                        Confirm wish details
                    </Header>
                    <Message info>
                        <p>
                            sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd asd
                        </p>
                    </Message>
                    <Message info>
                        <p>
                            sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd asd
                        </p>
                    </Message>
                    <Message info>
                        <p>
                            sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd asd
                        </p>
                    </Message>
                    <Message info>
                        <p>
                            sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd asd
                        </p>
                    </Message>
                    <Message info>
                        <p>
                            sadasd asdas das asd asd asd asd asd asd asd asd asd asd asd asd
                            asd asd asd asd
                        </p>
                    </Message>
                </Segment>
            </Grid.Column>
            <Grid.Column width={5}>
                <Segment>
                    <ShoppingCardComponent {...props}/>

                    <Button
                        primary
                        fluid
                        loading={props.submitWishShowSpinner}
                        disabled={props.submitWishShowSpinner}
                        onClick={() =>
                            props.publishWish({
                                ...props.formDataStep1,
                                ...props.formDataStep2,
                                userId: props.userId,
                                initials: props.initials,
                                firstName: props.firstName,
                                publishedDate: new Date(),
                                history: props.history
                            })
                        }
                    >
                        Publish
                    </Button>
                </Segment>

            </Grid.Column>
        </Grid>
    );
};

export default SubmitWishStep3Component;
