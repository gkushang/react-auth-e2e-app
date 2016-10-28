import Types from './types';
import popUser from '../../service/popUser';
import securityCode from '../../service/securityCode';

export function selectChallenge(challenge) {
    return (dispatch) => {

        const updateUser = (user) => {
            user.data.challenge = challenge;
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

    return (dispatch) => {
        securityCode({
            challenge,
            params
        }).then(function(code) {
            console.log('Fetch Security Code. CODE IS ', code);
            dispatch({
                type: Types.SECURITY_CODE_CHALLENGE_FETCH,
                code
            })
        })

    }
}
