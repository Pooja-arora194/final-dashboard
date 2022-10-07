import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


export const Navbartstyle = makeStyles(theme => ({
  navbarstyle: {
    // marginLeft: '180px',
    backgroundColor: '#fafafa !important',
    color: '#fafafa !important'
    
  },
  avatarstyle: {
    backgroundColor: '#2a3757 !important'
  },

  iconstyle: {
    color: '#000000eb !important',
    [theme.breakpoints.up('sm')]:{
      display: 'none !important'
    },

  
  
  }
    
}));