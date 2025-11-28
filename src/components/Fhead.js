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
          <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-vector%2Flogin-logo&psig=AOvVaw1Kz74q_LPU50LVfn0q2Uig&ust=1764422393284000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNCgmeL3lJEDFQAAAAAdAAAAABAE" alt="Login" />
          <span className="tooltiptext" style={{fontFamily: "Footlight MT Light"}}>Login</span>
        </Link>
      </div>
      
    </header>
  );
}

export default Fhead;
