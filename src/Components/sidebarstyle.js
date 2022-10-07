import { makeStyles } from '@material-ui/core/styles';

export const sidebarstyle = makeStyles(theme => ({
    drawer: {   
        [theme.breakpoints.up('sm')]:{
            width: '200px'
        }
     
    },
    drawerPaper: {
        color:'white !important',
        backgroundColor: '#2a3757 !important',
        width: '200px'

    },
    logodiv: {
        borderBottom: '1px solid #004d40',
        padding: theme.spacing(4),
      
    },
    logostyle: {
        width: theme.spacing(14),
        height: theme.spacing(8)
    },
    iconstyle: {
        color:'white !important',
    }
}))