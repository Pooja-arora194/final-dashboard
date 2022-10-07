
import { Avatar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import { sidebarstyle } from './sidebarstyle'
import { Sidebardata } from './Sidebardata';
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.svg'
const Sidebardesign = () => {
    const classes = sidebarstyle();
    const navigate = useNavigate();
  return (
    <div>
        <div className={classes.logodiv}>
            <Avatar alt='logo' variant='square' className={classes.logostyle} src={logo}>

            </Avatar>
        </div>
        {
            Sidebardata.map(item => (
                <ListItem button key={item.id} onClick={() => navigate(item.path)} >
                    <ListItemIcon className={classes.iconstyle}>{item.icon} </ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                </ListItem>
              
            ))
        }
    </div>
  )
}

export default Sidebardesign