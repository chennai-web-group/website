import React from 'react'
import { useState, useEffect } from 'react';
import fetch from 'isomorphic-unfetch';
import Event from './Event';

export default function Events() {

  let [loading, setLoading] = useState(true);
  let [events, setEvents] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/chennai-web-group/talks/master/talks.json')
    .then((response) => {
      response.json()
      .then((json) => {
        setEvents(json.events);        
        setLoading(false);
      })
    });  
  }, []); // To run useEffect only once!

  return (
    <div className="container m-auto mt-4">
      
      {
        loading 
        ? <div className="text-center"> Fetching events... </div>
        : <EventList events={events} />
      }
    </div>
  )
}

const EventList = ({ events }) => {
  

  if (events.length) {
    return events.map((event) => <Event event={event} />)
  }

  return <p className="text-center"> No Events Found! </p>
}