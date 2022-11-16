import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { Box, CssBaseline, IconButton, Container, Grid } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MuiDrawer from '@mui/material/Drawer';
import Footer from 'components/layout/footer';

const mdTheme = createTheme();
const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const Layout = ({ children }) => {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  
  return pug`
    ThemeProvider(theme=${mdTheme})
      Box(sx=${{ display: 'flex' }})
        CssBaseline
        AppBar(position="absolute", open=${open})
          Toolbar(sx=${{pr: '24px'}})
            IconButton(
              edge="start", color="inherit",
              aria-label="open drawer", onClick=${toggleDrawer},
              sx=${{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }},
            )
              MenuIcon
            Typography(
              component="h1", variant="h6",
              color="inherit", noWrap,
              sx=${{ flexGrow: 1 }},
            ) Dashboard 
            IconButton(color="inherit")
              Badge(badgeContent=${4}, color="secondary")
                NotificationsIcon 
        Drawer(variant="permanent", open=${open})
          Toolbar(
            sx=${{
              display: 'flex', alignItems: 'center',
              justifyContent: 'flex-end', px: [1],
            }},
          )
            IconButton(onClick=${toggleDrawer})
              ChevronLeftIcon
        Box(
          component="main",
          sx=${{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        )
          Toolbar
          Container(maxWidth="lg", sx=${{ mt: 4, mb: 4 }})
            Grid(container, spacing=${3})
            Grid(item xs=${12} md=${8} lg=${9})
              main
                ${children}
          // ${children}
      Footer
  `;
};
export default Layout;