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

        const { handleSubmit } = this.props;

        const renderCode = (retrievedCode, isLoading) => {

            console.log('code ere ', retrievedCode);

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
                className="raised-button pull-left"
                labelStyle={{'font-size' : 13, color: 'lightgray',  fontFamily: "'Montserrat', sans-serif"}}
                primary={true}
                type="submit"
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
                placeholder="Account # or Email"
                type="tel"
                component={Input}
            />
            );

        const handleFetch = (params) => {
            this.props.fetchSecurityCode(this.props.securityCodeChallenge, params);
        };

        const style = {
            height: 70,
            width: "100%",
            marginTop: 15,
            textAlign: 'center',
            color: '#ffffff',
            float: 'left',
            'border-radius': 5,
            backgroundColor: 'transparent'
        };

        const paperStyle = {
            'margin-left': 60,
            float: 'left',
            textAlign: 'center',
            backgroundColor: 'transparent',
            color: '#ffffff',
            borderRadius: 5,
            width: "75%"
            };

        return (
            <div className="security-code-panel row common">
                <Paper style={paperStyle} zDepth={0} rounded={true}>

                    <form className="form-inline" onSubmit={handleSubmit(handleFetch)}>

                        <div className="form-group col-lg-3 col-md-6 pull-left common blue">
                            {renderStageField()}
                        </div>

                        <div className="form-group col-lg-4 col-md-6 pink">
                            {renderAccountField()}
                        </div>

                        <div className="form-group col-lg-3 col-md-6 security-code-btn blue">
                            {renderButton()}
                        </div>

                        <div className="form-group col-lg-2 col-md-6 pink pull-right">
                        <Paper style={style} zDepth={2} rounded={true} className="">
                            {renderCode(this.props.securityCodeFetched, this.props.isLoading)}
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