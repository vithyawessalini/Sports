
import { Link } from 'react-router-dom';
import React,{useState,useEffect} from 'react';
const Cside = () => {
  const [user, setUser] = useState(null);

useEffect(() => {
  // Fetch user details from the server using the JWT token
  const token = localStorage.getItem('token');
  if (token) {
    fetch('/getprofile1', {
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
      <Link to="/cdash" className="sidebar-link">Dasboard</Link>
      <Link to="/cevents" className="sidebar-link">Events</Link>
      <Link to="/cteams" className="sidebar-link">Teams</Link>
      <Link to="/cplayer" className="sidebar-link">Players</Link>
      <Link to="/calender" className="sidebar-link">Calender</Link>
      <Link to="/practise" className="sidebar-link">Practice</Link>
    </div>
  );
};

export default Cside;
