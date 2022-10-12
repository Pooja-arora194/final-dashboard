import React from 'react'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import Typography from "@material-ui/core/Typography";
import { curveCardinal } from "d3-shape";
import { PureComponent } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@material-ui/core/Grid";
import Table from "@mui/material/Table";
import logo from '../images/logo.svg';
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./App.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];
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
];

    const cardinal = curveCardinal.tension(0.2);
    export default class Replenish_Now extends PureComponent {
      static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

      constructor(props) {
        super(props);
        this.props.setHeading('Replenish Now')
      }
  render() {
    return (
      <>
        <Grid container >
             <Grid item xs={12} sm={12} >
                <AreaChart className='replenishchart'
                      width={1500}
                      height={400}
                      data={data}
                      margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0
                      }}
                >
                                      <CartesianGrid strokeDasharray="3 3" />
                                      <XAxis dataKey="name" />
                                      <YAxis />
                                      <Tooltip />
                                      <Area
                                        type="monotone"
                                        dataKey="uv"
                                        stroke="#8884d8"
                                        fill="#8884d8"
                                        fillOpacity={0.3}
                                      />
                                  <Area
                                    type={cardinal}
                                    dataKey="uv"
                                    stroke="#82ca9d"
                                    fill="#82ca9d"
                                    fillOpacity={0.3}
                                  />
                        </AreaChart>
                                
              </Grid>
          </Grid> 


      <Grid container > 
          <Grid item xs={12} sm={12}     >
          
            <TableContainer
              component={Paper}
              className="replenishlist"
              sx={{ width: 1500 }}>
              <Table aria-label="simple table">
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
          </Grid>
        </Grid>
   
         
      </>
    );
  }
}