import React from 'react';
import Layout from '../components/Layout';
import Events from '../components/Events';

const Talks = () => (
  <div>
    <Layout title="Events and Talks | Chennai Web Group">
      <h1 className="text-xl text-center mt-8">Events and Talks</h1>

      <Events />
    </Layout>
  </div>
);

export default Talks;
