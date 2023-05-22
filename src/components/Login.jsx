import  React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div style={{display:"flex",justifyContent:"center", alignItems:"center",height:"100vh"}}>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField 
      label="Email address" 
      color="warning" 
      style={{width:"500px"}}
      focused /> <br/>
      <TextField 
      label="Password" 
      color="warning" 
      style={{width:"500px"}}
      focused />
      <div className='form-btn'>
      <Button variant="contained" style={{width:"500px",backgroundColor:"#fdb338"}}>Login</Button>
      <Button variant="contained" style={{width:"500px", backgroundColor:"#fdb338"}} endIcon={<FacebookSharpIcon />}>login with facebook</Button>
      <hr/>
     
           <Button variant="contained" style={{width:"500px", backgroundColor:"#fdb338"}} > <Link to="/register">Register</Link></Button>
        
      </div>
      <p style={{width:"500px", textAlign:"center"}}>Broker? Login for <a href='/'>Realtor Agents</a></p>
      
    </Box>
    </div>
  );
}