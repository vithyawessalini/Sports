import React, { useState } from 'react';
import Swal from 'sweetalert2';
const CoachForm = () => {
  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sport, setSport] = useState('');
  const [experience, setExperience] = useState(''); // Define userType and setUserType
 

  const [coachData, setCoachData] = useState({
    username: '',
    id,
    email: '',
    password: '',
    contactNumber: '',
    firstName: '',
    lastName: '',
    sport: '',
    experience:'',
  });

  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      username=== ''||
      id===''||
      email=== ''||
      password=== ''||
      contactNumber=== ''||
      firstName=== ''||
      lastName=== ''||
      sport=== ''||
      experience===''
    ) {
      Swal.fire('Please fill in all fields','','warning');
    } else {
      try {
        const response = await fetch('/addcoach', {
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
            experience,
          }),
        });
  
        if (response.ok) {
          // Registration successful
          Swal.fire('Coach added successfully','','success');
          setUsername('');
          setId('');
          setEmail('');
          setPassword('');
          setContactNumber('');
          setFirstName('');
          setLastName('');
          setSport('');
          setExperience('');
          
        } else {
          const data = await response.json();
          if (response.status === 409) {
            // 409 Conflict status indicates that the ID already exists
            Swal.fire('Coach with the same ID already exists','','warning');
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
      {/* Add form fields for all the coach data (e.g., username, email, password, etc.) */}
      <div>
      <div>
        <label>ID: </label>
        <input
                    type="text"
                    id="id"
                    name="id"
                    
                    required
                    placeholder="User ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
      </div>
        <label>Username:</label>
        <input
                    type="text"
                    id="username"
                    name="username"
                    
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  </div>
      <div>
      <label>Firstname:</label>
        <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
      </div>
      <div>
      <label>Lastname:</label>
      <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
      </div>
      <div>
        <label>Email:</label>
        <input
                    type="text"
                    id="email"
                    name="email"
                    
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
      </div>
      <div>
      <input
                    type="password"
                    id="password"
                    name="password"
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
      </div>
      
      <div>
        <label>Sport: </label>
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
      </div>
      <div><label>Contact number</label>
      <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
      </div>
      <div>
        <label>Experience: </label>
        <input
          type="text"
          name="experience"
          id="experience"
          value={experience}
          placeholder='Experience'
          onChange={(e)=>setExperience(e.target.value)}
          required
        />
      </div>
      {/* Add fields for other coach data */}
      <button type="submit">Save Coach</button>
    </form>
  );
};

export default CoachForm;

