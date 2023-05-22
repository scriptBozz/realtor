import React from "react";
import TextField from '@mui/material/TextField';
import MailOutlineSharpIcon from '@mui/icons-material/MailOutlineSharp';
import FacebookSharpIcon from '@mui/icons-material/FacebookSharp';
import PhoneEnabledSharpIcon from '@mui/icons-material/PhoneEnabledSharp';
// import { Margin } from "@mui/icons-material";

export default function Footer(){
    return <div className="footer-div">

            <form>
                <label>
                    <TextField id="standard-basic" label="enter your name" variant="standard" type="text" name="name" style={{width:"400px",margin:"5px", color:"black"}} />
                </label>
                <br/>
                 <label>
                    <TextField id="standard-basic" label="enter a valid email address" variant="standard" style={{width:"400px", margin:"5px"}}/>
                </label>
                <br/>
                    <TextField
                        id="filled-multiline-static"
                        label="Leave a message"
                        multiline
                        rows={3}
                        defaultValue=""
                        variant="filled"
                        style={{width:"400px",margin:"5px"}}
                        />
                        <br/>
                        <button className="btn"style={{marginLeft:"3px"}}>REACH OUT</button>
      
            </form>

       <div>
        <h1 style={{fontSize:"60px",color:"#1f203a"}}>Realtor</h1>
        <div className="footer-icons">
            <span><MailOutlineSharpIcon/></span>
            <span><FacebookSharpIcon/></span>
            <span><PhoneEnabledSharpIcon/></span>
         </div>
        
         </div>
        
    </div>
}