import React from 'react';
import { Link } from 'react-router-dom';
import '../style.css';
import image from '../images/logo.png';
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={image} alt="logo" />
      </div>
      <div className="profile-logo1">
        <Link to="/" className="tooltip">
          <img src="https://www.vecteezy.com/vector-art/6692324-vector-logout-icon-template-black-color-editable-log-out-icon-symbol-flat-vector-illustration-for-graphic-and-web-design"alt="Logout"/>
          <span className="tooltiptext">Logout</span>
        </Link>
      </div>
    </header>
  );
}
export default Header;
