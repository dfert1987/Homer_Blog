import React from 'react';
import {Button} from '../Button/Button';
import './HeroPage.css';
import '../../App.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <h1 className='title'>THE HOMER</h1>
      <h3 className='subtitle'>Meatballs Welcome</h3>
      <div className='hero-btns'>
        <Button
          className='btn-right'
          buttonStyle='btn--bigblueprimary'
          buttonSize='btn--xlarge'
          href='./About'
        >
          About
        </Button>
        <Button
          className='btn-left'
          buttonStyle='btn--bigprimary'
          buttonSize='btn--xlarge'
          href='./Login'
        >
          Login
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
