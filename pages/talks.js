import React from 'react'
import Nav from '../components/Navbar'
import Footer from '../components/Footer'
import CommonHead from '../components/CommonHead';
import Events from '../components/Events';

const Talks = () => (
  <div>
    <CommonHead title="Events and Talks | Chennai Web Group" />
    <Nav />

    <h1 className="text-xl text-center mt-8">Events and Talks</h1>
    
    <Events />

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