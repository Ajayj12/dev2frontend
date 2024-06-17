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
                
                <a class="navbar-brand" href="javascript:void(0)">SNITCH</a>
                <div class="navbar-icons">

                    <a href="#"><i class="fa fa-user-o  icon"></i></a>
                    <a href="#"><i class="fa fa-search  icon"></i> </a>
                    <a href="#"><i class="fa fa-opencart icon"></i></a>
                    <a href="#"><i class="fa fa-heart icon"></i></a>
                </div>

            </nav>
            <div id="sidebar" className="sidebar" >
                <a href="userlogin">LOGIN NOW</a>
                <a href="arrivals">NEW ARRIVALS</a>
                <a href="arrivals">BEST SELLING</a>
                <a href="luxury">SNITCH LUXE</a>
                <a href="trackOrder">TRACK ORDER</a>
                <a href="store">VISIT STORE</a>
                <a href="support">SUPPORT</a>
            </div>
            </div>
            
        </div>
    )
}

export default Header;
