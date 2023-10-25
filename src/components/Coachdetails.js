import React from 'react';

function CoachDetails({ coach, onClose }) {
  return (
    <div>
      <h2 style={{fontFamily: "Footlight MT Light"}}>Coach Details</h2>
      <p><strong>ID:</strong> {coach.id}</p>
      <p><strong>Name:</strong> {coach.name}</p>
     
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default CoachDetails;
