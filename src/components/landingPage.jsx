import React from "react";
import DomainIcon from '@mui/icons-material/Domain';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddHomeWorkSharpIcon from '@mui/icons-material/AddHomeWorkSharp';
import LandingSearch from './landingSearch';
import Listing from './Listing';
// import Footer from './footer';


export default function landingPage(){
    return <div className="nav-bar2">
        <div className="nav-bar2-icons">
            <span><AddHomeIcon/> Home</span>
            <span><AddHomeWorkSharpIcon/> Apertment</span>
            <span><DomainIcon/>office space</span>
            
        </div>
        <LandingSearch/>
        <Listing/>
        {/* <Footer/> */}
        
          
            
    </div>
}