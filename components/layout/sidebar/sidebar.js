import React, { useState, useEffect } from 'react';
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
import { selectSideBarState } from 'store/sideBar';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

const SiderBar = () => {
  const [open, setOpen] = useState(true);
  const sidebarState = useSelector(selectSideBarState);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "Power.easeOut" },
    });
    if (sidebarState) {
      tl.to('.sideBar', { minWidth: '15rem', opacity: 1 });
    } else {
      tl.to('.sideBar', { minWidth: 0, opacity: 0 });
    }
  }, [sidebarState]);

  const handleClick = () => {
    setOpen(!open);
  };
  return pug`
    .sideBar(className=" bg-white overflow-hidden")
      List(
      sx=${{ width: '15rem', bgcolor: 'background.paper' }},
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