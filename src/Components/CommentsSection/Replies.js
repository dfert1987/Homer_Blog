import React, {useState, useEffect} from 'react';
import {Button} from '../Button/Button';

function Replies() {
  return (
    <div className='replies-container'>
      <div className='main-row'>
          <i className="fas fa-share"></i>
          <button className='show-replies'>1 Reply</button>
      </div>
    </div>
  );
}

export default Replies;
