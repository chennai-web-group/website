import React from 'react';
import Nav from './Navbar';
import Footer from './Footer';
import CommonHead from './CommonHead';

export default function ResourceLink(props) {
  let { title, children } = props;

  return (
    <>
      <CommonHead title={title} />
      <Nav />

      <div className="mb-10">{children}</div>

      <Footer />
    </>
  );
}
