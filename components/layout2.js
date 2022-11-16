import React from 'react';
import Footer from 'components/layout/footer';
import NavBar from '@/components/layout/header/navBar';
import { Container, Grid } from '@mui/material';

const Layout2 = ({ children }) => {
  return pug`
    div
      NavBar
      Container(
        maxWidth="lg", 
        sx=${{ mt: 5, mb: 4 }},
        className="min-h-[100vh]",
      )
        Grid(item, xs=${12}, md=${8}, lg=${9})
          main
            ${children}
      Footer
  `;
};
export default Layout2;