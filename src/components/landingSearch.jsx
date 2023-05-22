import {React} from "react";
import TextField from '@mui/material/TextField';


        

export default function  LandinSearch(){
  
    return <div className="search-banner">
        <div className="landingSearch-div">
           <TextField
                id="standard-helperText"
                label="Location"
                defaultValue=""
                helperText="Search by City/street/district"
                variant="standard"
                color="warning"
                focused="true"
            />
            <h1 style={{width:"300px",textAlign:"center", textShadow:"1px 1px black"}}>This is where the Netherlands finds a home..</h1>
        </div>
        <div className="search-div-button">
        <button className="btn">Rent out your Home</button>
        <button className="btn">Rent a Home</button>
        </div>
        
        
    </div>
}