import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [user, setUser] = useState(null);

useEffect(() => {
  // Fetch user details from the server using the JWT token
  const token = localStorage.getItem('token');
  if (token) {
    fetch('/getprofile', {
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
      <Link to="/dash" className="sidebar-link">Dasboard</Link>
      <Link to="/profile" className="sidebar-link">Profile</Link>
      <Link to='/home' className="sidebar-link">Home</Link>
      <Link to="/events" className="sidebar-link">Events</Link>
      <Link to="/teams" className="sidebar-link">Teams</Link>
      <Link to="/players" className="sidebar-link">Players</Link>
      <Link to="/pcalender" className="sidebar-link">Calender</Link>
      <Link to='/ppractise' className='sidebar-link'>Practice</Link>
    </div>
  );
};

export default Sidebar;
