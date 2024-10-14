import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // Needed for dateClick

export const Appointment = () => {
  const [events, setEvents] = useState([
    { title: 'Meeting', start: '2024-10-15' },
    { title: 'Conference', start: '2024-10-18' },
  ]);

  const handleDateClick = (arg) => {
    const newEventTitle = prompt('Enter event title:'); // Prompt user for event name
    if (newEventTitle) {
      const newEvent = { title: newEventTitle, start: arg.dateStr };
      setEvents([...events, newEvent]); // Add new event to the state
    }
  };

  return (
    <FullCalendar
      plugins={[dayGridPlugin, interactionPlugin]} // interactionPlugin is required for date click
      initialView="dayGridMonth"
      events={events} // List of events
      dateClick={handleDateClick} // Function triggered on date click
    />
  );
};



