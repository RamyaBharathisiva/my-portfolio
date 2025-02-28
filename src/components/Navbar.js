import React from "react";
import {Link} from "react-scroll";
import "../Styles/Navbar.css";


const Navbar=()=>{
    return(
        <nav className="navbar">
            <h2>My Portfolio</h2>
            <ul>
                <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
                <li><Link to="about" smooth={true} duration={500}>About</Link></li>
                <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
                <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
                
            </ul>
        </nav>
    );
};



export default Navbar;