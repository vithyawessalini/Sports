import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {BASE_URL} from '../config';
function EventRegistrationForm({ event, onClose }) {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [registrationError, setRegistrationError] = useState(null); // State to store registration error

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${ BASE_URL }/register-for-event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          eventId: event._id, // Use event._id instead of event.id
          id,
          name,
          email,
        }),
      });

      if (response.ok) {
        // Registration successful
        console.log('Registration successful');
        onClose(); // Close the form or perform other actions
      } else {
        // Handle registration errors here
        console.error('Registration failed');
        Swal.fire('Player is already registered for this event with the same ID');
      }
    } catch (error) {
      console.error('Registration error', error);
      Swal.fire('Internal server error');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="registration-form">
        <h2 style={{fontFamily: "Footlight MT Light"}}>Register for {event.name}</h2>
        {registrationError && <div className="error-message">{registrationError}</div>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>ID:</label>
            <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Name:</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="button-container">
            <button type="submit" className="register-button">Register</button>
            <button type="button" onClick={onClose} className="close-button1">
              <img src="https://cdn-icons-png.flaticon.com/128/2961/2961937.png" alt='close' className='close'></img>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventRegistrationForm;
