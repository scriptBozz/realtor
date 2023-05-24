import{ React} from "react";
import DomainIcon from '@mui/icons-material/Domain';
import AddHomeIcon from '@mui/icons-material/AddHome';
import AddHomeWorkSharpIcon from '@mui/icons-material/AddHomeWorkSharp';
import LandingSearch from './landingSearch';
import Listing from './Listing';
import Tooltip from '@mui/material/Tooltip';


// import Footer from './footer';


export default function landingPage(){
    

    return <div className="nav-bar2">
        <div className="nav-bar2-icons">
           <Tooltip disableFocusListener title="click to see homes"><span><AddHomeIcon/> Home</span></Tooltip> 
            <Tooltip disableFocusListener title="click to see Apertments"><span><AddHomeWorkSharpIcon/> Apertment</span></Tooltip>
            <span><DomainIcon/>office space</span>
            
        </div>
        <LandingSearch/>
        <Listing/>
        {/* <Footer/> */}
        
          
            
    </div>
}