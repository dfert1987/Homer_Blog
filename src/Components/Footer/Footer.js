import React from "react";
import {Button} from "../Button/Button";
import "./Footer.css";

function Footer({setContactModal}) {
  const handleClick = () => setContactModal(true);

  return (
    <div className="footer-container">
    
      <section className="footer-contact">
        <p className="footer-contact-heading">
          Comments? Quesstions? Problems?
        </p>
        <Button buttonStyle="btn--outline2" onClick={handleClick}>
          CONTACT US
        </Button>
      </section>
    </div>
  );
}

export default Footer;
