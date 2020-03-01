import React from "react";
import {Route, Switch} from "react-router-dom";
import {LoginPage} from "../pages/login";

// const ProtectedRoute: React.FC<RouteProps> = props => {
//     return isAuthenticated()
//         ? <Route {...props} />
//         : <Redirect to="/login" />
// };

export const Routes: React.FC<{}> = () => {
    return (
        <Switch>
            <Route exact path="/login" component={LoginPage}/>

        </Switch>
    );
};