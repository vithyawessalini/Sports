import React from 'react';
import { Link } from 'react-router-dom';

const Fside = () => {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-link">Home</Link>
      <Link to="/fabout" className="sidebar-link">About Us</Link>
      <Link to="/fcoach" className="sidebar-link">Coach</Link>
      <Link to="/fteam" className="sidebar-link">Teams</Link>
      <Link to="/vgallery" className="sidebar-link">Gallery</Link>
      <Link to="/fcont" className="sidebar-link">ContactUs</Link>
    </div>
  );
};

export default Fside;
