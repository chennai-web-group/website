import React from 'react';
import Talk from './Talk';

export default function Event(props) {
  let { event } = props;
  let { event_name: eventName, date, talks } = event || {};

  return (
    <div>
      <div className="border-t border-b p-4 flex justify-between text-gray-700 event-header">
        <span>{eventName}</span>
        <span className="text-gray-600">{date}</span>
      </div>

      <div>
        {talks.map(talk => (
          <Talk key={talk.title} talk={talk} />
        ))}
      </div>

      <style jsx>{`
        .event-header {
          background-color: #efffef;
        }
      `}</style>
    </div>
  );
}
