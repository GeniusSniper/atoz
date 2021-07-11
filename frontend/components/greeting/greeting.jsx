import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const navbar = () => (
    <div className='nav-bar'>
      <Link to="/" ><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/atoz_logo.png" alt="AtoZ" className='logo'/></Link>
      <div className='login-bar'>
        <Link to="/login" className='login'>You havn't login yet Click Here</Link>
      </div>
    </div>
  );
  const welcoming = () => (
    <div className='nav-bar'>
      <Link to="/" ><img src="https://atoz-seeds.s3.us-east-2.amazonaws.com/atoz_logo.png" alt="AtoZ" className='logo'/></Link>
      <div className="header-tag">
        <h2 className="header-name">Welcome to my page {currentUser.username}</h2>
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </div>
  );

  return currentUser ? welcoming() : navbar();
};


export default Greeting;
