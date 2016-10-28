import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSecurityCodeChallenge} from '../../actions/index';
import {bindActionCreators} from 'redux';
import SecurityCode from './security-code';


class SecurityCodeList extends Component {

    renderList() {
        return (
            this.props.securityCodesChallenges.map((securityCodeChallenge, i) => {
                return (
                    <a
                        href="#"
                        key={securityCodeChallenge.type}
                        onClick={() => this.props.selectSecurityCodeChallenge(securityCodeChallenge)}
                        className={i === 0 ? "list-group-item list-group-item-action panel-list-color active" :
                            "list-group-item panel-list-color list-group-item-action"}>
                        {securityCodeChallenge.type}
                    </a>
                )
            })
        )
    }

    render() {
        return (
            <div className="container-fluid security-code-panel">
                <div className="col-md-2">
                    {this.renderList()}
                </div>
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
    return bindActionCreators({ selectSecurityCodeChallenge }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCodeList)
