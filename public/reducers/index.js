import { combineReducers, createStore } from 'redux';
import ChallengesReducer from './challenges-reducer';
import UserReducer from './user-reducer';
import SecurityCodeReducer from './security-code-reducer';

import { reducer as form } from 'redux-form';

const reducers = {
    challengesList: ChallengesReducer,
    securityCodeList: ChallengesReducer,
    user: UserReducer,
    securityCodeChallenge: SecurityCodeReducer,
    securityCodeFetched: SecurityCodeReducer,
    form
};

export default combineReducers(reducers);

