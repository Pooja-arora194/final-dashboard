import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Block } from '@mui/icons-material';


export const Navbartstyle = makeStyles(theme => ({
  navbarstyle: {
     marginLeft: '220px',
    backgroundColor: '#fafafa !important',
    color: 'black !important',
  
  
  },
  avatarstyle: {
    backgroundColor: '#2a3757 !important'
  },

  iconstyle: {
    color: '#000000eb !important',
    [theme.breakpoints.up('sm')]:{
      display: 'none !important'
    },

  
  
  },
  navbartitle: {
   
    [theme.breakpoints.up('xs')]:{
      display: 'hidden'
    },

  
  
  }
  
    
}));