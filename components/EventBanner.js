import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getTalksList } from '../utils/network';

export default function EventBanner() {
  let [eventList, setEvent] = useState({});
  let { upcoming = {}, events = [] } = eventList;
  let { event_name: hasUpcomingEvent } = upcoming;
  let [latestEvent = {}] = events;

  let eventToBeDisplayed = hasUpcomingEvent ? upcoming : latestEvent;
  let {
    event_name: eventName,
    date,
    // playlist = '',
    venue = 'Virtual',
    meetup_link: meetupLink = ''
  } = eventToBeDisplayed;

  let meetupTitle = (
    <a
      href={meetupLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      {eventName}
    </a>
  );
  let meetupMeta = (
    <span>
      {date} &bull; {venue}
    </span>
  );
  let meetupConfLink = hasUpcomingEvent ? (
    <span>
      <a
        href="https://join.freeconferencecall.com/karthickharish95"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join Here
      </a>
    </span>
  ) : null;

  let title = hasUpcomingEvent ? 'Up Next: ' : 'Previous Event: ';

  let lastEventDetails = (
    <>
      Checkout the
      <Link href="/talks">
        <a> slides and videos </a>
      </Link>
      of past events.
    </>
  );

  let cfpDetails = (
    <>
      Interested to talk in this event?{' '}
      <a
        href="http://bit.ly/cwg-cfp"
        target="_blank"
        rel="noopener noreferrer"
      >
        Submit a Talk 💪
      </a>
    </>
  );

  useEffect(() => {
    getTalksList().then((json) => {
      setEvent(json || {});
    });
  }, []); // To run useEffect only once!

  return (
    <div>
      <div className="my-10 mb-12">
        {/* <div className="rounded-sm p-4 shadow hidden sm:inline-block up-next">
          <span className="font-bold mb-2"> Up Next: </span> {meetupTitle}
          &bull; {meetupMeta} {meetupConfLink}
        </div> */}
        <div className="rounded-sm p-4 shadow hidden sm:inline-block up-next">
          <span className="font-bold mb-2">{title}</span>
          {meetupTitle}
          &nbsp; &bull; {meetupMeta} {meetupConfLink}
          {hasUpcomingEvent ? (
            (<div>
              <hr className="border-t my-3 mx-48" />
              {cfpDetails}
            </div>)
          ) : (<div>
            <hr className="border-t my-3 mx-48" /> {lastEventDetails}
          </div>)}
        </div>

        <div className="text-center rounded-sm p-4 shadow w-5/6 sm:w-auto inline-block sm:hidden up-next">
          <h3 className="font-bold mb-2"> {title} </h3>
          <div>{meetupTitle}</div>
          <div>{meetupMeta} </div>
          <div> {meetupConfLink} </div>
          {hasUpcomingEvent ? (
            <div>
              <hr className="border-t my-3" />
              {cfpDetails}
            </div>
          ) : <div>
              <hr className="border-t my-3" /> {lastEventDetails}
            </div>}
        </div>
      </div>

      {/* <style jsx>{`
        footer {
          background: ${primaryColor};
          color: white;
        }
      `}</style> */}
    </div>
  );
}
