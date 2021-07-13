import React from 'react';
import { Link } from 'react-router-dom';

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
  <div className='nav-bar'>
    <Link to="/" ><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/atoz_logo.png" alt="AtoZ" className='logo'/></Link>
    <div className='searchTool'>
      <input type="text" placeholder='search bar' className='searchBar'/>
      <button className='searchButton'><img src="" alt="search" /></button>
    </div>
    <div className='navEnd'>
      {currentUser ? welcoming() : navbar()}
      <div className='navCartButton'>
        <button >Cart</button>
      </div>
    </div>
  </div>)

  // return currentUser ? welcoming() : navbar();
};


export default Greeting;
