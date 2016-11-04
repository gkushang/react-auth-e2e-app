import React, {Component} from "react";
import {reduxForm, Fields, Field} from "redux-form";
import Input from "../presentational/Input";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchSecurityCode} from "../../actions/index";
import CircularProgress from "material-ui/CircularProgress";
import Paper from "material-ui/Paper";
import RaisedButton from "material-ui/RaisedButton";
import Styles from "Styles";

export const validate = (values) => {
    const errors = {};

    if (!values.stage) {
        errors.stage = 'Required';
    }

    if (!values.accountNumber) {
        errors.accountNumber = 'Required';
    }

    return errors;
};

class SecurityCode extends Component {

    render() {

        const {handleSubmit} = this.props;

        const renderCode = (retrievedCode, isFetchingCode) => {

            if (isFetchingCode) {
                return (
                    <span className="loading text-center">
                            <CircularProgress />
                        </span>
                );
            }

            if (retrievedCode.code) {
                return retrievedCode.code.Error || !retrievedCode.code.SecurityCode ? (
                    <span className="text-danger">
                        <p className="security-code-danger"><i
                            className="fa fa-exclamation-triangle"> </i></p>
                        <p className="security-code-not-found">Not Found</p>
                        </span>
                ) : (
                    <div className="form-group security-code-retrieved pull-right text-primary">
                        <a
                            className="copyButton"
                            tooltip="copy"
                            data-clipboard-action="copy"
                            data-clipboard-target="#showSecurityCode"
                        ><label id="showSecurityCode">{retrievedCode.code.SecurityCode || ''}</label>
                        </a>
                    </div>
                );
            }
        };

        const handleFetch = (params) => {
            this.props.fetchSecurityCode(this.props.securityCodeChallenge, params);
        };

        return (
            <div className="security-code-panel row common">
                <Paper style={Styles.securityCodePanelPaper} zDepth={0} rounded={true}>

                    <form className="form-inline" onSubmit={handleSubmit(handleFetch)}>

                        <div className="form-group col-lg-3 col-md-6 pull-left common">
                            <Field
                                name="stage"
                                placeholder="CCP"
                                type="text"
                                hintText="claimscollectionserv stage2"
                                component={Input}
                            />
                        </div>

                        <div className="form-group col-lg-4 col-md-6">
                            <Field
                                name="accountNumber"
                                placeholder="Account # or Email"
                                type="tel"
                                component={Input}
                            />
                        </div>

                        <div className="form-group col-lg-3 col-md-6 security-code-btn">
                            <RaisedButton
                                label={<span> <i className="fa fa-paper-plane"> </i> Security Code </span>}
                                className="raised-button pull-left"
                                labelStyle={{fontSize: 13, color: 'lightgray', fontFamily: "'Montserrat', sans-serif"}}
                                primary={true}
                                type="submit"
                                onTouchTap={this.context.submit}
                            />
                        </div>

                        <div className="form-group col-lg-2 col-md-6 pull-right">
                            <Paper style={Styles.securityCodePaper} zDepth={2} rounded={true}>
                                {renderCode(this.props.securityCodeFetched, this.props.isFetchingCode)}
                            </Paper>
                        </div>

                    </form>
                </Paper>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        securityCodeChallenge: state.securityCodeChallenge,
        securityCodeFetched: state.securityCodeFetched,
        user: state.user,
        isFetchingCode: state.isFetchingCode
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchSecurityCode}, dispatch);
}


SecurityCode = reduxForm({
    form: 'securityCodeForm',
    validate
})(SecurityCode);

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCode)