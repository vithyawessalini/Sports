import React from 'react';
import { Link } from 'react-router-dom';
import image from '../images/logo.png';
import image1 from '../images/login.png'
function Fhead() {
  return (
    <header className="header fixed-header">
      <div className="logo">
      <img src={image} alt="logo" />
      </div>
      <div className="profile-logo">
        <Link to="/flogin" className="tooltip">
          <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTWuqauS-JfGeLLEEUqzs9gxX76hmxd8JvRwpwccAwYUmpjm6P8" alt="Login" />
          <span className="tooltiptext" style={{fontFamily: "Footlight MT Light"}}>Login</span>
        </Link>
      </div>
      
    </header>
  );
}

export default Fhead;
