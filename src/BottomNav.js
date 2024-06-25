import React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SettingsIcon from '@mui/icons-material/Settings'; // New icon for the fourth tab
import { Link, useLocation } from 'react-router-dom';

function BottomNav() {
  const location = useLocation();

  return (
    <BottomNavigation
      value={location.pathname}
      showLabels
      sx={{
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#ffffff',
        boxShadow: '0 -1px 6px rgba(0, 0, 0, 0.1)',
        zIndex: 1000,
      }}
    >
      <BottomNavigationAction
        component={Link}
        to="/tab1"
        label="Tab 1"
        value="/tab1"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/tab2"
        label="Tab 2"
        value="/tab2"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/tab3"
        label="Tab 3"
        value="/tab3"
        icon={<LocationOnIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/tab4"
        label="Settings" // Label for the new tab
        value="/tab4"
        icon={<SettingsIcon />} // Icon for the new tab
      />
    </BottomNavigation>
  );
}

export default BottomNav;