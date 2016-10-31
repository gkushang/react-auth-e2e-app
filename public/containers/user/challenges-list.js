import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectChallenge} from '../../actions/index';
import {bindActionCreators} from 'redux';
import UserInformation from './user-information';
import {List, ListItem} from 'material-ui/List';
import Styles from 'Styles'

class ChallengesList extends Component {

    renderList() {
        return (
            this.props.challenges.map((challenge) => {
                return (
                    <ListItem
                        href="#"
                        key={challenge.type}
                        onClick={() => this.props.selectChallenge(challenge)}
                        style={Styles.listItem}
                        className="list-group-item challenge-list-group-item">
                        {challenge.type}
                    </ListItem>
                )
            })
        )
    }

    render() {
        return (
                <div className="container-fluid">
                    <List className="col-md-2 challenge-list-group">
                        {this.renderList()}
                    </List>
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
