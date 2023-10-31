import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {BASE_URL} from '../config';
const Signup = () => {
  const containerStyle1 = {
    backgroundColor: '#9a616d',
    minHeight: '140vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const cardStyle1 = {
    borderRadius: '1rem',
    display: 'flex',
    flexDirection: 'row',
    overflow: 'hidden',
  };

  const imageStyle1 = {
    height: '720px',
    width: '500px',
    borderRadius: '1rem 0 0 1rem',
  };

  const formStyle1 = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: ' 2rem',
    color: 'black',
  };

  const boxStyle1 = {
    border: '1px solid #ccc',
    borderRadius: '1rem',
    padding: '2rem',
    backgroundColor: 'white',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.3)',
    width: '900px',
    height: '720px',
  };

  const inputStyle2 = {
    marginBottom: '1rem',
    width: '81%',
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
  };

  const inputStyle1 = {
    marginBottom: '1rem',
    width: '73%',
    padding: '1rem',
    fontSize: '1rem',
    border: '1px solid black',
    borderRadius: '0.25rem',
  };

  const buttonStyle1 = {
    width: '80%',
    padding: '1rem',
    fontSize: '1rem',
    backgroundColor: 'black',
    color: 'white',
    borderRadius: '0.25rem',
    border: 'none',
    cursor: 'pointer',
  };

  const [username, setUsername] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [sport, setSport] = useState('');
  const [experience, setExperience] = useState(''); // Define userType and setUserType
  const navigate = useNavigate();

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
      experience===''
    ) {
      Swal.fire('Please fill in all fields','','warning');
    } else {
      try {
        const response = await fetch(`${ BASE_URL }/csign`, {
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
          // Registration successful, now navigate based on userType
          navigate('/coachlog');
        } else {
          const data = await response.json();
          console.error(data); // Log the error response to the console
          Swal.fire('An error occurred during registration','','error');
        }
      } catch (error) {
        console.error(error); // Log any unhandled exceptions to the console
        Swal.fire('An error occurred during registration','','error');
      }
    }
  };

  return (
    <div style={containerStyle1}>
      <div style={boxStyle1}>
        <div className="card" style={cardStyle1}>
          <div className="col-md-6 col-lg-7 d-none d-md-block">
            <img
              src="https://annaadarsh.edu.in/wp-content/uploads/2021/04/sport.png"
              alt="signup form"
              className="img-fluid"
              style={imageStyle1}
            />
          </div>
          <div className="col-md-7 col-lg-5 d-flex align-items-center">
            <div style={formStyle1}>
              <form onSubmit={handleSignup} className="signup">
                

                <div className="form-outline mb-4 custom-input">
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    style={inputStyle1}
                    required
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    style={inputStyle1}
                    required
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    style={inputStyle1}
                    required
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="text"
                    id="id"
                    name="id"
                    style={inputStyle1}
                    required
                    placeholder="User ID"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    style={inputStyle1}
                    required
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    style={inputStyle1}
                    required
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    style={inputStyle1}
                    required
                    placeholder="Contact Number"
                    value={contactNumber}
                    onChange={(e) => setContactNumber(e.target.value)}
                  />
                </div>
                <div className="form-outline mb-4 custom-input">
                <select
                    id="sport"
                    name="sport"
                    style={inputStyle2}
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
                <div className="form-outline mb-4 custom-input">
                <input
          type="text"
          name="experience"
          id="experience"
          style={inputStyle1}
          placeholder='Experience'
          value={experience}
          onChange={(e)=>setExperience(e.target.value)}
          required
        /></div>
                <div className="pt-1 mb-4">
                  <button style={buttonStyle1} type="submit">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
