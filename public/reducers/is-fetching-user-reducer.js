import Types from '../actions/types';

export default function(state = false, action) {

  switch (action.type) {

      case Types.USER_FETCH_REQUEST:
            return true;

      case Types.USER_FETCHED :
          return false;

        default :
            return state;
    }

}