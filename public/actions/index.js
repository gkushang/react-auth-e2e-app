import Constants from '../helpers/contants';
import popUser from '../../service/popUser';
import faker from 'faker';

export function selectChallenge(challenge) {
    return (dispatch) => {

        const updateUser = (user) => {
            user.data.challenge = challenge;
            return user.data;
        };

        const dispatchAction = (user) => {
            dispatch({
                type: Constants.CHALLENGE_SELECTED,
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
        type: Constants.SECURITY_CODE_CHALLENGE_SELECTED,
        payload: securityCodeChallenge
    }
}

export function fetchSecurityCode(securityCodeChallenge, params) {

    //fetch code for securityCodeChallenge.type & account stage from params;

    var code = {
        code: faker.random.number(9999),
        error: faker.random.number(9999)
    };

    return {
        type: Constants.SECURITY_CODE_CHALLENGE_FETCH,
        payload: code
    }
}
