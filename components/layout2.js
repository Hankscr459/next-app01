import React from 'react';
import Footer from 'components/layout/footer';
import ToolBar from 'components/layout/header/toolBar';
import { Container, Grid } from '@mui/material';

const Layout2 = ({ children }) => {
  return pug`
    div
      ToolBar
      Container(maxWidth="lg", sx=${{ mt: 5, mb: 4 }})
        Grid(container, spacing=${3})
        Grid(item xs=${12} md=${8} lg=${9})
          main
            ${children}
      Footer
  `;
};
export default Layout2;