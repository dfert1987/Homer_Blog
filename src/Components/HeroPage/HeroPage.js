import React from "react";
import {Button} from "../Button/Button";
import './HeroPage.css';
import '../../App.css';

function HeroSection() {
  return (
    <div className="hero-container">
      <h1 className="title">THE HOMER</h1>
      <h3 className="subtitle">Meatballs Welcome</h3>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--bigblueprimary"
          buttonSize="btn--xlarge"
        >
          ENTER
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--bigprimary"
          buttonSize="btn--xlarge"
          href="./Login"
        >
          LOGIN
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
