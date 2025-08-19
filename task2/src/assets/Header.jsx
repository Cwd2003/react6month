import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const Header = () => {
  return (
    <header>
      {/* Top Contact Bar */}
      <div className="top-bar">
        <div className="contact-info">
          <MdEmail className="icon" />
          <span>info@example.com</span>
        </div>
        <div className="contact-info">
          <MdPhone className="icon" />
          <span>+012 345 6789</span>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="main-header">
        {/* Logo */}
        <div className="logo">CHEFER</div>

        {/* Navigation Menu */}
        <nav>
          <a href="/" className="active">Home</a>
          <a href="/about">About</a>
          <a href="/menu">Menu</a>
          <a href="/chefs">Chefs</a>
          <a href="/pages">Pages ▼</a>
          <a href="/contact">Contact</a>
        </nav>

        {/* Social Icons */}
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaLinkedinIn /></a>
        </div>
      </div>
    </header>
  );
};

export default Header;
