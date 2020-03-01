import {LoginEvents} from "./type";
import {action} from "typesafe-actions";

export type LoginActions = {
    type: LoginEvents,
    payload: any;
}


export const setEmail = (email: string) => action(LoginEvents.SET_EMAIL, email);