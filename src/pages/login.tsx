import React, {Component, Dispatch} from "react";
import {RouteComponentProps} from "react-router";
import {connect} from "react-redux";
import {AppState} from "../store";
import {LoginActions, setEmail} from "../store/login/actions";

interface PropsFromState {
    email: string;
    onEmailChange: (email: string) => void;
}

type ComponentProps = PropsFromState & RouteComponentProps;

class Login extends Component<ComponentProps> {
    render() {
        const {onEmailChange, email} = this.props;

        return (

            <div>
                HELLO THIS IS LOGIN PAGE! <br/>
                <input type="text" placeholder="email" onChange={event => onEmailChange(event.target.value) } value={email}/> <br/>
                <input type="password" placeholder="password"/> <br/>
            </div>
        )
    }
};

const mapStateToProps = (state: AppState) => {
    return {
        email: state.login.email
    }
};

const mapDispatchToProps = (dispatch: Dispatch<LoginActions>) => {
    return {
        onEmailChange: (email: string) => dispatch(setEmail(email))
    }
};

export const LoginPage = connect(mapStateToProps, mapDispatchToProps)(Login);