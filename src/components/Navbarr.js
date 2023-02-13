import "./Navbarr.css"
import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaBars, FaTimes } from "react-icons/fa"

const Navbarr = () => {

    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);

  return (
    <div className="header">
      <div className="nf">BAJAJ CONSUMER CARE</div>
      <div className={click ? "nav-menu active" : "nav-menu"}>
        <div className="nr"><a href="#">ABOUT US</a></div>
        <div className="nr"><a href="#">OUR BRANDS</a></div>
        <div className="nr"><a href="#">MEDIA</a></div>
        <div className="nr"><a href="#">INVESTORS</a></div>
        <div className="nr"><a href="#">SUSTAINABILITY</a></div>
        <div className="nr"><a href="#">CAREERS</a></div>
        <div className="nr"><a href="#">BLOGS</a></div>
        <div className="nr"><a href="#">CONTACT US</a></div>
      </div>
      <div className="hamburger" onClick={handleclick} >
        {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />) }
     </div>
    </div>
  )
}

export default Navbarr
