import { Card, CardContent, Typography } from "@mui/material"
import React from "react"
import PaidOutlinedIcon from "@mui/icons-material/PaidOutlined"
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined"
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined"
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';    
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';    

export default function CardComponent() {
  return (
    <div style={{display:'flex',gap:'70px',flexWrap:'wrap',justifyContent:'center'}}>
      <Card sx={{ width: 310 }}>
        <CardContent sx={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "rgb(210,243,210)",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <PaidOutlinedIcon sx={{ fontSize: "70px", color: "green" }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "15px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "700", color: "gray" }}
            >
              Earning
            </Typography>
            <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
              $198K
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ArrowUpwardOutlinedIcon
                sx={{ fontSize: "14px", color: "green" }}
              />
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                {" "}
                <span style={{ color: "green" }}>37.8% </span>this month
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card sx={{ width: 310 }}>
        <CardContent sx={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "rgb(243, 226, 226)",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ListAltOutlinedIcon sx={{ fontSize: "70px", color: "purple" }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "15px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "700", color: "gray" }}
            >
              Orders
            </Typography>
            <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
              $2.4K
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ArrowDownwardOutlinedIcon
                sx={{ fontSize: "14px", color: "red" }}
              />
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                {" "}
                <span style={{ color: "red" }}>2% </span>this month
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card sx={{ width: 310 }}>
        <CardContent sx={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "rgb(202, 239, 230)",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AccountBalanceWalletOutlinedIcon sx={{ fontSize: "70px", color: "blue" }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "15px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "700", color: "gray" }}
            >
              Balance
            </Typography>
            <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
              $2.5K
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ArrowDownwardOutlinedIcon
                sx={{ fontSize: "14px", color: "red" }}
              />
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                {" "}
                <span style={{ color: "red" }}>2% </span>this month
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
      <Card sx={{ width: 310 }}>
        <CardContent sx={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: "rgb(226, 175, 175)",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ShoppingBagOutlinedIcon sx={{ fontSize: "70px", color: "red" }} />
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "15px",
            }}
          >
            <Typography
              sx={{ fontSize: "14px", fontWeight: "700", color: "gray" }}
            >
              Total Sales
            </Typography>
            <Typography sx={{ fontSize: "28px", fontWeight: "700" }}>
              $89K
            </Typography>
            <div style={{ display: "flex", alignItems: "center" }}>
              <ArrowUpwardOutlinedIcon
                sx={{ fontSize: "14px", color: "green" }}
              />
              <Typography sx={{ fontSize: "14px", fontWeight: "600" }}>
                {" "}
                <span style={{ color: "green" }}>11% </span>this week
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
