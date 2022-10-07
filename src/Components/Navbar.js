import { AppBar, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Navbartstyle } from './Navbarstyle';
import MenuIcon from '@mui/icons-material/Menu';

import { Avatar, IconButton } from '@material-ui/core';
import logo from '../images/logo.svg';
const Navbar = ({funcsetmobile}) => {
  const classes = Navbartstyle();
  return (
    <div>
        <AppBar position='fixed' elevation={1}>
            <Toolbar className={classes.navbarstyle}>
            <IconButton className={classes.iconstyle}
            onClick={funcsetmobile}>
                <MenuIcon/>
              </IconButton>
              <div className={classes.iconstyle}>
                  <Avatar alt='logo' variant='square' src={logo}>
                    </Avatar>
              </div>
             
            </Toolbar> 
        </AppBar>

    </div>
  )
}

export default Navbar