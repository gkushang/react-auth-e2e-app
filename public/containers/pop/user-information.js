import React, {Component} from 'react';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper';

class UserInformation extends Component {

    render() {

        const info = this.props.user;

        if (!info) {
            return (
                <div className="container-fluid auth-panel panel-color text-center user-info-action">
                    Select Challenge to Pop User
                </div>
            );
        } else if(!info.user) {
            return (
                <div className="container-fluid auth-panel panel-color text-center text-danger user-info-action fade in">
                    <i className="fa fa-exclamation-triangle">  </i> Error retrieving user information
                </div>
            );
        } else if(info.status && info.status === 'Generating') {
            const createUserUrl = "http://authserv-8375.ccg21.dev.paypalcorp.com/msmaster/users/create?challengeType=" + info.challenge.key;
            return (
                <div className="row">
                    <div className="container-fluid auth-panel panel-color text-center text-danger">
                        <h4 className="generating">    <i className="fa fa-exclamation-triangle">  </i>
                            {info.challenge.type} user is not available yet
                        </h4>
                        <small className="text-center">
                            <ins>
                                <a className="text-danger creating-user-link" href={createUserUrl} target="_blank" >
                                    Create a new user
                                </a>
                            </ins>
                        </small>
                    </div>
                </div>
            );
        }


        const challenges = info.challenges.join(', ');

        const style = {
            height: 600,
            width: 1100,
            margin: 8,
            textAlign: 'center',
            backgroundColor: '#393d42',
            color: '#ffffff'
        };

        return (
            <Paper className="container-fluid auth-panel panel-color" style={style} zDepth={2} rounded={true}>

                <div className="panel-heading text-primary">
                    <p className="text-center user-info-title "><i className="fa fa-paypal"> </i> {info.challenge.type}</p>
                </div>

                <div className="col-sm-12">
                    <div className="row">
                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info pull-left"><i className="fa fa-envelope"> </i> {info.user.emailAddress}</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-user-secret"> </i> {info.user.accountNumber}</p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info  pull-left"><i className="fa fa-user"> </i> {info.user.firstName}</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-home"> </i> {info.user.homeAddress1} </p>
                            {/*<p className="pull-right">{this.props.authJson.homeCity} </p>*/}
                            {/*<p className="pull-right">{this.props.authJson.homeCountry} </p>*/}

                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info  pull-left"><i className="fa fa-mobile"> </i> {info.user.mobilePhone} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-phone"> </i> {info.user.homePhoneNumber} </p>
                        </div>

                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info  pull-left"><i className="fa fa-user-plus"> </i> {info.user.accountType}</p>
                        </div>

                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-desktop" aria-hidden="true"> </i> {info.stage} </p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info  pull-left"><i className="fa fa-question-circle"> </i> {info.user.securityAnswer1} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-check-circle"> </i> {info.user.securityAnswer1} </p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info  pull-left"><i className="fa fa-question-circle"> </i> {info.user.securityAnswer2} </p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-check-circle"> </i> {info.user.securityAnswer2} </p>
                        </div>

                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info  pull-left"><i className="fa fa-hand-o-right"> </i> {info.available} left</p>
                        </div>

                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-list-ul" aria-hidden="true"> </i> {challenges} </p>
                        </div>

                        <p className="text-center page-header"><i className="fa"> </i>  </p>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info  pull-left"><i className="fa fa-cc-visa"> </i> 7373 3939 3784 6268</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-cc-mastercard"> </i> 7373 3939 3784 6268</p>
                        </div>

                        <div className="col-xs-8 col-sm-6">
                            <p className="user-info  pull-left"><i className="fa fa-cc-amex"> </i> 7373 3939 3784 6268</p>
                        </div>
                        <div className="col-xs-4 col-sm-6">
                            <p className="user-info pull-right"><i className="fa fa-cc-discover"> </i> 7373 3939 3784 6268</p>
                        </div>


                    </div>
                </div>
                </Paper>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.user,
        challenge: state.challenge
    }
}

export default connect(mapStateToProps)(UserInformation)