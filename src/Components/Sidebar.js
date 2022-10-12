import { Hidden } from '@material-ui/core';
import { Drawer } from '@mui/material';
import Sidebardata from './Sidebardata';
import React from 'react';
import { sidebarstyle } from './sidebarstyle';


const Sidebar = ({isMobile, funcsetmobile, heading}) => {
  console.log("in sidebar",heading)

const classes = sidebarstyle();
  return (
    <div>
      <nav className={classes.drawer}>
           
        <Hidden xsDown implementation='sidebardesign'> 
        <Drawer variant='permanent' open anchor='left' classes={{paper: classes.drawerPaper}} >
            <Sidebardata heading ={heading} />
              
        </Drawer>
        </Hidden> 

        <Drawer variant='temporary' open ={isMobile} anchor='left' classes={{paper: classes.drawerPaper}} onClick={funcsetmobile} >
           <Sidebardata  heading ={heading}/>
        

        </Drawer>
      </nav>


      
    </div>
  )
}

export default Sidebar