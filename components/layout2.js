import React, { useEffect } from 'react';
import Footer from 'components/layout/footer';
import NavBar from '@/components/layout/header/navBar';
import { Container, Grid } from '@mui/material';
import SiderBar from 'components/layout/sidebar/sidebar';
import { selectSideBarState } from 'store/sideBar';
import { useSelector } from 'react-redux';
import gsap from 'gsap';

const Layout2 = ({ children }) => {
  const sidebarState = useSelector(selectSideBarState);
  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.4, ease: "Power.easeOut" },
    });
    if (sidebarState) {
      tl.to('.view', { x: 0 });
    } else {
      tl.to('.view', { x: '-15rem' });
    }
  }, [sidebarState]);

  return pug`
    div
      NavBar
      div(
        className=${`
          container flex
          min-h-[100vh] min-w-[100%]
          bg-neutral-300 grow
        `},
      )
        SiderBar
        main(className="view")
          ${children}
      Footer
  `;
};
export default Layout2;