import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  styled,
  InputBase
} from "@mui/material"
import React from "react"
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import SearchIcon from "@mui/icons-material/Search"



const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "white",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // Add a shadow effect
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height:'40px',
  [theme.breakpoints.up("sm")]: {
    width: "200px",
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
  height:'100%',
  [theme.breakpoints.up("md")]: {
    width: "20ch",
  },
 
}))

export default function Bottom() {
  const datas = [
    {
      id: "1",
      name: "Abstract 3D",
      stock: "32",
      price: "$ 45.99",
      totalSales: "20",
    },
    {
      id: "2",
      name: "Surphens illustrations",
      stock: "32",
      price: "$ 45.99",
      totalSales: "20",
    },
  ]
  const shadowStyle = {
    boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.2)",
    borderRadius: "10px",
  };
  return (
    <div style={{marginTop:'40px',...shadowStyle,height:'100%'}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',paddingBottom:'10px'}}>
        <Typography sx={{paddingLeft:'20px',fontSize:'19px',fontWeight:'700'}}>Product Sell</Typography>
        <div style={{display:'flex',gap:'70px',alignItems:'center'}}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon sx={{fontSize:'19px'}}/>
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search'
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <div style={{display:'flex',alignItems:'center'}}>
            <Typography sx={{fontSize:'12px',fontWeight:'700',color:'gray'}}>Last 30 days</Typography>
            <KeyboardArrowDownIcon sx={{paddingRight:'20px',fontSize:'19px', color:'gray'}}/>
          </div>
        </div>
      </div>
      <TableContainer>
        <Table sx={{minWidth:'800px'}}>
          <TableHead>
            <TableRow>
              <TableCell sx={{fontSize:'15px',fontWeight:'600',color:'gray'}}>Product Name</TableCell>
              <TableCell sx={{fontSize:'15px',fontWeight:'600',color:'gray'}}>Stock</TableCell>
              <TableCell sx={{fontSize:'15px',fontWeight:'600',color:'gray'}}>Price</TableCell>
              <TableCell sx={{fontSize:'15px',fontWeight:'600',color:'gray'}}>Total sales</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {datas.map((data) => (
              <TableRow key={data.id}>
                <TableCell sx={{ display: "flex", gap: "30px" }}>
                  <img alt='manager' src='manager.jpg' width={70} height={40} />
                  <div>
                    <Typography sx={{ fontSize: "18px", fontWeight: "700" }}>
                      {data.name}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "12px",
                        fontWeight: "700",
                        color: "gray",
                      }}
                    >
                      lorem sum jshdjasfk
                    </Typography>
                  </div>
                </TableCell>
                <TableCell align='left'>{data.stock}</TableCell>
                <TableCell align='left'>{data.price}</TableCell>
                <TableCell align='left'>{data.totalSales}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}
