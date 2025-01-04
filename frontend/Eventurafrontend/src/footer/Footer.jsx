import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Footer = ({ theme, settheme }) => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img
            src={
              theme == "light"
                ? "src/assets/logolight.png"
                : "src/assets/logodark.png"
            }
            alt="logo"
          />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </p>
          <br />

          <div className="footer-social-icons">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
            <FontAwesomeIcon icon={faTwitter} size="2x" />
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </div>
        </div>
        <div className="footer-content-centre">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>CONTACT</h2>
          <ul>
            <li>phone number</li>
            <li>email id</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        &copy; {new Date().getFullYear()} Eventura
      </p>
    </div>
  );
};

export default Footer;
