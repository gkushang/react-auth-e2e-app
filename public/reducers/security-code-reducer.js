import Constants from '../actions/types';

export default function(state = {
    type: 'Sms',
    key: 'sms'}, action) {

  switch (action.type) {

        case Constants.SECURITY_CODE_CHALLENGE_SELECTED :
            return action.payload;

        case Constants.SECURITY_CODE_CHALLENGE_FETCH :
              return action.payload;

        default :
            return state;
    }

}