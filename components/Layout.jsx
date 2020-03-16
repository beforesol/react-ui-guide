import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <Link to="/">webpack-for-react</Link>
      {children}
    </div>
  );
};

export default Layout;