import React from 'react';
import { Redirect, Route } from 'react-router';


const PrivateRoute = (props) => {
    const autenticado = false;

    if(autenticado){
        return ( <Route path={props.path} component={props.component}/> )
    } else {
        return ( <Redirect to="/auth/login"/> )
    }
}

export default PrivateRoute
