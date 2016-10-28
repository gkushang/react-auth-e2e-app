import Constants from '../actions/types';

export default function(state = null, action) {

    switch (action.type) {

        case Constants.CHALLENGE_SELECTED :
            return (action.error ? action.error : action.user);

        default :
            return state;
    }

}