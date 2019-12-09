import React from 'react';
import Layout from '../components/Layout';
import Events from '../components/Events';

const Talks = () => (
  <div>
    <Layout title="Events and Talks | Chennai Web Group">
      <h1 className="text-xl text-center mt-8">Events and Talks</h1>

      <Events />
    </Layout>

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
