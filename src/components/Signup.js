import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {BASE_URL} from '../config';
const Signup = () => {
  const containerStyle1 = {
    backgroundColor: '#9a616d',
    minHeight: '125vh',
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
    height: '580px',
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
    height: '590px',
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
  const navigate = useNavigate();
  const handleSignup = async (e) => {
    e.preventDefault();
    if (
      username === '' ||
      email === '' ||
      password === '' ||
      contactNumber === '' ||
      firstName === '' ||
      lastName === ''
    ) {
      Swal.fire('Please fill in all fields','','error');
    } else {
      try {
        const response = await fetch(`${ BASE_URL }/signup`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            
            username,
            email,
            password,
            contactNumber,
            firstName,
            lastName,
          }),
        });

        if (response.ok) {
          // Registration successful, now navigate
          navigate('/adminlog');
        } else {
          const data = await response.json();
          console.error(data);
          Swal.fire('An error occurred during registration','','error');
        }
      } catch (error) {
        console.error(error);
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
