import React, {Component} from "react";
import {connect} from "react-redux";
import {popUser} from "../../actions/index";
import {bindActionCreators} from "redux";
import UserInformation from "./user-information";
import {List} from "material-ui/List";
import ChallengeList from '../presentational/ChallengeList';


class ChallengesList extends Component {

    render() {
        return (
            <div className="container-fluid ">
                <List className="col-md-2 challenge-list-group">
                    <ChallengeList
                        challenges={this.props.challenges}
                        onClick={this.props.popUser}
                        className="challenge-list-group-item"
                    />
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
    return bindActionCreators({popUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ChallengesList)
