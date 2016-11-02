import Types from './types';
import popUser from '../../service/popUser';
import createUser from '../../service/createUser';
import securityCode from '../../service/securityCode';

export function selectChallenge(challenge) {
    return (dispatch) => {

        dispatch({
            type: Types.USER_FETCH_REQUEST,
            isFetchingUser: true
        });

        const updateUser = (user) => {
            user.data.challenge = challenge;

            if(user.data.creditcard) {
                user.data.creditcard.map(function(creditCard) {
                    if(creditCard.cardType === 'Discover') {
                        user.data.discover = creditCard
                    }

                    if(creditCard.cardType === 'Visa') {
                        user.data.visa = creditCard
                    }

                    if(creditCard.cardType === 'Master') {
                        user.data.master = creditCard
                    }

                    if(creditCard.cardType === 'Amex') {
                        user.data.amex = creditCard
                    }

                })
            }

            return user.data;
        };

        const dispatchAction = (user) => {
            dispatch({
                type: Types.USER_FETCHED,
                user
            })
        };

        return popUser(challenge)
            .then(updateUser)
            .then(dispatchAction)
            .catch(dispatchAction)
    }
}

export function selectSecurityCodeChallenge(securityCodeChallenge) {
    return {
        type: Types.SECURITY_CODE_CHALLENGE_SELECTED,
        payload: securityCodeChallenge
    }
}

export function fetchSecurityCode(challenge, params) {
    return (dispatch) => {

        dispatch({
            type: Types.SECURITY_CODE_REQUEST_TO_FETCH,
            isLoading: true
        });

        const dispatchAction = (code) => {

            code = {
                Error: code
            };

            dispatch({
                type: Types.SECURITY_CODE_RECEIVED,
                code: code.data ? code.data : code
            })
        };

        securityCode({challenge, params})
            .then(dispatchAction)
            .catch(dispatchAction)
    }
}

export function createNewUser(challenge) {
    return (dispatch) => {

        dispatch({
            type: Types.USER_FETCH_REQUEST,
            isFetchingUser: true
        });

        const updateUser = (user) => {
            console.log('user created: ', user);

            user.data.challenge = challenge;

            if(user.data.creditcard) {
                user.data.creditcard.map(function(creditCard) {
                    if(creditCard.cardType === 'Discover') {
                        user.data.discover = creditCard
                    }

                    if(creditCard.cardType === 'Visa') {
                        user.data.visa = creditCard
                    }

                    if(creditCard.cardType === 'Master') {
                        user.data.master = creditCard
                    }

                    if(creditCard.cardType === 'Amex') {
                        user.data.amex = creditCard
                    }

                })
            }

            console.log('user.data created: ', user.data);

            return user.data;
        };

        const dispatchAction = (user) => {
            dispatch({
                type: Types.USER_FETCHED,
                user
            })
        };

        return createUser(challenge)
            .then(updateUser)
            .then(dispatchAction)
            .catch(dispatchAction)
    }
}