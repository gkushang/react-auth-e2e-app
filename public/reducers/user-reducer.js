import Constants from '../actions/types';

export default function(state = null, action) {

    console.log('user reducer action:: ', action);

    switch (action.type) {

        case Constants.USER_FETCHED :
            return (action.error ? action.error : action.user);

        default :
            return state;
    }

}