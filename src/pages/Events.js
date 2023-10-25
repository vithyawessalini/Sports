import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Sidebar from '../components/SideBar';
import Header from '../components/Header';
import EventRegistrationForm from '../components/EventRegistrationForm'; // Import the registration form
import Eventlist from '../components/Reventlist';

function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const monthNames = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}


function Event() {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  useEffect(() => {
    // Fetch events from the backend
    fetch('http://localhost:3000/get-events')
      .then((response) => response.json())
      .then((data) => {
        setEvents(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleRegistrationSubmit = (registrationData) => {
    // Handle registration submission here (e.g., send data to the backend)
    // You can use the registrationData object to send the user's registration data
    console.log('Registration Data:', registrationData);

    // Clear the selected event and close the form
    setSelectedEvent(null);
    setShowRegistrationForm(false);
  };

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistrationForm(true);
  };

  return (
    <div className="app">
      <Sidebar />
      <div className="app-main">
        <Header />
        <Page title="Events">
          <div className="event-container">
            {events.map((event) => (
              <div className="event-box" key={event.id}>
                <div className="event-details">
                  <h3>{event.name}</h3>
                  <p>Date: {formatDate(event.date)}</p>
                  <p>Start Time: {event.startTime}</p>
                  <p>End Time: {event.endTime}</p>
                  <p>Location: {event.location}</p>
                  <p>Age category: {event.category}</p>
                  <button onClick={() => handleRegisterClick(event)}>Register</button>
                  
                </div>
              </div>
            ))}
            
          </div>
        </Page>

        {/* Display the registration form at the bottom of the page */}
        {showRegistrationForm && (
          <EventRegistrationForm
            event={selectedEvent}
            onClose={() => setShowRegistrationForm(false)}
            onSubmit={handleRegistrationSubmit}
          />
        )}
      </div>
    </div>
  );
}

export default Event;