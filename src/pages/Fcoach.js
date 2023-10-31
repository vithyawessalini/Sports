
// Import your JSON data
import Fside from '../components/Fside';
import Fhead from '../components/Fhead';
import React, { useState, useEffect } from 'react';
import {BASE_URL} from '../config';

  const Fcoach = () => {
    const [selectedCoach, setSelectedCoach ] = useState(null);
    const [coaches, setCoaches] = useState([]);
    useEffect(() => {
      // Fetch coaches' data when the component mounts
      fetch(`${ BASE_URL }/get-coaches`)
        .then((response) => response.json())
        .then((data) => setCoaches(data))
        .catch((error) => console.error('Error fetching coaches:', error));
    }, []);
  
    const handleCoachClick = (coachId) => {
      const coach = coaches.find((coach) => coach.id === coachId);
      setSelectedCoach(coach);
    };
  
  return (
    <div className="app">
      <Fside />
        <div className="app-main">
       <Fhead />
       <div className="teamd">
          <div className="teamdetails">
      <h1 style={{fontFamily: "Footlight MT Light"}}>Coaches</h1>
      <div className="teams-container">
        <div className="teams-list">
          
          {coaches.map((coach) => (
        <div key={coach.id } onClick={() => handleCoachClick(coach.id)} className="team-item" >
          <h2>{coach.firstName}</h2>
          
        </div>
      ))}
        </div><br></br>
       
        <div className="selected-team">
          {selectedCoach && (
            <div>
              <h2>{selectedCoach.name}</h2><br></br>
              <p><strong>Team:</strong> {selectedCoach.sport}</p>
          <p><strong>Experience:</strong> {selectedCoach.experience}</p>
            </div>
          )}
        </div>
      </div>
    </div></div></div></div>
  );
};


export default Fcoach;
