import React, { useState,useEffect } from 'react';
import moment from 'moment';
import practiseData from '../json/practise.json';
import Header from '../components/Header';
import Cside from '../components/SideBar';

const Practise = () => {
  const [practiseEvents, setPractiseEvents] = useState([]);

  const dateFormat = 'YYYY-MM-DD';
  const timeFormat = 'HH:mm:ss';
  const [selectedPractise, setSelectedPractise] = useState(null);


  const fetchPractiseEvents = async () => {
    try {
      const response = await fetch('http://localhost:3000/get-practise-events');
      if (response.ok) {
        const data = await response.json();
        setPractiseEvents(data);
      } else {
        console.error('Failed to fetch practice events');
      }
    } catch (error) {
      console.error(error);
    }
  };
  
  useEffect(() => {
    fetchPractiseEvents();
  }, []);
 


  const handlePractiseSelect = (practise) => {
    setSelectedPractise(practise);
  };

  return (
    <div>
      <div className="app">
        <Cside />
        <div className="app-main">
          <Header />
         
          <br></br>
          <ul>
            {practiseEvents.length > 0 ? (
              practiseEvents.map((event) => (
                <li
                  key={event._id}
                  onClick={() => handlePractiseSelect(event)}
                  className={selectedPractise && selectedPractise._id === event._id ? 'selected' : ''}
                >
                  {event.name} - {moment(event.date).format('MMMM DD, YYYY')} - {moment(event.startTime, timeFormat).format('hh:mm A')} - {moment(event.endTime, timeFormat).format('hh:mm A')}
                  
                </li>
              ))
            ) : (
              <li>No practice events available.</li>
            )}
          </ul>
          <div className="practise-details">
            {selectedPractise ? (
              <>
                <h2>{selectedPractise.name}</h2>
                <p>Date: {moment(selectedPractise.start).format('MMMM DD, YYYY')}</p>
                <p>
                  Time: {moment(selectedPractise.startTime, 'HH:mm').format('hh:mm A')} -{' '}
                  {moment(selectedPractise.endTime, 'HH:mm').format('hh:mm A')}
                </p>

                <p>Location: {selectedPractise.location}</p>
                <p>Sport: {selectedPractise.sport}</p>
                <p>Coach: {selectedPractise.coach}</p>
                <p>Description: {selectedPractise.description}</p>
              </>
            ) : (
              <div className="no-selection">
                <h2>Practice Details</h2>
                <p>Select a practice event to view details.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Practise;
