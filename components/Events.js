import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Event from './Event';
import state from '../state';

export default function Events() {
  let [loading, setLoading] = useState(true);
  let [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/chennai-web-group/talks@${state.eventsApiVersion}/talks.json`
    ).then(response => {
      response.json().then(json => {
        setEvents(json.events);
        setLoading(false);
      });
    });
  }, []); // To run useEffect only once!

  return (
    <div className="container m-auto mt-4">
      {loading ? (
        <div className="text-center"> Fetching events... </div>
      ) : (
          <EventList events={events} />
        )}
    </div>
  );
}

const EventList = ({ events }) => {
  if (events.length) {
    return events.map(event => <Event key={event.event_name} event={event} />);
  }

  return <p className="text-center"> No Events Found! </p>;
};
