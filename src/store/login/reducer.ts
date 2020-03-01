import {LoginEvents} from "./type";
import {LoginActions} from "./actions";

const initState: IState = {
    email: ""
};

export interface IState {
    email: string;
}

export const loginReducer = (state: IState = initState, action: LoginActions): IState  => {
    switch (action.type) {

        case LoginEvents.SET_EMAIL:
            return {...state, email: action.payload};

        default:
            return state;
    }
};