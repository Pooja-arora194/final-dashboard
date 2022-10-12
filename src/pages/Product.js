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

import "./App.css";
import Table from "@mui/material/Table";

import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Dashboard } from '@mui/icons-material';

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
 
) {
  return { name, calories };
}
const rows = [
  createData("Days left in stock", 159 ),
  createData("Lead time (link to edit)", 237),
  createData("Purchase Order Duration (link to edit)", 237),
 
];
const cardinal = curveCardinal.tension(0.2);
export default class Product extends PureComponent {
  // console.log(this.props)
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  constructor(props) {
    super(props);
    this.props.setHeading('Product')
  }
  // componentDidMount() {
  //   this.state.setHeading("product")
  //     // this.setState({setHeading: "Products"})
    
  // }

  render() {
    return (
      <>
     
        <Grid container spacing={3} className="productstyle" >
            <Grid item xs={12} sm={9} >
            {/* <h1> {this.state.setHeading}</h1> */}
                <AreaChart className='productstylechart'
                      width={1000}
                      height={400}
                      data={data}
                     
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
            
            <Grid item xs={12} sm={3} >
                  <Grid item xs={12} sm={12} >
                      <Card sx={{ width: { xs: 300, sm: 350 } }}  >
                            <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Amount to Order
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  3 Units
                              </Typography>
                            </CardContent>
                        
                      </Card>
                  </Grid>

                  <Grid item xs={12} sm={12} >
                      <Card sx={{ width: { xs: 300, sm: 350 } }}>
                            
                              <Typography gutterBottom variant="h5" component="div">
                              Replenishment Stats
                              </Typography>
                              <TableContainer
                                component={Paper}
                                className="replenishlist"
                                sx={{ width: 350 }}>
                                <Table aria-label="simple table">
                                  <TableHead>
                                    <TableRow className="tableborder">
                                      <TableCell align="left">Stock level</TableCell>
                                      <TableCell align="right">26</TableCell>
                                    
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
                                      
                                      </TableRow>
                                    ))}
                                  </TableBody>
                                </Table>
                              </TableContainer>
                        
                        
                      </Card>
                  </Grid>
            </Grid>
            </Grid>
            
         
      </>
    );
  }
}