import React from 'react';
import Footer from 'components/layout/footer';
import NavBar from '@/components/layout/header/navBar';
import { Container, Grid } from '@mui/material';
import SiderBar from 'components/layout/sidebar/sidebar';

const Layout2 = ({ children }) => {
  return pug`
    div
      NavBar
      .container.flex(
        className="min-h-[100vh] min-w-[100%]",
      )
        SiderBar
        main.bg-neutral-300.grow
          ${children}
      Footer
  `;
};
export default Layout2;