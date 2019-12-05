import React from 'react'
import Talk from "./Talk";

export default function Event(props) {

  let { event } = props;
  let { event_name, date, talks } = event || {};

  return (
    <div>
      <div className="border-t border-b p-4 flex justify-between text-black event-header">
        <span>
          {event_name}
        </span>
        <span className="text-gray-600">
          {date}
        </span>
      </div>

      <div>
        {
          talks.map((talk) => <Talk talk={talk} />)
        }
      </div>

      <style jsx>{`
        .event-header {
          background-color: #efffef;
        }
      `}</style>
    </div>
  )
}