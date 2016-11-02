import {combineReducers, createStore} from "redux";
import ChallengesReducer from "./challenges-reducer";
import UserReducer from "./user-reducer";
import SecurityCodeReducer from "./security-code-reducer";
import IsFetchingSecurityCodeReducer from "./is-fetching-securitycode-reducer";
import IsFetchingUserReducer from "./is-fetching-user-reducer";
import {reducer as form} from "redux-form";

const reducers = {
    challengesList: ChallengesReducer,
    securityCodeList: ChallengesReducer,
    user: UserReducer,
    securityCodeChallenge: SecurityCodeReducer,
    securityCodeFetched: SecurityCodeReducer,
    isFetchingCode: IsFetchingSecurityCodeReducer,
    isFetchingUser: IsFetchingUserReducer,
    form
};

export default combineReducers(reducers);

