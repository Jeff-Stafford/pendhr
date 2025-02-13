import React, { useState, ReactNode } from 'react';
import { AppBar, Avatar, Toolbar } from '@mui/material';
import { Box } from '../../primatives/Box/Box';
import { Drawer } from '../Drawer/Drawer';
import { Link } from '../../primatives/Link/Link';
import { Icon } from '../../primatives/Icon/Icon';
import { Flex } from '../../primatives/Flex/Flex';
import { Image } from '../../primatives/Image/Image';
import { Divider } from '../Divider/Divider';
import { IconButton } from '../IconButton/IconButton';

interface PersistentDrawerProps {
  drawerWidth: number;
  children: ReactNode;
  logoFullSrc: string;
  logoIconSrc: string;
  navRight?: ReactNode;
  sideNav?: ReactNode;
  window?: () => Window;
}

const PersistentDrawer = ({
  children,
  drawerWidth,
  window,
  logoFullSrc,
  logoIconSrc,
  navRight = null,
  sideNav,
}: PersistentDrawerProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Flex>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Flex alignItems="center">
            <Link to="/">
              <Avatar
                src={logoIconSrc}
                alt="logo"
                sx={{ mr: 2, display: { sm: 'none' } }}
              />
            </Link>
            <IconButton onClick={() => setMobileOpen(!mobileOpen)}>
              <Icon name="ChevronLeft" />
              {/*{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}*/}
            </IconButton>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Icon name="Menu" />
            </IconButton>
          </Flex>
          {navRight && <Box>{navRight}</Box>}
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Toolbar>
            <Link to="/">
              <Image src={logoFullSrc} alt="logo" responsive />
            </Link>
          </Toolbar>
          <Divider />
          {sideNav}
        </Drawer>
        <Drawer
          variant="persistent"
          anchor="left"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          <Toolbar>
            <Link to="/">
              <Image src={logoFullSrc} alt="logo" responsive />
            </Link>
          </Toolbar>
          <Divider />
          {sideNav}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100vh',
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Flex>
  );
};

export { PersistentDrawer };
