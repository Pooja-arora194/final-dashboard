import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { PureComponent } from "react";
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
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./App.css";

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
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
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "More Details"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "More Details"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "More Details"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "More Details"),
];

const rowsdata = [
  createData("Frozen yoghurt", 159, 6.0, 24),
  createData("Ice cream sandwich", 237, 9.0, 37),

];




export default class Home extends PureComponent {
  static demoUrl = "https://codesandbox.io/s/simple-line-chart-kec3v";

  constructor(props) {
    super(props);
    this.props.setHeading('Dashboard')
  }
 
  render() {
    return (
      <>
      
        <div className="cardstyle">
        {/* <p>{this.state.setHeading}</p> */}
          <Grid container >
            <Grid item xs={12} sm={4} sx={{ marginLeft: { xs: "0px" } }}>
              <Card sx={{ maxWidth: { xs: 300, sm: 470 } }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Replenish Now
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     <h2>3 SKUs</h2>
                  </Typography>
                </CardContent>
                
                <CardActions>
                    <Button >View All</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ marginLeft: { xs: "0px" } }}>
              <Card sx={{ maxWidth: { xs: 300, sm: 470 } }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Replenish Now
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <h2>3 SKUs</h2>
                  </Typography>
                </CardContent>
                <CardActions>
                   <Button >View All</Button>
                </CardActions>
              </Card>
            </Grid>

            <Grid item xs={12} sm={4} sx={{ marginLeft: { xs: "0px" } }}>
              <Card sx={{ maxWidth: { xs: 300, sm: 470 } }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  All SKUs
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                  <h2>3 SKUs</h2>
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button >View All</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </div>
       
        {/* <ResponsiveContainer> */}
                <LineChart className="chartstyle"
                    width={1500}
                    height={500}
                  data={data}
                  
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    activeDot={{ r: 8 }}
                  />
                  <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
              {/* </ResponsiveContainer> */}
        

        {/* <TableContainer
          component={Paper}
          className="tablestyle "
          sx={{ width: 1500 }}
        >
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
        </TableContainer> */}

        {/* <TableContainer component={Paper} className="listing">
      <Table sx={{ width: 1500 }} aria-label="simple table">
        <TableHead>
          <TableRow className="tableborder">
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
       
          </TableRow>
        </TableHead>
        <TableBody>
          {rowsdata.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
        
            </TableRow>
          ))}
        </TableBody>
      </Table>  
    </TableContainer> */}

      {/* <div className="formstyle">

     
        <Grid container >
          <Grid item xs={12} sm={12} >
            <h5 align="left">Basic Information</h5>
              <Box
                component="form"
                sx={{
                  '& .MuiTextField-root': { m: 1, width: '50ch' },
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

        <Grid container  className="connectedstyle"  >
          <Grid item xs={12} sm={6} >
                <h6 align="left">Connected Applications</h6>
                        <img src={logo} alt="shopify"/>Shopify     
                        <br/>
                        <img src={logo} alt="shopify"/>Shopify 
                        <br />
                        <img src={logo} alt="shopify"/>Shopify         
          </Grid>
                
          
          <Grid item xs={12} sm={6} >
                <h6 align="left">Notification Settings</h6>
                <TableContainer
          component={Paper}
          
          sx={{ width: 500 }}
        >
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
        </div> */}
      </>
    );
  }
}
