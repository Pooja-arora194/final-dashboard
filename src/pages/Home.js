import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import { PureComponent } from "react";
import { LineChart, Line, XAxis, YAxis,CartesianGrid, Tooltip, Legend,
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
     
          <Grid container >
            <Grid item xs={12} sm={4} sx={{ marginLeft: { xs: "0px" } }}>
              <Card sx={{ maxWidth: { xs: 300, sm: 470 } }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                  Replenish Now
                  </Typography>
                  <Typography variant="body2" >
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
                  <Typography variant="body2">
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
                  <Typography variant="body2" >
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
          
      </>
    );
  }
}
