import React from "react";
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
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
    details: string
  ) {
    return { name, calories, fat, carbs, protein, details };
  }
  
  const rows = [
    createData("Product#1", 159, 6.0, 24, 4.0, "More Details"),
    createData("Product#2", 237, 9.0, 37, 4.3, "More Details"),
    createData("Product#3", 237, 9.0, 37, 4.3, "More Details"),
    createData("Product#4", 237, 9.0, 37, 4.3, "More Details"),
  ]

  export default class Allsku extends PureComponent {
    static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";
  
   
    constructor(props) {
      super(props);
      this.props.setHeading('All Sku')
    }
   
    render() {
      return (
                    <>
                    
            <TableContainer
            component={Paper}
            className="allskutable"
            sx={{ width: 1500 }}
            >
            <Table aria-label="simple table" sx={{height: 400}}>
            <TableHead>
                <TableRow className="tableborder">
                  
                <TableCell align="left">Product name</TableCell>
                <TableCell align="right">SKU No.</TableCell>
                <TableCell align="right">Amount to order</TableCell>
                <TableCell align="right">Inventory level</TableCell>
                <TableCell align="right">No. Days left</TableCell>
                <TableCell align="right"></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                    <TableCell component="th" scope="row">
                    {row.name}
                    </TableCell>
                    <TableCell align="right">{row.calories}</TableCell>
                    <TableCell align="right">{row.fat}</TableCell>
                    <TableCell align="right">{row.carbs}</TableCell>
                    <TableCell align="right">{row.protein}</TableCell>
                    <TableCell align="right">{row.details}</TableCell>
                </TableRow>
                ))}
            </TableBody>
            </Table>
            </TableContainer>
         
        </>
            );
        }
      }