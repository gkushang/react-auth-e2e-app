import React, {Component} from "react";
import {connect} from "react-redux";
import {selectSecurityCodeChallenge} from "../../actions/index";
import {bindActionCreators} from "redux";
import SecurityCode from "./security-code";
import {List} from "material-ui/List";
import ChallengeList from '../presentational/ChallengeList';


class SecurityCodeList extends Component {

    render() {
        return (
            <div className="container-fluid security-code-container">
                <List className="col-md-2 security-list-group">
                    <ChallengeList
                        challenges={this.props.securityCodesChallenges}
                        className="security-list-group-item"
                        isDefaultActive={true}
                        onClick={this.props.selectSecurityCodeChallenge}
                    />
                </List>
                <SecurityCode />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        securityCodesChallenges: state.securityCodeList.securityCodes
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectSecurityCodeChallenge}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCodeList)
