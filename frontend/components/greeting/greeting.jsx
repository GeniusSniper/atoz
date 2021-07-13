import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const navbar = () => (
    <div className='login-bar'>
      <Link to="/login" className='login'>You havn't login yet Click Here</Link>
    </div>
  );
  const welcoming = () => (
    <div className="header-tag">
      <h2 className="header-name">Welcome to my page {currentUser.username}</h2>
      <button className="header-button" onClick={logout}>Log Out</button>
    </div>
  );
  
  return (
  <div className='nav-bar'>
    <Link to="/" ><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/atoz_logo.png" alt="AtoZ" className='logo'/></Link>
    <input type="text" placeholder='search bar' className='searchBar'/>
    {currentUser ? welcoming() : navbar()}
  </div>)

  // return currentUser ? welcoming() : navbar();
};


export default Greeting;
