import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchBar';

const Greeting = ({ currentUser, logout }) => {
  const navbar = () => (
    <div className='dropdown'>
      <div className='header-name'>
        <span className="name">Welcome to my page, </span>
        <div className='headerName'>Log in</div>
      </div>
      <div className='dropdownGreetingButton'>
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
      <div className='dropdownGreetingButton'>
        <button className="loginButton" onClick={logout}>Log Out</button>
      </div>
    </div>
  );
  
  return (
    <div className='navBar'>
      {/* <div className='nav-bar'> */}
        <div className='navLeft'>
          <Link to="/" ><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/atoz_logo.png" alt="AtoZ" className='logo'/></Link>
        </div>
        <SearchBar/>
        <div className='navEnd'>
          {currentUser ? welcoming() : navbar()}
          <div className='navCartButton'>
            <Link to='/cart' className='shoppingCart'>
              <img 
                src="https://atoz-seeds.s3.us-east-2.amazonaws.com/carticon_by_skydragon.png" 
                alt="Cart" 
                className='shoppingCartIcon'
              />
              <div className='shoppingCartText'>0</div>
            </Link>
          </div>
        </div>
      {/* </div> */}
    </div>
  )
  // return currentUser ? welcoming() : navbar();
};


export default Greeting;
