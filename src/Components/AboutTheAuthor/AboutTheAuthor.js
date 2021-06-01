import React from 'react';
import profile from './meprofile.jpeg';
import './AboutTheAuthor.css';

export default function AboutTheAuthor() {
  return (
    <div className='author-container'>
      <h3 className='author-title'>AUTHOR: DAVID FERTITTA</h3>
      <div className='bio-container'>
        <img className='bio-image' alt='author' src={profile} />
        <p className='bio-text'>
          David is currently located in Denver CO, but his heart and sports
          loyalties remain in Chicago. You can find him on Twitter
          @Fertitta_David
        </p>
      </div>
    </div>
  );
}
