import Types from '../actions/types';

export default function(state = {
    type: 'Sms',
    key: 'sms'}, action) {

    console.log('action: ', action);

  switch (action.type) {

        case Types.SECURITY_CODE_CHALLENGE_SELECTED :
            return action.payload;

      case Types.SECURITY_CODE_CHALLENGE_FETCH :
              return {...state, code: action.code };

        default :
            return state;
    }

}