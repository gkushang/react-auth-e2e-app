import React, {Component} from 'react';
import { reduxForm, Fields, Field} from 'redux-form';
import Input from '../presentational/Input';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSecurityCode} from '../../actions/index';

export const validate = (values) => {
    const errors = {};

    if(!values.stage) {
        errors.stage =  'Required';
    }

    if(!values.accountNumber) {
        errors.accountNumber =  'Required';
    }

    return errors;
};

class SecurityCode extends Component {

    render() {

        const { handleSubmit, submitting, reset, pristine, value, onChange } = this.props;

        const renderButton = () => (
            <div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    disabled={ pristine || submitting } >
                    <i className="fa fa-paper-plane" aria-hidden="true"> </i>
                    Security Code
                </button>
            </div>
            );

        const renderCode = (retrievedCode, isLoading) => {

            if(isLoading) {
                return (
                    <div className="form-group text-center text-info security-code-error-text pull-right col-sm-2">
                        <span className="loading">
                            <i className="fa fa-spinner fa-spin fa-3x" aria-hidden="true"> </i>
                        </span>
                    </div>
                );
            }

            if(retrievedCode.code) {
                return retrievedCode.code.Error ? (
                    <div className="form-group text-center text-danger security-code-error-text pull-right col-sm-2">
                            <p className="security-code-danger"><i
                                className="fa fa-exclamation-triangle security-code-danger"> </i></p>
                            <p className="security-code-not-found">Not Found</p>
                    </div>
                ) : (
                    <div className="form-group security-code-retrieved pull-right text-primary col-sm-2">
                        <label>{retrievedCode.code.SecurityCode || ''}</label>
                    </div>
                );
            } else {
                return (
                    <div className="form-group security-code-retrieved pull-right text-primary col-sm-2">
                    </div>
                )
            }
        };


        const renderStageField = () => (
            <Field
                name="stage"
                placeholder="CCP"
                type="text"
                hintText="claimscollectionserv stage2xx"
                component={Input}
                />
            );

        const renderAccountField = () => (
            <Field
                name="accountNumber"
                placeholder="Account Number or Email"
                type="tel"
                component={Input}
            />
            );

        const handleFetch = (params) => {
            this.props.fetchSecurityCode(this.props.securityCodeChallenge, params);
        };


        return (

            <div>
                <div className="security-code-fetch panel-color">
                    <form className="form-inline" onSubmit={handleSubmit(handleFetch)}>

                        <div className="form-group col-sm-4">
                            {renderStageField()}
                        </div>

                        <div className="form-group col-sm-4">
                            {renderAccountField()}
                        </div>


                        <div className="form-group col-sm-1 security-code-btn ">
                            {renderButton()}
                        </div>

                        {renderCode(this.props.securityCodeFetched, this.props.isLoading)}

                    </form>
                </div>

            </div>

        );
    }
}

function mapStateToProps(state) {
    console.log('stagte in sec code is ', state);

    return {
        securityCodeChallenge: state.securityCodeChallenge,
        securityCodeFetched: state.securityCodeFetched,
        user: state.user,
        isLoading: state.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchSecurityCode }, dispatch);
}


SecurityCode = reduxForm({
    form: 'securityCodeForm',
    validate
}, () => {})(SecurityCode);

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCode)