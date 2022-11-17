import React, { useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const SiderBar = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  return pug`
    div(className="min-w-[15rem]")
      List(
      sx=${{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }},
      component="nav",
      aria-labelledby="nested-list-subheader",
      subheader=${
        <ListSubheader component="div" id="nested-list-subheader">
          Nested List Items
        </ListSubheader>
      })
        ListItemButton
          ListItemIcon
            SendIcon
          ListItemText(primary="Sent mail")
        ListItemButton
          ListItemIcon
            DraftsIcon
          ListItemText(primary="Drafts")
        ListItemButton(onClick=${handleClick})
          ListItemIcon
            InboxIcon
          ListItemText(primary="Inbox")
          if open
            ExpandLess
          else
            ExpandMore
        Collapse(in=${open}, timeout="auto", unmountOnExit)
          List(component="div" disablePadding)
            ListItemButton(sx=${{ pl: 4 }})
              ListItemIcon
                StarBorder
              ListItemText(primary="Starred")
  `;
}

export default SiderBar;