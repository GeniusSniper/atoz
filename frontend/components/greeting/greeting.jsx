import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';

const Greeting = ({ currentUser, logout }) => {
  const navbar = () => (
    <div className='dropdown'>
      <span className="header-name">Welcome to my page, Sign in</span>
      <div className='dropdown-greetingButton'>
        <Link to="/login" className='header-button'><button className='loginButton'>Log in</button></Link>
        <br />
        <span className='signUP'>New customer?
          <Link to="/signup" className='signupButton'>Start here.</Link>
        </span>
      </div>
    </div>
  );
  const welcoming = () => (
    <div className="dropdown">
      <span className="header-name">Welcome to my page, {currentUser.username}</span>
      <div className='dropdown-greetingButton'>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </div>
  );
  
  return (
    <div className='navBar'>
      <div className='nav-bar'>
        <Link to="/" ><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/atoz_logo.png" alt="AtoZ" className='logo'/></Link>
        <div>
          <SearchBar/>
        </div>
        <div className='navEnd'>
          {currentUser ? welcoming() : navbar()}
          <div className='navCartButton'>
            <Link to='/cart' className='shoppingCart'><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/carticon_by_skydragon.png" alt="Cart" className='shoppingCartIcon'/><p className='shoppingCartText'>Cart</p></Link>
          </div>
        </div>
      </div>
    </div>
  )
  // return currentUser ? welcoming() : navbar();
};


export default Greeting;
