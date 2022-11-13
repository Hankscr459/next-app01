import React from 'react';
import Navbar from 'components/layout/navbar';
import Footer from 'components/layout/footer';
import { get } from 'lodash';

const Layout = ({ children }) => {
  const a = { value: 7777 };
  return pug`
    div
      Navbar
      p ${get(a, 'value', 'default')}
      main 
        ${children}
      Footer
  `;
};

export default Layout;