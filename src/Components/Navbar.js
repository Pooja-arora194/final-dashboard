import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Navbartstyle } from './Navbarstyle';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import { Avatar, IconButton } from '@material-ui/core';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import "./index.css";

const Navbar = ({funcsetmobile, heading}) => {
 
  const classes = Navbartstyle();
  const settings = ['Profile', 'Logout'];
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
 
  console.log(setAnchorElNav)
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
        <AppBar position='fixed'>
            <Toolbar className={classes.navbarstyle}> 
              <div className={classes.navbartitle}> {heading} </div>
            
            <IconButton className={classes.iconstyle}
                onClick={funcsetmobile}>
                <MenuIcon/>
              </IconButton>
              <div className={classes.iconstyle}>
              </div>
             
              <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
            </Toolbar> 
        </AppBar>

    </div>
  )
}

export default Navbar