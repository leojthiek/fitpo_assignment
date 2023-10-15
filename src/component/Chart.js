import { Grid, Typography } from "@mui/material"
import React from "react"
import {
  Bar,
  BarChart,
  XAxis,
} from "recharts"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import { donutData } from "./DonutData"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import "./Chart.css"


ChartJS.register(ArcElement, Tooltip, Legend);

const data = [
  {
    name: "Jan",
    uv: "300",
  },
  {
    name: "Feb",
    uv: "400",
  },
  {
    name: "Mar",
    uv: "100",
  },
  {
    name: "Apr",
    uv: "900",
  },
  {
    name: "May",
    uv: "1000",
  },
  {
    name: "Jun",
    uv: "390",
  },
  {
    name: "Jul",
    uv: "600",
  },
  {
    name: "Aug",
    uv: "1000",
    fill: 'blue',
  },
  {
    name: "Sep",
    uv: "470",
  },
  {
    name: "Oct",
    uv: "390",
  },
  {
    name: "Nov",
    uv: "300",
  },
  {
    name: "Dec",
    uv: "800",
  },
]



export default function Chart() {

  const shadowStyle = {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  };

  const donutOptions = {
    maintainAspectRatio: false, 
  };
  return (
    <Grid
      container
      sx={{
        height:"100%",
        width: "100%",
        display: "flex",
        gap: "120px",
        justifyContent: "center",
      }}
    >
      <Grid
        item
        lg={8}
        md={12}
        sx={{width:'100%',...shadowStyle }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            style={{
              paddingLeft: "20px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Typography sx={{ fontSize: "19px", fontWeight: "700" }}>
              Overview
            </Typography>
            <Typography
              sx={{ fontSize: "14px", fontWeight: "700", color: "gray" }}
            >
              Monthly Earning
            </Typography>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              paddingRight: "20px",
            }}
          >
            <Typography
              sx={{ fontSize: "12px", fontWeight: "700", color: "gray" }}
            >
              Quaterly
            </Typography>
            <KeyboardArrowDownIcon sx={{ fontSize: "19px", color: "gray" }} />
          </div>
        </div>
        <div className="chart-container">
        <BarChart width={1000} height={310} data={data}>
          <XAxis dataKey="name" />
          <Bar dataKey="uv" fill="rgb(249, 215, 210)" barSize={60} />
        </BarChart>
      </div>
      </Grid>
      <Grid
        item
        lg={3}
        md={12}

        sx={{ width: "100%", height: "100%",...shadowStyle }}
      >
        <Typography sx={{ fontSize: "19px", fontWeight: "700",paddingTop:'20px' }}>Customers</Typography>
        <Typography   sx={{ fontSize: "14px", fontWeight: "700", color: "gray" }}>Customers that buy products</Typography>
        <div style={{display:'flex',justifyContent:'center'}}>
        <div style={{ height:'300px',width:'350px',paddingTop:'20px'}}>
              <Doughnut data={donutData} options={donutOptions}/>
        </div>
        </div>
       
        
      </Grid>
    </Grid>
  )
}
