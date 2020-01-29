import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import state from '../state';
console.log(state);

const links = [
  {
    href: 'https://www.meetup.com/Chennai-Web-Meetup',
    label: 'Meetup',
    icon: 'meetup.png'
  },
  {
    href: 'https://github.com/chennai-web-group/',
    label: 'GitHub',
    icon: 'github.png'
  },
  {
    href: 'http://twitter.com/ChennaiWebGroup',
    label: 'Twitter',
    icon: 'twitter.png'
  },
  {
    href: 'https://www.youtube.com/channel/UCjMbw7Yt8nockWPcra1dfUQ',
    label: 'YouTube',
    icon: 'youtube.png'
  }
].map(link => {
  link.key = link.label;
  return link;
});

const Home = () => {
  let [upcomingEvent, setEvent] = useState({});
  let { event_name: eventName, date, venue = 'Virtual' } = upcomingEvent;

  let meetupTitle = (
    <a
      href="https://www.meetup.com/Chennai-Web-Meetup/events/268184240/"
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
  let meetupConfLink = (
    <span>
      (
      <a
        href="https://join.freeconferencecall.com/karthickharish95"
        target="_blank"
        rel="noopener noreferrer"
      >
        Join Here
      </a>
      )
    </span>
  );

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/chennai-web-group/talks@${state.eventsApiVersion}/talks.json`
    ).then(response => {
      response.json().then(json => {
        setEvent(json.upcoming);
      });
    });
  }, []); // To run useEffect only once!

  return (
    <div>
      <Layout title="Home | Chennai Web Group">
        <div className="mt-10 text-center sm:mt-24">
          <header className="text-4xl sm:text-5xl font-bold">
            Chennai Web Group
          </header>
          <div className="text-lg sm:text-xl px-2 mt-4">
            A place where Chennai based (but not limited to) web developers hang
            out to accomplish things
          </div>

          {eventName ? (
            <div className="my-10 mb-12">
              <div className="rounded-sm p-4 shadow hidden sm:inline-block up-next">
                <span className="font-bold mb-2"> Up Next: </span> {meetupTitle}
                &bull; {meetupMeta} {meetupConfLink}
              </div>

              <div className="text-center rounded-sm p-4 shadow w-5/6 sm:w-auto inline-block sm:hidden up-next">
                <h3 className="font-bold mb-2"> Up Next </h3>
                <div>{meetupTitle}</div>
                <div>{meetupMeta} </div>
                <div> {meetupConfLink} </div>
              </div>
            </div>
          ) : null}

          <div className="mt-6">
            {links.map(link => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={`./assets/images/${link.icon}`}
                  alt={link.label}
                  className="inline-block mx-4"
                />
              </a>
            ))}
          </div>
        </div>
      </Layout>

      <style jsx>{`
        img {
          width: 50px;
        }

        .up-next {
          background-color: #92dce5;
        }
      `}</style>
    </div>
  );
};

export default Home;
