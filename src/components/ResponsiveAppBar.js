import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';

const drawerWidth = 240;

const ColorButton = styled(Button)(({ theme }) => ({
  color: '#000',
  backgroundColor: '#fff',
  borderRadius: '1px',
  boxShadow: '1px 1px 3px rgb(17 17 17 / 15%)',
  '&:hover': {
    backgroundColor: '#f1f1f1',
  },
}));

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'left' }}>
      <Typography variant="h6" sx={{ my: 2, fontWeight: 300, lineHeight: 1.2, textAlign: 'center' }} className='drawerTitle'>
        <a href="/" className='navTitleLink'>Notariat Kreußlein</a>
      </Typography>
      <Divider />
      <a href="/" style={{ textDecoration: 'none' }} className='navItemDrawer'>Home</a>
      <a href="/Leistungen" style={{ textDecoration: 'none' }} className='navItemDrawer'>Tätigkeitsfelder</a>
      <a href="/Info" style={{ textDecoration: 'none' }} className='navItemDrawer'>Mandateninfo</a>
      <a href="/Kontakt" style={{ textDecoration: 'none' }} className='navItemDrawer'>Kontakt</a>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" className='navbar'>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" className='drawerTitle' sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }} >
          <a href="/" className='navTitleLink'>Notariat Kreußlein</a>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <a href="/" style={{ textDecoration: 'none' }} className='navItem'>Home</a>
            <a href="/Leistungen" style={{ textDecoration: 'none' }} className='navItem'>Tätigkeitsfelder</a>
            <a href="/Info" style={{ textDecoration: 'none' }} className='navItem'>Mandateninfo</a>
            <a href="/Kontakt" style={{ textDecoration: 'none' }} className='navItem'>Kontakt</a>
          </Box>
          {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <ColorButton variant="contained" size="small" className='navbarButton'>Online Terminvereinbarung</ColorButton>
          </Box> */}
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>

    </Box>
  );
}

export default DrawerAppBar;