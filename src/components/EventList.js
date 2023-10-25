import React from 'react';
import Event from '../pages/Events';

function EventList({ events }) {
  return (
    <div className="event-list">
      {events.map((event) => (
        <Event
          key={event.id}
          name={event.name}
          date={event.date}
          location={event.location}
          teams={event.teams}
        />
      ))}
    </div>
  );
}

export default EventList;
