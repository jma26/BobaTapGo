import { AppBar, Box, IconButton, Toolbar, Drawer, Divider, List, ListItem, ListItemIcon, ListItemButton, ListItemText, ListSubheader } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DehazeIcon from '@mui/icons-material/Dehaze';
import RoomIcon from '@mui/icons-material/Room';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import SettingsIcon from '@mui/icons-material/Settings';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import { useState } from 'react';

const Header = () => {
  const [drawer, setDrawer] = useState<boolean>(false)


  const toggleDrawer = (bool: boolean) => {
    setDrawer(bool)
  }

  return (
    <>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor='left'
            open={drawer}
            onClose={() => toggleDrawer(false)}
          >
            <Box
              role="presentation"
              onClick={() => toggleDrawer(false)}
            >
              <List>
                <ListSubheader sx={{ fontWeight: 'bold'}}>ORDER MANAGEMENT</ListSubheader>
                <ListItemButton>
                  <ListItemIcon>
                    <RssFeedIcon />
                  </ListItemIcon>
                  <ListItemText primary="Live Orders" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <DehazeIcon />
                  </ListItemIcon>
                  <ListItemText primary="All Orders" />
                </ListItemButton>
                <Divider />
                <ListSubheader sx={{ fontWeight: 'bold'}}>MENU MANAGEMENT</ListSubheader>
                <ListItemButton>
                  <ListItemIcon>
                    <RestaurantMenuIcon />
                  </ListItemIcon>
                  <ListItemText primary="Menu Items" />
                </ListItemButton>
                <ListItemButton>
                  <ListItemIcon>
                    <RoomIcon />
                  </ListItemIcon>
                  <ListItemText primary="Locations" />
                </ListItemButton>
                <Divider />
                <ListSubheader sx={{ fontWeight: 'bold'}}>SETTINGS</ListSubheader>
                <ListItemButton>
                  <ListItemIcon>
                    <SettingsIcon />
                  </ListItemIcon>
                  <ListItemText primary="General" />
                </ListItemButton>
              </List>
            </Box>
          </Drawer>
        </Toolbar>
      </AppBar>
    </>
  )
}

export default Header;