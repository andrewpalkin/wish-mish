import React from "react";
import {Container, Divider, Grid, Header, Image, List, Segment} from "semantic-ui-react";

const Footer = () => {
    return (
        <Segment
            vertical
            style={{margin: "5em 0em 0em", padding: "5em 0em"}}
            fixed={"bottom"}
        >
            <Container textAlign="center">
                <Divider section/>
                <Grid divided stackable>
                    <Grid.Column width={3}>
                        <Header as="h4" content="Group 1"/>
                        <List link>
                            <List.Item as="a">Link One</List.Item>
                            <List.Item as="a">Link Two</List.Item>
                            <List.Item as="a">Link Three</List.Item>
                            <List.Item as="a">Link Four</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header as="h4" content="Group 2"/>
                        <List link>
                            <List.Item as="a">Link One</List.Item>
                            <List.Item as="a">Link Two</List.Item>
                            <List.Item as="a">Link Three</List.Item>
                            <List.Item as="a">Link Four</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={3}>
                        <Header as="h4" content="Group 3"/>
                        <List link>
                            <List.Item as="a">Link One</List.Item>
                            <List.Item as="a">Link Two</List.Item>
                            <List.Item as="a">Link Three</List.Item>
                            <List.Item as="a">Link Four</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column width={7}>
                        <Header as="h4" content="Footer Header"/>
                        <p>
                            Extra space for a call to action inside the footer that could help
                            re-engage users.
                        </p>
                    </Grid.Column>
                </Grid>

                <Divider section/>
                <Image centered size="mini" src="/logo.png"/>
                <List horizontal divided link size="small">
                    <List.Item as="a" href="#">
                        Site Map
                    </List.Item>
                    <List.Item as="a" href="#">
                        Contact Us
                    </List.Item>
                    <List.Item as="a" href="#">
                        Terms and Conditions
                    </List.Item>
                    <List.Item as="a" href="#">
                        Privacy Policy
                    </List.Item>
                </List>
            </Container>
        </Segment>
    );
};

export default Footer;
