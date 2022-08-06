import React from "react";
import Nav from "../Nav";
import "./index.css";
// import Ticket from "../../assets/Ticket.jpg";
import Rectangle from "../../assets/Rectangle.png";
const Hero = ({ address, setAddress }) => {
  return (
    <div className="hero-background">
      <Nav address={address} setAddress={setAddress} />
      <div className="hero-container">
        <div className="hero-content-container">
          <div className="hero-content-header-container">
            <div className="hero-content-header">
              <span className="hero-content-header-text1">Fighting ticket</span>
              <span className="hero-content-header-text2">fraud with the</span>
              <span className="hero-content-header-text3">
                security of the Block Chain
              </span>
            </div>
          </div>
          <div className="hero-content-desc">
            Unique and customized event specific NFT’s that can be used as proof
            of ownership and to build community. We can work with your ticketing
            platform to build NFT contracts that automatically execute to create
            a unique NFT for each ticket type for your event. If you have
            questions check out our{" "}
            <a
              href="https://festywesty.com/faq-page/"
              rel="noreferrer"
              target="_blank"
              className="faq_redirect"
            >
              FAQ page.
            </a>
          </div>
        </div>
        <div className="hero-img-container">
          <img src={Rectangle} className="hero-img" alt="hero-img.png" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
