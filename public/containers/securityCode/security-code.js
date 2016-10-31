import React, {Component} from 'react';
import { reduxForm, Fields, Field} from 'redux-form';
import Input from '../presentational/Input';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchSecurityCode} from '../../actions/index';
import CircularProgress from 'material-ui/CircularProgress';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

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

        /*
        const renderCode = (retrievedCode, isLoading) => {

            if(isLoading) {
                return (
                    <div className="form-group text-center text-info security-code-error-text pull-right col-sm-1">
                        <span className="loading">
                            <CircularProgress />
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
        */

        const renderCode = (retrievedCode, isLoading) => {

            if(isLoading) {
                return (
                        <span className="loading col-sm-3">
                            <CircularProgress />
                        </span>
                );
            }

            if(retrievedCode.code) {
                return retrievedCode.code.Error ? (
                    <span className="text-danger">
                        <p className="security-code-danger"><i
                            className="fa fa-exclamation-triangle security-code-danger"> </i></p>
                        <p className="security-code-not-found">Not Found</p>
                        </span>
                ) : (
                    <div className="form-group security-code-retrieved pull-right text-primary col-sm-2">
                        <label>{retrievedCode.code.SecurityCode || ''}</label>
                    </div>
                );
            }
        };



        const renderButton = () => (
            <RaisedButton
                label={<span> <i className="fa fa-paper-plane" aria-hidden="true"> </i> Security Code </span>}
                className="raised-button"
                labelStyle={{'font-size' : 13, color: 'lightgray', display: 'block',
                    textAlign: 'left', verticalAlign: 'middle', position: 'relative'}}
                primary={true}
                type="submit"
                style={{margin: 2, display: 'inline-block'}}
                buttonStyle={{width: 165}}
                onTouchTap={this.context.submit}
            />
        );


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
            console.log('clicked');
            this.props.fetchSecurityCode(this.props.securityCodeChallenge, params);
        };

        // const style = {
        //     height: 100,
        //     width: 1100,
        //     margin: 8,
        //     textAlign: 'center',
        //     backgroundColor: '#393d42',
        //     color: '#ffffff',
        //     float: 'right',
        //     'border-radius': 5
        // };

        const style = {
            height: 70,
            width: 180,
            marginLeft: 30,
            marginTop: 10,
            textAlign: 'center',
            backgroundColor: '#393d42',
            color: '#ffffff',
            float: 'left',
            paddingRight: 100,
            'border-radius': 5,
        };

        return (
            <div className="security-code-panel">
                    <form className="form-inline" onSubmit={handleSubmit(handleFetch)}>

                        <div className="form-group col-sm-3 col-color-stg">
                            {renderStageField()}
                        </div>

                        <div className="form-group col-sm-3 col-color-acc">
                            {renderAccountField()}
                        </div>

                        <div className="form-group col-sm-2 pull-left security-code-btn">
                            {renderButton(this.props)}
                        </div>

                        <Paper className="pull-left" style={style} zDepth={2} rounded={true}>
                            {renderCode(this.props.securityCodeFetched, this.props.isLoading)}
                        </Paper>

                    </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
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
})(SecurityCode);

export default connect(mapStateToProps, mapDispatchToProps)(SecurityCode)