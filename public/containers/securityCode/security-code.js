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
                style={{margin: 2, marginLeft: 20, display: 'inline-block'}}
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
            this.props.fetchSecurityCode(this.props.securityCodeChallenge, params);
        };

        const style = {
            height: 70,
            width: 190,
            marginLeft: 0,
            marginTop: 19,
            textAlign: 'center',
            color: '#ffffff',
            float: 'left',
            'border-radius': 5,
        };

        const paperStyle = {
            'margin-left': 60,
            float: 'left',
            textAlign: 'center',
            backgroundColor: 'transparent',
            color: '#ffffff',
            borderRadius: 5,
            width: "70%",
            height: 100,
            };

        return (
            <div className="security-code-panel row common">
                <Paper style={paperStyle} zDepth={0} rounded={true}>

                    <form className="form-inline" onSubmit={handleSubmit(handleFetch)}>

                        <div className="form-group col-lg-pull-3 common pull-left blue">
                            {renderStageField()}
                        </div>

                        <div className="form-group col-lg-3 pink">
                            {renderAccountField()}
                        </div>

                        <div className="form-group col-lg-2 pull-left security-code-btn blue">
                            {renderButton(this.props)}
                        </div>

                        <div className="form-group col-lg-3 pink pull-right">
                        <Paper style={style} zDepth={1} rounded={true} className="">
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