import React from 'react';
import Layout from '../components/Layout';

const Talks = () => (
  <div>
    <Layout title="About | Chennai Web Group">
      <h1 className="text-xl text-center mt-8">About the Chennai Web Group</h1>

      <div className="about m-auto px-8 mt-6">
        <p className="my-5 text-gray-700">
          This group is open for all IT professionals - developers, designers,
          students, and anyone dealing with or associated with the Web.
        </p>
        <p className="my-5 text-gray-700">
          We will discuss, share and track ideas about the basics as well as the
          latest developments in the Web space. The meetup will happen both
          physical as well as virtual. This Group is for passionate developers
          for learning and sharing tips, tricks, hacks and best practices. We
          are a community focused on creating and contributing code that can be
          used to develop web applications. These events will serve as a place
          for the tech community to engage with other experts in the field,
          learn from each other and share the best practices.
        </p>
        <p className="my-5 text-gray-700">
          We have passionate individuals (from Developers to CTOs and System
          Admins to Data scientists) who focuses on web technology and related
          topics. We are diverse and highly motivated. We are sure you{"'"}ll be
          able to find someone who can help you (or that you can help) no matter
          what your interests are.
        </p>
      </div>

      <h1 className="text-xl text-center mt-8">Code of Conduct</h1>

      <div className="about m-auto px-8 mt-6">
        <p className="my-5 text-gray-700">
          The Chennai Web Group has its primary focus on enabling the fellow
          developer to open up their opinions freely and to talk about their
          favourite topics in front of everyone without any hesitation. Thus we
          follow a strict {'"'}Code of Conduct{'"'} to ensure a happy place for
          everyone.
        </p>
        <p className="my-5 text-gray-700">
          Kindly refer{' '}
          <a
            href="https://confcodeofconduct.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            ConfCodeofConduct.com
          </a>{' '}
          for the actual policy we follow for the Chennai Web Group
        </p>
      </div>
    </Layout>

    <style jsx>{`
      .about {
        max-width: 900px;
      }
    `}</style>
  </div>
);

export default Talks;
