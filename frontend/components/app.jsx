import React from 'react';
import { HashRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Items_container from './items/items_container';
import Item_container from './items/item_container';
import Nav from './nav';

//containing routes and render the correct info 
const App = () => (
    <div className='mainPage'>
        <Nav/>
        <Route exact path='/' component={Items_container}/>
        <Route exact path='/items/:itemId' component={Item_container}/>
    </div>
);

export default App;
