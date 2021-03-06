import Types from "./types";
import user from "../../service/user/user";
import securityCode from "../../service/securityCode/fetchCode";

const dispatchUserFetchRequest = (dispatch) => {
    dispatch({
        type: Types.USER_FETCH_REQUEST,
        isFetchingUser: true
    });
};

const dispatchUserFetchedAction = (dispatch) => {
    return (user) => {
        dispatch({
            type: Types.USER_FETCHED,
            user
        })
    }
};

export const popUser = (challenge) => {

    return (dispatch) => {

        dispatchUserFetchRequest(dispatch);

        return user.pop(challenge)
            .then(dispatchUserFetchedAction(dispatch))
            .catch(dispatchUserFetchedAction(dispatch));
    }
};

export const createUser = (challenge) => {
    return (dispatch) => {

        dispatchUserFetchRequest(dispatch);

        return user.create(challenge)
            .then(dispatchUserFetchedAction(dispatch))
            .catch(dispatchUserFetchedAction(dispatch));
    }
};

export const selectSecurityCodeChallenge = (securityCodeChallenge) => {
    return {
        type: Types.SECURITY_CODE_CHALLENGE_SELECTED,
        payload: securityCodeChallenge
    }
};

export const fetchSecurityCode = (challenge, params) => {
    return (dispatch) => {

        dispatch({
            type: Types.SECURITY_CODE_REQUEST_TO_FETCH,
            isFetchingCode: true
        });

        const handleNetworkError = (code) => {
            if (!code) {
                code = {
                    Error: code
                };
            }

            return code;
        };

        const dispatchAction = (code) => {

            code = handleNetworkError(code);

            dispatch({
                type: Types.SECURITY_CODE_RECEIVED,
                code: code.data ? code.data : code
            })
        };

        securityCode({challenge, params})
            .then(dispatchAction)
            .catch(dispatchAction)
    }
};
