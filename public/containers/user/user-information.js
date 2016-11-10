import React, {Component} from "react";
import {connect} from "react-redux";
import Paper from "material-ui/Paper";
import CircularProgress from "material-ui/CircularProgress";
import {bindActionCreators} from "redux";
import {createUser} from "../../actions/index";
import Styles from "Styles";

class UserInformation extends Component {

    render() {

        const info = this.props.user;

        if (!this.props.isFetchingUser) {

            if (!info) {
                return (
                    <div className="container-fluid user-info-panel text-center user-info-action">
                        Select a Challenge to Pop User
                    </div>
                );
            } else if (!info.user) {
                return (
                    <div
                        className="container-fluid user-info-panel panel-color text-center text-danger user-info-action">
                        <i className="fa fa-exclamation-triangle"> </i> Error retrieving user information
                    </div>
                );
            } else if (info.status && info.status === 'Generating') {
                return (
                    <div className="row">
                        <div className="container-fluid user-info-panel panel-color text-center text-danger">
                            <h4 className="generating"><i className="fa fa-exclamation-triangle"> </i>
                                {info.challenge.type} user is not available yet
                            </h4>
                            <small className="text-center">
                                <ins>
                                    <a
                                        className="text-danger creating-user-link"
                                        onClick={() => this.props.createUser(info.challenge)}
                                        target="_blank">
                                        Create a new user
                                    </a>
                                </ins>
                            </small>
                        </div>
                    </div>
                );
            }
        }

        const renderInfo = (info) => {

            var challenges = info.challenge.key;

            if (info.challenges) {
                challenges = info.challenges.join(', ');
            }

            return (
                <div>
                    <div className="panel-heading text-primary">
                        <p className="text-center user-info-title">
                            <i className="fa fa-paypal"> </i>
                            {info.challenge.type}
                                <div  data-toggle="tooltip"
                                      data-placement="left"
                                      data-delay={{show: 10, hide: 500}}
                                      className="pull-left tooltip-create-user"
                                      title={"Create new " + info.challenge.type + " user"}>
                                    <a
                                        className="text-info create-on-fly"
                                        onClick={() => this.props.createUser(info.challenge)} >
                                        <i className="fa fa-paper-plane"> </i>
                                    </a>
                                </div>
                        </p>
                    </div>

                    <div className="col-sm-12 user-info-panel">
                        <div className="row">

                            <div className="col-xs-12 col-sm-6" id="email">
                                <p className="user-info pull-left">
                                    <i className="fa fa-envelope"> </i>
                                    {info.user.emailAddress}
                                    <a
                                        className="copyButton"
                                        id="copyIcon"
                                        tooltip="copy"
                                        data-clipboard-action="copy"
                                        data-clipboard-target="#email"
                                    ><i className="fa fa-clipboard"> </i>
                                    </a>
                                </p>

                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right" id="accountNumber">
                                    <i className="fa fa-user-secret"> </i>
                                    {info.user.accountNumber}
                                    <a
                                        className="copyButton"
                                        id="copyIcon"
                                        tooltip="copy"
                                        data-clipboard-action="copy"
                                        data-clipboard-target="#accountNumber"
                                    ><i className="fa fa-clipboard"> </i>
                                    </a>
                                </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info  pull-left"><i
                                    className="fa fa-user-plus"> </i> {info.user.accountType}</p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i className="fa fa-desktop"> </i> {info.stage} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info  pull-left"><i
                                    className="fa fa-user"> </i> {info.user.firstName}</p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i
                                    className="fa fa-user"> </i> {info.user.lastName} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-left"><i
                                    className="fa fa-home"> </i> {info.user.homeAddress1} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i
                                    className="fa fa-map-marker"> </i> {info.user.homeCity} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info  pull-left"><i
                                    className="fa fa-mobile"> </i> {info.user.mobilePhone} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i
                                    className="fa fa-phone"> </i> {info.user.homePhoneNumber} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info  pull-left"><i
                                    className="fa fa-question-circle"> </i> {info.user.securityAnswer1} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i
                                    className="fa fa-check-circle"> </i> {info.user.securityAnswer1} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info  pull-left"><i
                                    className="fa fa-question-circle"> </i> {info.user.securityAnswer2} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i
                                    className="fa fa-check-circle"> </i> {info.user.securityAnswer2} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6 ">
                                <p className="user-info pull-left"><i
                                    className="fa fa-cc-visa"> </i> {info.Visa ? info.Visa.cardNumber : ''}</p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i
                                    className="fa fa-cc-mastercard"> </i> {info.Master ? info.Master.cardNumber : ''}
                                </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-left"><i
                                    className="fa fa-cc-amex"> </i> {info.Amex ? info.Amex.cardNumber : ''} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i
                                    className="fa fa-cc-discover"> </i> {info.Discover ? info.Discover.cardNumber : ''}
                                </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info  pull-left"><i
                                    className="fa fa-hourglass-half"> </i> {(info.available) ? info.available + " left" : ""} </p>
                            </div>

                            <div className="col-xs-12 col-sm-6">
                                <p className="user-info pull-right"><i className="fa fa-list-ul"
                                                                       aria-hidden="true"> </i> {challenges} </p>
                            </div>

                        </div>
                    </div>
                </div>
            );
        };

        return (
            <Paper className="container-fluid common" style={Styles.userInfo} zDepth={1} rounded={true}>
                { this.props.isFetchingUser ?
                    <CircularProgress className="user-fetching-circular" size={60} thickness={5}/> : renderInfo(info) }
            </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        challenge: state.challenge,
        isFetchingUser: state.isFetchingUser
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({createUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInformation)