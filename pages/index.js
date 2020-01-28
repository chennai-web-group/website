import React from 'react';
import Layout from '../components/Layout';

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

let meetupTitle = (<a href="https://www.meetup.com/Chennai-Web-Meetup/events/268184240/" target="_blank">Febraury Meetup</a>)
let meetupMeta = (<span>9th Feb 2020 &bull; Virtual</span>)
let meetupConfLink = (<span>(<a href="https://join.freeconferencecall.com/karthickharish95" target="_blank">Join Here</a>)</span>)

const Home = () => (
    <div>
        <Layout title="Home | Chennai Web Group">
            <div className="mt-16 text-center sm:mt-24">
                <header className="text-5xl font-bold">Chennai Web Group</header>
                <div className="text-xl">
                    A place where Chennai based (but not limited to) web developers hang
                    out to accomplish things
        </div>

                <div className="rounded-sm my-6 p-4 shadow hidden sm:inline-block up-next">
                    <span className="font-bold mb-2"> Up Next: </span> {meetupTitle} &bull; {meetupMeta} {meetupConfLink}
                </div>

                <div className="text-center rounded-sm my-6 p-4 shadow w-2/3 sm:w-auto inline-block sm:hidden up-next">
                    <h3 className="font-bold mb-2"> Up Next </h3>
                    <div>{meetupTitle}</div>
                    <div>{meetupMeta} </div>
                    <div> {meetupConfLink} </div>
                </div>

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
        background-color: #92DCE5;
      }
    `}</style>
    </div>
);

export default Home;
