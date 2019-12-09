import React from 'react';
import Layout from '../components/Layout';

const Talks = () => (
  <div>
    <Layout title="Team | Chennai Web Group">
      <h1 className="text-xl text-center mt-8 ">The Team</h1>

      <p className="text-center mt-8 text-black"></p>
    </Layout>

    <style jsx>{`
      * {
        color: #5ba150;
        font-family: 'Righteous', cursive;
      }

      p {
        color: black;
      }

      body {
        background: #fafafa;
        margin: 0;
      }
    `}</style>
  </div>
);

export default Talks;
