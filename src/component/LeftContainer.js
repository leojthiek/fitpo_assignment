import {
  Avatar,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material"
import React from "react"
import "./LeftContainer.css"
import DashboardIcon from "@mui/icons-material/Dashboard"
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize"
import CategoryIcon from "@mui/icons-material/Category"
import AccountBoxIcon from "@mui/icons-material/AccountBox"
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet"
import OutboundIcon from "@mui/icons-material/Outbound"
import HelpCenterIcon from "@mui/icons-material/HelpCenter"
import ChevronRightIcon from "@mui/icons-material/ChevronRight"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"

export default function LeftContainer() {
  return (
    <div style={{height:'90vh'}}>
      <div className='LeftMain'>
        <DashboardIcon sx={{ color: "white", fontSize: "2rem" }} />
        <Typography className='LeftTitle'>Dashboard</Typography>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <div style={{ paddingTop: "30px" }}>
          <List sx={{ paddingLeft: "30px" }}>
            <ListItem
              sx={{
                color: "white",
                backgroundColor: "rgb(68, 68, 150)",
                borderRadius: "10px",
                marginBottom: "20px",
              }}
            >
              <ListItemIcon>
                <DashboardCustomizeIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItem>
            <ListItem sx={{ color: "white", marginBottom: "20px" }}>
              <ListItemIcon>
                <CategoryIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Product' />
              <ListItemIcon sx={{ color: "white" }}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ color: "white", marginBottom: "20px" }}>
              <ListItemIcon>
                <AccountBoxIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Customer' />
              <ListItemIcon sx={{ color: "white" }}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ color: "white", marginBottom: "20px" }}>
              <ListItemIcon>
                <AccountBalanceWalletIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Income' />
              <ListItemIcon sx={{ color: "white" }}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ color: "white", marginBottom: "20px" }}>
              <ListItemIcon>
                <OutboundIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Promote' />
              <ListItemIcon sx={{ color: "white" }}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItem>
            <ListItem sx={{ color: "white", marginBottom: "20px" }}>
              <ListItemIcon>
                <HelpCenterIcon sx={{ color: "white" }} />
              </ListItemIcon>
              <ListItemText primary='Help' />
              <ListItemIcon sx={{ color: "white" }}>
                <ChevronRightIcon />
              </ListItemIcon>
            </ListItem>
          </List>
        </div>
        <div style={{height:'70px',display:'flex',flexDirection:'column',backgroundColor:'darkblue',justifyContent:'center',marginLeft:'10px',marginRight:'10px',borderRadius:'10px'}}>
        <div style={{color:'white',display:'flex',justifyContent:'space-between'}}>
            <div style={{display:'flex',paddingLeft:'10px'}}>
                <Avatar alt="manager" src="/manager.jpg"/>
                <div style={{paddingLeft:'15px'}}>
                    <Typography sx={{fontSize:'15px',fontWeight:'700'}}>Evano</Typography>
                    <Typography sx={{fontSize:'13px',fontWeight:'700',color:'gray'}}>Project manager</Typography>
                </div>
            </div>
            <div style={{paddingRight:'10px'}}>
            <IconButton sx={{color:'white'}}>
                <KeyboardArrowDownIcon/>
            </IconButton>
            </div>
           
        </div>
        </div>
       
      </div>
    </div>
  )
}
