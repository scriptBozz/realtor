import React from "react"
import PersonOutlineSharpIcon from '@mui/icons-material/PersonOutlineSharp';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Link } from "react-router-dom";

export default function NavItems(){
    return <div className="Nav-Items">
        <div className="menu-items">
            <h2 className="logo-text menu-item1">Realtor</h2>
            <div className="menu-items2">
                
                <Link to=""><li>Home</li></Link>
                <Link to="/Listings"><li>Listings</li></Link>
                <button className=""><PhoneInTalkIcon/></button>
                <Link to="/Login"><li>Login </li></Link>
                <PersonOutlineSharpIcon />
            </div>

        </div>

    </div>
}