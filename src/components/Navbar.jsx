import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";




export default function Navbar() {
  return (
    <div>
      <div className="top_section">
        <div className="left_section">
        <FaFacebook />
        <FaYoutube />
        <FaXTwitter />
        <FaInstagram />


        </div>
        <div className="right_section">
          
          
        </div>
      </div>

      <div className='Header'>
        <div className="Navbar">
          <li>Home</li>
          <li>Categories</li>
          <li>About Us</li>
          <li>Privacy Policy</li>
          <li ><FaSearch /></li>
        </div>
        
      </div>


    </div>
  )
}
