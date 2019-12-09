import React from 'react';
import Nav from '../components/Navbar';
import Footer from '../components/Footer';
import CommonHead from '../components/CommonHead';

const Talks = () => (
  <div>
    <CommonHead title="About | Chennai Web Group" />
    <Nav />

    <h1 className="text-xl text-center mt-8">About the Chennai Web Group</h1>

    <Footer />

    <style jsx>{`
      * {
        color: #5ba150;
        font-family: 'Righteous', cursive;
      }

      body {
        background: #fafafa;
        margin: 0;
      }
    `}</style>
  </div>
);

export default Talks;
