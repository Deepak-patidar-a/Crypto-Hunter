import React from 'react'
import {AppBar, Container, createTheme, MenuItem, Select, ThemeProvider, Toolbar , Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { CryptoState } from '../CryptoContext';

const Header = () => {
  
  const {currency , setCurrency } = CryptoState("");

  const darkTheme = createTheme({
    palette:{
      primary:{
        main: "#fff",
      },
      mode: 'dark',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
    <AppBar className='navbar' color="transparent" position="static">
    <Container>
    <Toolbar>
    <Typography variant="h6" fontWeight="bolder" style={{ flex: 1 }}>
    <Link to="/">Crypto Hunter</Link></Typography>
    <Select variant='outlined' style={{width:'100px',height:'40px', margin:'0px 0px 0px 15px'}}
    value={currency} onChange={(e) => setCurrency(e.target.value)}>
      <MenuItem value={"USD"}>USD</MenuItem>
      <MenuItem value={"INR"}>INR</MenuItem>
    </Select>
    </Toolbar>
    </Container>
    </AppBar>
    </ThemeProvider>
  )
}

export default Header
