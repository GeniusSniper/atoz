import React from 'react';
import { HashRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting_container from './greeting/greeting_container';
import Signup_form_container from './session_form/signup_form_container';
import Login_form_container from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

//containing routes and render the correct info 
const App = () => (
    <>
    <header>
        <Link to="/"><img src="" alt="AtoZ" /></Link>
    </header>
    <Greeting_container/>
    <Switch>
        <AuthRoute exact path='/login' component={Login_form_container}/>
        <AuthRoute exact path='/signup' component={Signup_form_container}/>
    </Switch>
    </>
);

export default App;
