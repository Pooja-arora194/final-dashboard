
import { Avatar, ListItem, ListItemIcon, ListItemText } from '@material-ui/core'
import React from 'react'
import { sidebarstyle } from './sidebarstyle'
import HomeIcon from '@mui/icons-material/Home';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { useNavigate } from "react-router-dom";
import logo from '../images/logo.svg';
const Sidebardata = ({heading}) => {

    console.log("bigscreen", heading);

    const classes = sidebarstyle();
    const navigate = useNavigate();

    const Sidebardatas = [
        {
            id: 1,
            title: 'Dashboard',
            path: '/',
            icon: <HomeIcon/>,
            headingType:"mainHeading"
    
            
        },
        {
            title: "Replenish_Now",
            path: "/replenish_now",
            icon: <FiberManualRecordIcon/>,
            headingType:"subHeading"
        
        },
        {
            title: "Replenish_Soon",
            path: "/replenish_soon",
            icon: <FiberManualRecordIcon/>,
            headingType:"subHeading"

        
        },
        {
            title: "All SKUs",
            path: "/allsku",
            icon: <FiberManualRecordIcon/>,
            headingType:"subHeading"

        
        },
        {
            title: "Special Events",
            path: "/specialevent",
            icon: <HomeIcon/>,
            headingType:"mainHeading"
        
        },
        {
            title: "Settings",
            path: "/setting",
            icon: <HomeIcon/>,
            headingType:"mainHeading"
        
        },
        {
            title: "Products",
            path: "/product",
            icon: <HomeIcon/>,
            headingType:"mainHeading"
        
        }
        
     
    ]
  return (
    <div>
        <div className={classes.logodiv}>
         
            <Avatar alt='logo' variant='square' className={classes.logostyle} src={logo}>

            </Avatar>
                   
        </div>
        {
         
            Sidebardatas.map(item => (
                item.headingType==="mainHeading"?
                <ListItem button key={item.id} onClick={() => navigate(item.path)} >
                    <ListItemIcon className={classes.iconstyle}>{item.icon} </ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                </ListItem>
                :
                <div className="subHeading">
                <ListItem button key={item.id} onClick={() => navigate(item.path)} >
                    <ListItemIcon className="subheading">{item.icon} </ListItemIcon>
                    <ListItemText>{item.title}</ListItemText>
                </ListItem>
                </div>
              
            ))
        }
    </div>
  )
}

export default Sidebardata