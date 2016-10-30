import React, {Component} from 'react';
import ChallengeList from '../containers/user/challenges-list';
import SecurityCodeList from '../containers/securityCode/security-code-list'

import Header from '../containers/header/header';

export default class App extends Component {
    render() {
        return (
            <div id="wrapper">

                <Header/>
                <ChallengeList />
                <SecurityCodeList />
            </div>
        );
    }
}
