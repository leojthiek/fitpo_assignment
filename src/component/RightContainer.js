import { InputBase, Typography, styled } from "@mui/material"
import React from "react"
import WavingHandIcon from "@mui/icons-material/WavingHand"
import SearchIcon from "@mui/icons-material/Search"
import CardComponent from "./CardComponent"
import Chart from "./Chart"
import Bottom from "./Bottom"

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a shadow effect
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    width: "300px",
  },
}))

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  padding: theme.spacing(1, 1, 1, 0),
  paddingLeft: "50px",
  width: "100%",
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
}))

export default function RightContainer() {
  return (
    <div
      style={{ paddingLeft: "50px", paddingRight: "50px", paddingTop: "30px" }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "24px", fontWeight: "600" }}>
          Hello Shahruk,{" "}
          <span>
            <WavingHandIcon sx={{ fontSize: "23px" }} />
          </span>{" "}
        </Typography>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
      </div>
      <div style={{paddingTop:'40px'}}>
        <CardComponent/>
      </div>
      <div style={{paddingTop:'40px'}}>
        <Chart/>
      </div>
      <div>
        <Bottom/>
      </div>
    </div>
  )
}
