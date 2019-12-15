import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import CommonHead from './CommonHead';
import variables from '../styles/variables';

const { primaryColor } = variables;

export default function ResourceLink(props) {
  let { title, children } = props;

  return (
    <>
      <CommonHead title={title} />
      <Nav />

      <div className="mb-10">{children}</div>

      <Footer />

      <style jsx global>{`
        body {
          color: ${primaryColor};
          font-family: 'Righteous', cursive;
          background: #fafafa;
          margin: 0;
        }

        a {
          color: ${primaryColor};
        }
      `}</style>
    </>
  );
}
