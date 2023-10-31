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
          <img src="https://cdn.icon-icons.com/icons2/2098/PNG/64/log_out_icon_128821.png"alt="Logout"/>
          <span className="tooltiptext">Logout</span>
        </Link>
      </div>
    </header>
  );
}
export default Header;
