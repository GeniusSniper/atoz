import React from 'react';
import { HashRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting_container from './greeting/greeting_container';
import Signup_form_container from './session_form/signup_form_container';
import Login_form_container from './session_form/login_form_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Items_container from './items/items_container';
import Item_container from './items/item_container';

//containing routes and render the correct info 
const App = () => (
    <>
    <header className='header'>
        <Link to="/"><img src="" alt="AtoZ" /></Link>
        <Route exact path='/' component={Greeting_container}/>
    </header>
    <Route exact path='/' component={Items_container}/>
    <Route exact path='/items/:Itemid' component={Item_container}/>
    <Switch>
        <AuthRoute exact path='/login' component={Login_form_container}/>
        <AuthRoute exact path='/signup' component={Signup_form_container}/>
    </Switch>
    </>
);

export default App;
