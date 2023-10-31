import React, { useState, useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import Sidebar from '../components/Aside';
import Header from '../components/Header';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment, { culture: 'en', timezone: 'America/New_York' });

const PracticeCalendar = () => {

  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    fetch('/get-practise-events')
      .then((response) => response.json())
      .then((practiceEvents) => {
        // Fetch regular events from the server
        fetch('/get-events')
          .then((response) => response.json())
          .then((regularEvents) => {
            // Add a 'category' property to distinguish practice and regular events
            const practiceEventsWithCategory = practiceEvents.map((event) => ({
              ...event,
              source: 'Practice',
            }));
            const regularEventsWithCategory = regularEvents.map((event) => ({
              ...event,
              source: 'Regular',
            }));

            // Combine practice and regular events into one array
            const allEvents = [...practiceEventsWithCategory, ...regularEventsWithCategory];
            setEvents(allEvents);
          })
          .catch((error) => console.error(error));
      })
      .catch((error) => console.error(error));
  }, []);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const eventStyleGetter = (event) => {
    if (event.source === 'Practice') {
      return {
        style: {
          backgroundColor: 'red', // Red for practice events
        },
      };
    } else if (event.source === 'Regular') {
      return {
        style: {
          backgroundColor: 'green', // Green for regular events
        },
      };
    }
  };

  return (
    <div className="app1">
      <Sidebar />
      <div className="app-main">
        <Header />
        <div>
          <h1 style={{fontFamily: "Footlight MT Light"}}>Practice Calendar</h1>

          <Calendar
            localizer={localizer}
            events={events}
            startAccessor={(event) => moment(event.date + ' ' + event.startTime, 'YYYY-MM-DD HH:mm').toDate()}
            endAccessor={(event) => moment(event.date + ' ' + event.endTime, 'YYYY-MM-DD HH:mm').toDate()}
            titleAccessor="name"
            style={{ height: 500 }}
            onSelectEvent={handleEventClick}
            eventPropGetter={eventStyleGetter}
          />

          <div className="event-details" style={selectedEvent ? selectedEvent.detailsStyle : null}>
            {selectedEvent ? (
              <>
                <h2>{selectedEvent.name}</h2>
                <p>Date: {moment(selectedEvent.date).format('MMMM DD, YYYY')}</p>
                <p>
                  Time: {moment(selectedEvent.startTime, 'HH:mm').format('hh:mm A')} -{' '}
                  {moment(selectedEvent.endTime, 'HH:mm').format('hh:mm A')}
                </p>
                <p>Location: {selectedEvent.location}</p>
                {selectedEvent.source === 'Regular' ? null : (
                  <p>Coach: {selectedEvent.coach}</p>
                )}
                {selectedEvent.source === 'Practice' ? null : (
                  <p>Age category: {selectedEvent.category}</p>
                )}
               
              </>
            ) : (
              <>
                <h2>Event Details</h2>
                <p>Select an event to view details.</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeCalendar;
