import React from 'react';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import { useState ,useEffect} from 'react';

function Profile() {
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
  const imageContainerStyle = {
    display: 'flex',
    justifyContent: 'center',     
    paddingTop:'100px' ,
  };
  const [registeredEvents, setRegisteredEvents] = useState([]);

  useEffect(() => {
    const playerId = user ? user.id : null; // Use the player's ID from user data
    if (playerId) {
      // Fetch registered events for the player
      fetch(`/get-registered-events/${playerId}`)
        .then((response) => response.json())
        .then((data) => {
          setRegisteredEvents(data);
        })
        .catch((error) => {
          console.error('Error fetching registered events:', error);
        });
    }
  }, [user]);
  return (
    <div className="app">
      <Sidebar />
      <div className="app-main">
        <Header />
        <div className="profile">
          <div className="profile-header">
            <div className="profile-info">
            {user && (
        <div>
          
       <br></br>
              <p className="profile-h" style={{fontFamily: "Footlight MT Light"}}>PROFILE</p>
              <br></br>
              <hr/><br></br>
              <p className="profile-other">Name&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.firstName}&emsp;{user.lastName}</p>
              <hr />
              <p className="profile-other">ID&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.id}</p>
              <hr />
              <p className="profile-other">Sport&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.sport}</p>
              <hr />
              <p className="profile-other">Age&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;&nbsp;&nbsp;{user.age}</p>
              <hr/>
              <p className="profile-other">Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.email}</p>
              <hr />
              <p className="profile-other">Contact number&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp; {user.contactNumber}</p>
              <hr />
              
              <p className="profile-other">Team&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; {user.sport}</p>
              <hr />
              <p className="profile-other">Position&emsp;&nbsp;&emsp;&nbsp;&nbsp;&nbsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp; {user.position}</p>
              <hr></hr>
              <h1>Registered Events</h1>
              <ul>
              {registeredEvents.map((event) => (
  <li key={event._id}>
    {event.eventName}{' '}<br></br>Date:
    {new Date(event.eventDate).toLocaleDateString()}<br></br>
    Time:
    {event.startTime}-{event.endTime}
  </li>
))}

        </ul>
              </div>
      )}
            </div>

            <div style={imageContainerStyle}>
              <img
                className="profile-picture"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOH2aZnIHWjMQj2lQUOWIL2f4Hljgab0ecZQ&usqp=CAU"
                alt="Profile"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
