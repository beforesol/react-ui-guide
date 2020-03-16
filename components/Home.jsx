import React from 'react';
import { Link } from 'react-router-dom';

import Layout from './Layout';

const Home = () => {
  return (
    <Layout>
      <p>Hello World of React and Webpack!</p>
      <Link to="/dynamic">Navigate to Dynamic Page</Link>
    </Layout>
  );
};

export default Home;