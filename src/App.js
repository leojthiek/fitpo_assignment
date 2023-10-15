import React, { useState } from 'react';
import { Grid, IconButton, styled, Drawer } from '@mui/material';
import LeftContainer from './component/LeftContainer';
import RightContainer from './component/RightContainer';
import ListIcon from '@mui/icons-material/List';

const FirstGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down('lg')]: {
    display: 'none',
  },
  position: 'sticky',
  top: 0,
  height: '100vh',
  overflowY: 'auto',
   backgroundColor:'rgb(3, 3, 56)'
}));

const SecondGrid = styled(Grid)({
  overflowY: 'auto',
});

const Menu = styled('div')(({ theme }) => ({
  backgroundColor: 'black',
  height: '50px',
  display: 'flex',
  alignItems: 'center',
  paddingLeft: '30px',
  [theme.breakpoints.up('lg')]: {
    display: 'none',
  },
}));

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <div className="App">
      <Menu>
        <IconButton onClick={toggleDrawer}>
          <ListIcon sx={{ color: 'white', fontSize: '25px' }} />
        </IconButton>
      </Menu>
      <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
      >
        <div style={{backgroundColor:'rgb(3,3,56)',height:'100vh'}}>
        <LeftContainer/>
        </div>
      </Drawer>
      <Grid container>
        <FirstGrid item md={2}>
          <LeftContainer/>
        </FirstGrid>
        <SecondGrid item md={10} className='rightContainer'>
          <RightContainer />
        </SecondGrid>
      </Grid>
    </div>
  );
}

export default App;
