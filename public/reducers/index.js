import { combineReducers, createStore } from 'redux';
import ChallengesReducer from './challenges-reducer';
import UserReducer from './user-reducer';
import SecurityCodeReducer from './security-code-reducer';
import LoaderReducer from './loader-reducer';


import { reducer as form } from 'redux-form';

const reducers = {
    challengesList: ChallengesReducer,
    securityCodeList: ChallengesReducer,
    user: UserReducer,
    securityCodeChallenge: SecurityCodeReducer,
    securityCodeFetched: SecurityCodeReducer,
    isLoading: LoaderReducer,
    form
};

export default combineReducers(reducers);

