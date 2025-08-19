import React from 'react'
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaInstagram, FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
function Footer() {
  return (
    <div>
    <footer className="footer">
      {/* Top Gallery */}
      <div className="footer-gallery">
        <img src="https://th.bing.com/th/id/OIP.OM_YQDFEEZ6NPj0XapYwFgHaEo?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="food1" />
        <img src="https://tse1.mm.bing.net/th/id/OIP.jJI3bTJ-diLfKDHb9-vwmwHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="food2" />
        <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?cs=srgb&dl=appetizer-bowl-delicious-1640772.jpg&fm=jpg" alt="food3" />
        <div className="insta-icon">
          <FaInstagram />
        </div>
        <img src="https://tse2.mm.bing.net/th/id/OIP.maQpFJiRuDMauaTZ3N7KiQHaEo?r=0&w=1920&h=1200&rs=1&pid=ImgDetMain&o=7&rm=3" alt="food4" />
        <img src="https://th.bing.com/th/id/R.ac9f117734f719ca044b312cf4732198?rik=jPq0dtWzjb0PlA&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fc%2fb%2f2%2f1184187-gorgerous-healthy-food-wallpaper-1920x1080.jpg&ehk=EAl2ZEyVAx9nViEGWKi%2frfcOV4hcpl1Ml%2biU9H%2fVJhg%3d&risl=&pid=ImgRaw&r=0" alt="food5" />
        <img src="https://th.bing.com/th/id/OIP.cAyEA1EmbGJgD9iUTpTgFwHaLH?r=0&o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3" alt="food6" />
      </div>

      {/* Bottom Info Row */}
      <div className="footer-content">
        {/* Get in Touch */}
        <div className="footer-box">
          <h3>Get In Touch</h3>
          <p><FaMapMarkerAlt /> 123 Street, New York, USA</p>
          <p><FaEnvelope /> info@example.com</p>
          <p><FaPhone /> +012 345 67890</p>
          <div className="social">
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaInstagram /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-box">
          <h3>Quick Links</h3>
          <a href="#">➜ Home</a>
          <a href="#">➜ About Us</a>
          <a href="#">➜ Food Menu</a>
          <a href="#">➜ Our Chefs</a>
          <a href="#">➜ Latest Blog</a>
          <a href="#">➜ Contact Us</a>
        </div>

        {/* More Links */}
        <div className="footer-box">
          <h3>More Links</h3>
          <a href="#">➜ Home</a>
          <a href="#">➜ About Us</a>
          <a href="#">➜ Food Menu</a>
          <a href="#">➜ Our Chefs</a>
          <a href="#">➜ Latest Blog</a>
          <a href="#">➜ Contact Us</a>
        </div>

        {/* Newsletter */}
        <div className="footer-box newsletter">
          <h3>Newsletter</h3>
          <strong>SUBSCRIBE OUR NEWSLETTER</strong>
          <p>Amet justo diam dolor rebum lorem sit stet sea justo kasd</p>
          <form>
            <input type="email" placeholder="Your Email" />
            <button type="submit">Sign Up</button>
          </form>
        </div>
      </div>
    </footer>
export default Footer;

     
      
    </div>
  )
}

export default Footer
