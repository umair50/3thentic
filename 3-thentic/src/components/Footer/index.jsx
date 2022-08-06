import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  faFacebook,
  faInstagram,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-icon-item">
        <FontAwesomeIcon icon={faTwitter} />
      </div>
      <div className="footer-icon-item">
        <FontAwesomeIcon icon={faFacebook} />
      </div>
      <div className="footer-icon-item">
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
};

export default Footer;
