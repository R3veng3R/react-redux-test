import {combineReducers, createStore} from "redux";
import {reducer as appReducer} from "../reducers";
import {loginReducer} from "./login/reducer";

const reducers = combineReducers({
    app: appReducer,
    login: loginReducer
});

export type AppState = ReturnType<typeof reducers>;
export const store = createStore(reducers);