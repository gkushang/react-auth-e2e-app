import Constants from '../helpers/contants';

export default function(state = {type: 'Sms'}, action) {
  switch (action.type) {

        case Constants.SECURITY_CODE_CHALLENGE_SELECTED :
            return action.payload;

        case Constants.SECURITY_CODE_CHALLENGE_FETCH :
              return action.payload;

        default :
            return state;
    }

}