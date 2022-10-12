import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import logo from '../images/logo.svg';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./App.css";

function createData(
    name: string,
    calories: number,
    fat: number,
 
  ) {
    return { name, calories, fat};
  }

const notificationdata = [
    createData("Stock Replenishment", 159, 6.0),
  
  
  ];

  const Setting = ({setHeading}) => {
    useEffect(()=>{
        setHeading("Setting")
    },[])
    return (
     <>
            <div>

                
            <Grid container className="formstyle">
            <Grid item xs={12} sm={12} >
                <h5 align="left">Basic Information</h5>
                <Box
                    component="form"
                    sx={{
                    '& .MuiTextField-root': { m: 1, width: '45ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <div>
                    <TextField
                        id="outlined-textarea"
                        label="Full Name"
                        placeholder="Placeholder"
                        multiline
                    />
                    <TextField
                        id="outlined-textarea"
                        label="Email Address"
                        placeholder="Placeholder"
                        multiline
                    />
                        <TextField
                        id="outlined-textarea"
                        label="Phone Number"
                        placeholder="Placeholder"
                        multiline
                    />
                    </div>
                    </Box>
            </Grid>
            </Grid>

            <Grid container  className="connectedstyle">
                <Grid item xs={12} sm={6} >
                        <h6 align="left">Connected Applications</h6>
                            <Grid item xs={12} sm={12} >
                                <img src={logo} alt="shopify"/>Shopify  
                            </Grid>   
                                <br/>
                            <Grid item xs={12} sm={12} >
                                <img src={logo} alt="shopify"/>Shopify  
                            </Grid>  
                            <Grid item xs={12} sm={12} >
                                <img src={logo} alt="shopify"/>Shopify  
                            </Grid>         
                </Grid>
                    
            
                <Grid item xs={12} sm={6} >
                        <h6 align="left">Notification Settings</h6>
                        <Grid item xs={12} sm={6} >
                            <TableContainer  component={Paper}  sx={{ width: 500, height: 200 }} className="tablestyle">
                                    <Table aria-label="simple table">
                                        <TableHead>
                                        <TableRow className="tableborder">
                                        <TableCell align="right"></TableCell>
                                            <TableCell align="right">Email</TableCell>
                                            <TableCell align="right">Text</TableCell>
                                        
                                    
                                        </TableRow>
                                        </TableHead>
                                        <TableBody>
                                        {notificationdata.map((row) => (
                                            <TableRow
                                            key={row.name}
                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                            >
                                            <TableCell component="th" scope="row">
                                                {row.name}
                                            </TableCell>
                                            <TableCell align="right">{row.calories}</TableCell>
                                            <TableCell align="right">{row.fat}</TableCell>
                                            
                                            </TableRow>
                                        ))}
                                        </TableBody>
                                    </Table>
                            </TableContainer>
                         </Grid>
                 </Grid>
            </Grid>
            </div>
    </>
       );
    }
  export default Setting;