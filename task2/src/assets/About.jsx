import React from "react";
import { FaUserTie } from "react-icons/fa";
import { GiTeapotLeaves } from "react-icons/gi";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">

        {/* Left Image with rotating text */}
        <div className="about-image">
          <div className="rotating-text">
           <svg viewBox="0 0 200 200" width="400" height="400">
  <defs>
    <path
      id="circlePath"
      d="M 100, 100 m -90, 0 a 90,90 0 1,1 180,0 a 90,90 0 1,1"
    />
  </defs>
  <text fontSize="16" fontWeight="bold" letterSpacing="3">
    <textPath href="#circlePath" startOffset="0%">
      BEST CHEF • MENU VARIETY • QUALITY FOOD • DELICIOUS TASTE •
    </textPath>
  </text>
</svg>



          </div>

          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092"
            alt="Chef cooking"
          />
        </div>

        {/* Right Content */}
        <div className="about-content">
          <p className="about-subtitle">ABOUT US</p>
          <h1 className="about-title">
            Cooking Together <br /> With The Expert
          </h1>
          <p className="about-text">
            Nonumy erat diam duo labore clita. Sit magna ipsum dolor sed ea duo
            at ut. Tempor sit lorem sit magna ipsum duo. Sit eos dolor ut sea
            rebum, diam sea rebum lorem kasd ut ipsum dolor est ipsum. Et stet
            amet justo amet clita erat, ipsum sed at ipsum eirmod labore lorem.
          </p>

          {/* Features */}
          <div className="about-features">
            <div className="feature-card">
              <div className="feature-icon">
                <FaUserTie size={30} color="white" />
              </div>
              <div>
                <h3>Master Chefs</h3>
                <p>
                  Tempor erat elit at rebum at at clita aliquyam consetetur.
                  Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                </p>
              </div>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <GiTeapotLeaves size={30} color="white" />
              </div>
              <div>
                <h3>Quality Food</h3>
                <p>
                  Tempor erat elit at rebum at at clita aliquyam consetetur.
                  Diam dolor diam ipsum et, tempor voluptua sit consetetur sit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
