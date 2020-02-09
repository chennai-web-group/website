import React, { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import EventBanner from '../components/EventBanner';
import state from '../state';
// import YoutubeIcon from '../assets/icons/youtube.svg';
// import TwitterIcon from '../assets/icons/twitter.svg';
// import MeetupIcon from '../assets/icons/meetup.svg';
// import GithubIcon from '../assets/icons/github.svg';

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

          <EventBanner />

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
