import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectChallenge} from '../../actions/index';
import {bindActionCreators} from 'redux';
import UserInformation from './user-information';

class ChallengesList extends Component {

    renderList() {

        return (
            this.props.challenges.map((challenge) => {
                return (
                    <a
                        href="#"
                        key={challenge.type}
                        onClick={() => this.props.selectChallenge(challenge)}
                        className="list-group-item panel-list-color">
                        {challenge.type}
                    </a>
                )
            })
        )
    }

    render() {
        return (
                <div className="container-fluid pop-user-panel">
                    <div className="col-md-2 ">
                        {this.renderList()}
                    </div>
                    <UserInformation />
                </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        challenges: state.challengesList.challenges
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ selectChallenge }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesList)
