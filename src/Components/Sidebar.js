import { Hidden } from '@material-ui/core';
import { Drawer } from '@mui/material';
import Sidebardesign from './Sidebardesign';
import React from 'react';
import { sidebarstyle } from './sidebarstyle';


const Sidebar = ({isMobile, funcsetmobile}) => {

const classes = sidebarstyle();
  return (
    <div>
      <nav className={classes.drawer}>
        <Hidden xsDown implementation='Sidebardesigncss'> 
        <Drawer variant='permanent' open anchor='left' classes={{paper: classes.drawerPaper}} >
            <Sidebardesign />

        </Drawer>
        </Hidden>

        <Drawer variant='temporary' open ={isMobile} anchor='left' classes={{paper: classes.drawerPaper}} onClick={funcsetmobile} >
           <Sidebardesign />

        </Drawer>
      </nav>
    </div>
  )
}

export default Sidebar