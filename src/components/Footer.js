import React from 'react'
import "./Footer.css"
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
        <div className='map'>
      <img src="globe.jpeg" alt=""/>
      <div className="button1">GLOBAL PRESENCE</div>
      </div>

        <div className='footer'>
            <div className='left'>
                <div><p>About Us | Our Brands | Media | Investors | Sustainability | Careers | Blogs | Contact Us | Bajaj Group</p></div>
                <div><p>&copy;2019-2022 Bajaj Consumer Care Ltd. All rights reserved.</p></div>
            </div>
            <div className='right'>
                <div className='follow'><p>Follow us &nbsp;<FaFacebook/>&nbsp;<FaYoutube/>&nbsp;<FaLinkedin/></p></div>
                <div><p>Terms and Conditions | Privacy Policy | Sitemap</p></div>
            </div>
        </div>

    </div>
  )
}

export default Footer
