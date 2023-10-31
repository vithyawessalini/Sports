
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
import {BASE_URL} from '../config';
const Aside = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Fetch user details from the server using the JWT token
    const token = localStorage.getItem('token');
    if (token) {
      fetch(`${ BASE_URL }/getprofile2`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setUser(data);
        })
        .catch((error) => {
          console.error('Error fetching user details:', error);
        });
    }
  }, []);
  return (
    <div className="sidebar">
      {user && (
        <div>
          &emsp;<p style={{color:'#ffcbcb'}}>Hi {user.username}!</p>
         
          {/* Add more user details here */}
        </div>
      )}<br></br>
      <Link to="/adash" className="sidebar-link">Dasboard</Link>
      <Link to="/ahome" className="sidebar-link">Home</Link>
      <Link to="/aevents" className="sidebar-link">Events</Link>
      <Link to="/ateams" className="sidebar-link">Teams</Link>
      <Link to="/aplayers" className="sidebar-link">Players</Link>
      <Link to="/acoach" className="sidebar-link">Coach</Link>
      <Link to="/acalender" className="sidebar-link">Calender</Link>
      <Link to="/apractise" className="sidebar-link">Practice</Link>
    </div>
  );
};

export default Aside;
