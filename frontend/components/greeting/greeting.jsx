import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  const navbar = () => (
    <>
      <Link to="/" ><img src="" alt="AtoZ" className='logo'/></Link>
      <nav className="login-signup">
        <Link to="/login">Login</Link>
        &nbsp;&nbsp;
        <Link to="/signup">Sign up</Link>
      </nav>
    </>
  );
  const welcoming = () => (
    <>
      <Link to="/" ><img src="" alt="AtoZ" className='logo'/></Link>
      <div className="header-tag">
        <h2 className="header-name">Good night, {currentUser.username}!</h2>
        {/* {console.log(currentUser)} */}
        <button className="header-button" onClick={logout}>Log Out</button>
      </div>
    </>
  );

  return currentUser ? welcoming() : navbar();
};


export default Greeting;
