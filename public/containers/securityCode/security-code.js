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

        const renderCode = (retrievedCode, isLoading) => {

            if(isLoading) {
                return (
                        <span className="loading text-center">
                            <CircularProgress />
                        </span>
                );
            }

            if(retrievedCode.code) {
                return retrievedCode.code.Error ? (
                    <span className="text-danger">
                        <p className="security-code-danger"><i
                            className="fa fa-exclamation-triangle"> </i></p>
                        <p className="security-code-not-found">Not Found</p>
                        </span>
                ) : (
                    <div className="form-group security-code-retrieved pull-right text-primary">
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
                    textAlign: 'left', verticalAlign: 'middle', position: 'relative', fontFamily: "'Montserrat', sans-serif"}}
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
                hintText="claimscollectionserv stage2"
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

        const style = {
            height: 70,
            width: 180,
            marginLeft: 30,
            marginTop: 19,
            textAlign: 'center',
            backgroundColor: '#393d42',
            color: '#ffffff',
            float: 'left',
            'border-radius': 5,
        };

        return (
            <div className="security-code-panel common">
                    <form className="form-inline" onSubmit={handleSubmit(handleFetch)}>

                        <div className="form-group col-sm-3 common">
                            {renderStageField()}
                        </div>

                        <div className="form-group col-sm-3">
                            {renderAccountField()}
                        </div>

                        <div className="form-group col-sm-2 pull-left security-code-btn">
                            {renderButton(this.props)}
                        </div>

                        <Paper style={style} zDepth={2} rounded={true}>
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