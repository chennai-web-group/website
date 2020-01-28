import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import CommonHead from './CommonHead';
import variables from '../styles/variables';

const { primaryColor, fontColor } = variables;

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
          color: ${fontColor};
          font-family: 'Work Sans', sans-serif;
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
