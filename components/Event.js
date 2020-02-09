import React from 'react';
import Talk from './Talk';
import variables from '../styles/variables';

const { tableHeaderBg = '' } = variables;

export default function Event(props) {
  let { event } = props;
  let { event_name: eventName, date, talks, playlist } = event || {};

  return (
    <div>
      <div className="border-t border-b p-4 flex justify-between text-gray-700 event-header my-5">
        <span className="font-semibold">{eventName}</span>
        <span className="text-gray-600">{date}</span>
      </div>

      <div>
        {
          playlist === 'coming soon'
            ? <p className="text-center"> Videos and Slides are coming soon... Stay tuned!</p>
            : <Talks talks={talks} />
        }

      </div>

      <style jsx>{`
        .event-header {
          background-color: ${tableHeaderBg};
        }
      `}</style>
    </div>
  );
}

function Talks(props = {}) {
  let { talks } = props;
  return talks.map(talk => (
    <Talk key={talk.title} talk={talk} />
  ));
}
