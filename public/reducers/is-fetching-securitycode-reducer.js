import Types from "../actions/types";

export default function(state = false, action) {

    switch (action.type) {

        case Types.SECURITY_CODE_REQUEST_TO_FETCH:
            return true;

        case Types.SECURITY_CODE_RECEIVED :
            return false;

        default :
            return state;
    }

}