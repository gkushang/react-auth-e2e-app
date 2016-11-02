import Types from "../actions/types";

const initialState = {type: 'Sms', key: 'sms'};

export default function(state = initialState, action) {

    switch (action.type) {

        case Types.SECURITY_CODE_CHALLENGE_SELECTED :
            return action.payload;

        case Types.SECURITY_CODE_RECEIVED :
            return {...state, code: action.code};

        default :
            return state;
    }

}