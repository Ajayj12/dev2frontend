import { useEffect, useRef, useState } from "react";
import './App.css';
import myImage from '../Images/S.jpg'
const Header =()=>{

    const[sidebarOpen, setSidebar] = useState(false);

    
   
    const handleSideBar = () =>{
        setSidebar(!sidebarOpen);
    }

    
    
    return (
        <div>

            <div className="offer">
                <p>FLAT 40% OFF ON FIRST PURCHASE</p>
            </div>
            <div className={`container ${sidebarOpen ? 'sidebar-open' : ''}`}>
            <nav class="navbar">
                <a href="#" onClick={handleSideBar}><i class="fa fa-life-bouy side"></i></a>
                
                <a class="navbar-brand" href="/">STITCHCLUB</a>
                <div class="navbar-icons">

                    <a href="userlogin"><i class="fa fa-user-o  icon"></i></a>
                    <a href="search"><i class="fa fa-search  icon"></i> </a>
                    <a href="userlogin"><i class="fa fa-opencart icon"></i></a>
                    <a href="userlogin"><i class="fa fa-heart icon"></i></a>
                </div>

            </nav>
            <div id="sidebar" className="sidebar" >
                <a href="userlogin">LOGIN NOW</a>
                
                <a href="arrivals">BEST SELLING</a>
                <a href="userlogin">ORDER</a>
                <a href="userlogin">TRACK ORDER</a>
                <a href="store">VISIT STORE</a>
                <a href="support">SUPPORT</a>
            </div>
            </div>
            
        </div>
    )
}

export default Header;
