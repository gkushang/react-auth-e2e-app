import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectSecurityCodeChallenge} from '../../actions/index';
import {bindActionCreators} from 'redux';
import SecurityCode from './security-code';
import {List, ListItem} from 'material-ui/List';


class SecurityCodeList extends Component {

    renderList() {
        return (
            this.props.securityCodesChallenges.map((securityCodeChallenge, i) => {
                return (
                    <ListItem
                        href="#"
                        key={securityCodeChallenge.type}
                        style={{'font-size': 15, color: '#9E9E9E', 'letterSpacing': 0.3}}
                        onClick={() => this.props.selectSecurityCodeChallenge(securityCodeChallenge)}
                        className={i === 0 ? "list-group-item security-list-group-item active" :
                            "list-group-item security-list-group-item"}>
                        {securityCodeChallenge.type}
                    </ListItem>
                )
            })
        )
    }

    render() {
        return (
            <div className="container-fluid security-code-panel">
                <List className="col-md-2 security-list-group">
                    {this.renderList()}
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
    return bindActionCreators({ selectSecurityCodeChallenge }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCodeList)
