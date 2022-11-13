import React from 'react';
import Navbar from 'components/layout/navbar';
import Footer from 'components/layout/footer';

const Layout = ({ children }) => {
  return pug`
    div
      Navbar
      main 
        ${children}
      Footer
  `;
};

export default Layout;