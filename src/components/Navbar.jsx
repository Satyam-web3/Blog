import React, { useState, useContext } from 'react'
import { FaSearch } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
 
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && searchTerm.trim()) {
      navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
    }
  };


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
          <li ><input
              type="search"
              placeholder="Search blogs..."
              value={searchTerm}
              onChange={handleSearchChange}
              onKeyDown={handleKeyDown}
            /></li>
        </div>

      </div>


    </div>
  )
}
