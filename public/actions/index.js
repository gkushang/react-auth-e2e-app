import Types from './types';
import popUser from '../../service/popUser';
import securityCode from '../../service/securityCode';

export function selectChallenge(challenge) {
    return (dispatch) => {

        const updateUser = (user) => {
            user.data.challenge = challenge;
            console.log('User: ', user);
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

            console.log('User: ', user);

            return user.data;
        };

        const dispatchAction = (user) => {
            dispatch({
                type: Types.CHALLENGE_SELECTED,
                user
            })
        };

        return popUser(challenge)
            .then(updateUser)
            .then(dispatchAction);
    }
}

export function selectSecurityCodeChallenge(securityCodeChallenge) {
    return {
        type: Types.SECURITY_CODE_CHALLENGE_SELECTED,
        payload: securityCodeChallenge
    }
}

export function fetchSecurityCode(challenge, params) {
    console.log('Fetch Security Code:  ', challenge, params);

    return (dispatch) => {

        dispatch({
            type: Types.SECURITY_CODE_REQUEST_TO_FETCH,
            isLoading: true
        });

        securityCode({
            challenge,
            params
        }).then(function(code) {
            dispatch({
                type: Types.SECURITY_CODE_RECEIVED,
                code: code.data
            })
        })

    }
}
