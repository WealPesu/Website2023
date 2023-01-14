import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import "../src/style/Navbar.css";
import logo from "./assets/WEAL.png";
import pesuLogo from "./assets/PES2.png";
import axios from "axios";
const Navbar = ({user}) => {
  axios.post("http://localhost:5000/api/currentuser",user)
  .catch((err)=>{
    console.log(err)
  })
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  const logout=()=>{
    window.open("http://localhost:5000/auth/logout","_self")
  }
    return (
      <>
        <div className="gradient"></div>
        <nav className="main-nav">
          {/* 1st logo part  */}
          <div className="logo">
            <NavLink to="/">
              <img src={logo} alt="logo" className="Logo" />
            </NavLink>
          </div>
  
          {/* 2nd menu part  */}
          <div
            className={
              showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
            }
          >
            <ul>
              <li>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="link-names"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Blog"
                  style={{ textDecoration: "none" }}
                  className="link-names"
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/Interface"
                  style={{ textDecoration: "none" }}
                  className="link-names"
                >
                  Interface
                </NavLink>
              </li>
              {
                user?(<ul style={{padding:0}}>
                  <li>
                    <img src={user.photos[0].value} alt="profile" className="profile-pic" width="48px" height="48px"/>
                  </li>
                  <li style={{color:"white",padding:"40px"}}>
                    {user.displayName}
                  </li>
                  <li>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none" }}
                  className="link-names toggler"
                  onClick={logout}
                >
                  Logout
                </NavLink>
              </li>
              </ul>
                ):(<Link className="link-names toggler" style={{textDecoration:"none",color:"white"}} to="/SignIn">Login</Link>)
              }
            </ul>
          </div>
          <img src={pesuLogo} alt="pesLogo" className="pesuLogo" />
  
          <div className="social-media">
            {/* hamburget menu start  */}
            <div className="hamburger-menu">
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                <GiHamburgerMenu style={{ color: "white" }} />
              </a>
            </div>
          </div>
        </nav>
      </>
    );
  
  
};

export default Navbar;