import React, { useState, useEffect } from 'react';
import {BASE_URL} from '../config';
function EventList({ eventId, onClose }) {
  const [registeredPlayers, setRegisteredPlayers] = useState([]);

  useEffect(() => {
    // Fetch registered players for the event from the backend
    fetch(`${ BASE_URL }/get-registered-players?eventId=${eventId}`)
      .then((response) => response.json())
      .then((data) => {
        setRegisteredPlayers(data);
      })
      .catch((error) => console.error(error));
  }, [eventId]);

  return (
    <div>
      
      <div className="player-details-container">
        <div className="player-register">
          <p className="close-button" onClick={onClose}>
            <img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" alt='close' className='close' />
          </p>
          <h2 style={{fontFamily: "Footlight MT Light"}}>Registered Players</h2>
          {registeredPlayers.map((player, index) => (
            <ul>
            <li key={player._id}>
              {index + 1}. <strong>Player ID:</strong>{player.id}<br></br>
              &emsp;<strong>Player name:</strong>{player.name}<br></br>
            </li></ul>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventList;
