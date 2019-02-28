import React, {Component} from "react";
import {Divider, Header, Icon} from 'semantic-ui-react'

class AccountMainComponent extends Component {

    render() {
        return (
            <React.Fragment>
                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='tag'/>
                        Description
                    </Header>
                </Divider>

                <p>
                    Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs
                    worldwide.
                </p>

                <Divider horizontal>
                    <Header as='h4'>
                        <Icon name='bar chart'/>
                        Specifications
                    </Header>
                </Divider>

                <p>
                    Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs
                    worldwide.
                </p>

            </React.Fragment>
        );
    };
}

export default AccountMainComponent;