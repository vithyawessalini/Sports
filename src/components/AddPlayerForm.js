import React, { useState } from 'react';
import Swal from 'sweetalert2';
import {BASE_URL} from '../config';
function AddPlayerForm({ onAddPlayer, playerId, onClose }) {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sport, setSport] = useState('');
  const [position, setPosition] = useState('');
  const [age, setAge] = useState(''); // Add age state
  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      username === '' ||
      id === '' ||
      email === '' ||
      password === '' ||
      contactNumber === '' ||
      firstName === '' ||
      lastName === '' ||
      sport === '' ||
      position === '' ||
      age === ''
    ) {
      Swal.fire('Please fill in all fields','','warning');
    } else {
      try {
        const response = await fetch(`${ BASE_URL }/addplayer`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            id,
            email,
            password,
            contactNumber,
            firstName,
            lastName,
            sport,
            position,
            age,
          }),
        });
  
        if (response.ok) {
          // Registration successful
          Swal.fire('Player added successfully','','success');
          setUsername('');
    setId('');
    setEmail('');
    setPassword('');
    setContactNumber('');
    setFirstName('');
    setLastName('');
    setSport('');
    setPosition('');
    setAge('');
        } else {
          const data = await response.json();
          if (response.status === 409) {
            // 409 Conflict status indicates that the ID already exists
            Swal.fire('Player with the same ID already exists','','warning');
          } else {
            console.error(data);
            Swal.fire('An error occurred during registration','','error');
          }
        }
      } catch (error) {
        console.error(error);
        Swal.fire('An error occurred during registration','','error');
      }
    } 
  };
  
  
  return (
    <form onSubmit={handleSignup}>
       
     
      <div className="modal">
        <div className="modal-content">
          <span className="close2" onClick={onClose}>&times;</span> {/* Close button */}
          <br />
      <div className="scrollable-form">
        
      <label>
        Player ID:&nbsp; &nbsp;
        <input
          type="text"
          name="id"
          value={id}
                    onChange={(e) => setId(e.target.value)}
          required
        />
      </label>
      <label>
        First Name:&nbsp;
        <input
          type="text"
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </label>
      <label>
        Last Name:&nbsp;
        <input
          type="text"
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </label>
      <label>
        Age&emsp;&emsp;&nbsp;&nbsp;: &nbsp;
        <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>

      {/* Add additional fields here */}
      <label>
        Username:&nbsp;
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </label>
      <label>
        Email:&nbsp;
        <input
          type="text"
          name="email"
          value={email}
                    onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Password:&nbsp;
        <input
          type="password"
          name="password"
          value={password}
                    onChange={(e) => setPassword(e.target.value)}
          required
        />
      </label>
      <label>
        Contact Number:&nbsp;
        <input
          type="text"
          name="contactNumber"
          value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
          required
        />
      </label>

      <label>Sport
          <select
            id="sport"
            name="sport"
            
            required
            value={sport}
            onChange={(e) => setSport(e.target.value)}
          >
            <option value="">Select Sport</option>
            <option value="Football">Football</option>
            <option value="Basketball">Basketball</option>
            <option value="Tennis">Tennis</option>
            <option value="Baseball">Baseball</option>
            <option value="Volleyball">Volleyball</option>
            <option value="Hockey">Hockey</option>
            <option value="Cricket">Cricket</option>
            <option value="Swimming">Swimming</option>
          </select>
          </label>
      <label>
        Position:&nbsp;
        <input
          type="text"
          name="position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
      </label>
      <button type="submit">Add Player</button>
      </div></div></div>
    </form>
  );
}

export default AddPlayerForm;
