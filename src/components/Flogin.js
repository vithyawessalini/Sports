import React from 'react';
import { Link } from 'react-router-dom';

import image3 from '../images/playlog.png';

const Flogin = () => {
  const backgroundImageURL = 'url("https://img.freepik.com/premium-photo/3d-football-object-design-realistic-rendering-abstract-futuristic-background-3d-illustration-motion-geometry-concept-sport-competition-graphic-tournament-game-bet-content-soccer-ball-element_262243-1044.jpg?w=900")';

  const containerStyle = {
    background: backgroundImageURL,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  const imageContainerStyle = {
    textAlign: 'center',
    padding:'10px',
  };
  const roundedImageStyle = {
    borderRadius: '50%', // Rounded border
    backgroundColor: 'white',
    width: '156px', // Adjust the size as needed
    height: '150px', // Must be the same as the width to create a perfect circle
    padding:'8px'
   // Maintain aspect ratio
  };
  return (
    <div style={containerStyle}>
      <div className="image1">
        <div className="image-container1">
        <div style={imageContainerStyle}>
          <Link to="/adminlog" style={{ textDecoration: 'none' }}>
            <img src="https://icons.veryicon.com/png/o/miscellaneous/yuanql/icon-admin.png" alt="Admin"style={roundedImageStyle} />
            <h1 style={{ padding: '20px' }}>Admin</h1>
          </Link>
          </div>
          <div style={imageContainerStyle}>
          <Link to="/coachlog" style={{ textDecoration: 'none' }}>
            <img src="https://uxwing.com/wp-content/themes/uxwing/download/sport-and-awards/coach-instructor-icon.png" alt="Coach"style={roundedImageStyle} />
            <h1 style={{ padding: '20px' }}>Coach</h1>
          </Link>
          </div>
          <div style={imageContainerStyle}>
            <Link to="/playerlog" style={{ textDecoration: 'none' }}>
              <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQiqG6nLNbXVpqWjTZp0W_pSFEpp3kD4Bt6MjjKxyDN_OEkRvyF" alt="Player" style={roundedImageStyle}/>
              <h1 style={{ padding: '20px' }}>Player</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Flogin;
