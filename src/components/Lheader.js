import { useEffect, useRef, useState } from "react";
import './App.css';
import myImage from '../Images/S.jpg'
const Lheader =()=>{

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
                
                <a class="navbar-brand" href="ldashboard">STITCHCLUB</a>
                <div class="navbar-icons">

                    <a href="profile"><i class="fa fa-user-o  icon"></i></a>
                    <a href="search"><i class="fa fa-search  icon"></i> </a>
                    <a href="cart"><i class="fa fa-opencart icon"></i></a>
                    <a href="wishlist"><i class="fa fa-heart icon"></i></a>
                </div>

            </nav>
            <div id="sidebar" className="sidebar" >
                <a href="profile">ACCOUNT</a>
                <a href="arrivals">NEW ARRIVALS</a>
                <a href="arrivals">BEST SELLING</a>
                <a href="orders">ORDERS</a>
                <a href="trackOrder">TRACK ORDER</a>
                <a href="store">VISIT STORE</a>
                <a href="support">SUPPORT</a>
                <a href="userlogin">LOG OUT</a>
            </div>
            </div>
            
        </div>
    )
}

export default Lheader;
