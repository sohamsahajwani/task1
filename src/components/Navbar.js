import React from "react";
import "./Navbar.css"

const Navbar = () => {
  return (
    <div class="navbar">
      <div class="navbar-left">
        <div className="bajaj">bajaj</div>
        <div className="cc">consumer care</div>
      </div>
      <div className="navbar-right">
        <div className="no"><a href="#">98989 98989</a></div>
        <div className="nav-right">
        <div className="nr"><a href="#">ABOUT US</a></div>
        <div className="nr"><a href="#">OUR BRANDS</a></div>
        <div className="nr"><a href="#">MEDIA</a></div>
        <div className="nr"><a href="#">INVESTORS</a></div>
        <div className="nr"><a href="#">SUSTAINABILITY</a></div>
        <div className="nr"><a href="#">CAREERS</a></div>
        <div className="nr"><a href="#">BLOGS</a></div>
        <div className="nr"><a href="#">CONTACT US</a></div>
        </div>
      </div>
      </div>
  );
};

export default Navbar;
