import React from "react";
import '../css/navbar.css';
import logo from "../images/logo.png"; 
 function Navbar(){
    return (<>
     <nav className="navbar">
            <div className="navbar-left">
                <a href="#" className="logo"><img src={logo}/></a>
            </div>
            <div className="navbar-right">
                <form className="search-form">
                    <input type="text" placeholder="Search" />
                    <button type="submit">Search</button>
                </form>
            </div>
        </nav>
    </>);
 }
 export default Navbar;