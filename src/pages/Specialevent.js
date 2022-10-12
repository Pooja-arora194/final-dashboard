import React, {useEffect} from "react";
import Table from "@mui/material/Table";
import logo from '../images/logo.svg';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { PureComponent } from "react";
import Paper from "@mui/material/Paper";
import "./App.css";


function createData(
    date: string,
    google: number,
    facebook: number,
   
  ) {
    return { date, google, facebook,  };
  }
  
  const rows = [
    createData("Aug-1-2022", '200$', '200$'),
    createData("Aug-1-2022", '200$', '200$'),
    createData("Aug-1-2022", '200$', '200$'),
    createData("Aug-1-2022", '200$', '200$'),
    createData("Aug-1-2022", '200$', '200$'),
    createData("Aug-1-2022", '200$', '200$'),
    createData("Aug-1-2022", '200$', '200$'),
  ];


  const Specialevent = ({setHeading}) => {
    useEffect(()=>{
      setHeading("Special Events")
  },[])
    return (
      
        <>
        <div className="container">
        <div className="row text-center">
          <div className="table-box text-center">
            <TableContainer
            component={Paper}
            className="specialeventstyle"
            sx={{ width: 700 }}
            >
            <Table aria-label="simple table">
            <TableHead>
                <TableRow className="tableborder">
                <TableCell align="left">Date</TableCell>
                <TableCell align="left">Google Ad $</TableCell>
                <TableCell align="left">Facebook Ad $</TableCell>
              
                </TableRow>
            </TableHead>
            <TableBody >
                {rows.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  
                    <TableCell align="left">{row.date}</TableCell>
                    <TableCell align="left">{row.google}</TableCell>
                    <TableCell align="left">{row.facebook}</TableCell>
                  
                </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
            </div>
            </div>
            </div>
        </>
            );
        }
      
      export default Specialevent;