import React from 'react';
import { HashRouter, Link, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Items_container from './items/items_container';
import Item_container from './items/item_container';
import Nav from './nav';
import ReviewFormContainer from './review/new_review_form_container';
import EditFormContainer from './review/edit_review_form_container';
import search_container from './search/search_container';
import Footer from './footer';
import NotFound from './notFound';
import cart_container from './cart/cart_container';

//containing routes and render the correct info 
const App = () => (
    <div className='mainPage'>
        <Nav/>
        <Switch>
            <Route exact path='/' component={Items_container}/>
            <Route exact path='/items/:itemId' component={Item_container}/>
            <ProtectedRoute exact path='/items/:itemId/review/new' component={ReviewFormContainer}/>
            <ProtectedRoute exact path='/items/:itemId/:reviewId/edit' component={EditFormContainer}/>
            <Route exact path='/search/:keyword' component={search_container}/>
            <Route path='/cart' component={cart_container}></Route>
            <Route path='/' component={NotFound}></Route>
        </Switch>
        <Footer/>        
    </div>
);

export default App;
