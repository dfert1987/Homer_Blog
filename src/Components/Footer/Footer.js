import React, {useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import CreatePost from '../Footer/CreatePost';
import './Footer.css';

function Footer({setContactModal}) {
  const [user, setUser] = useState();

  const handleClick = () => {
    setContactModal(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    if (localStorage.token === 'null') {
      return null;
    } else {
      fetch('http://localhost:3000/profile', {
        headers: {
          Authorization: `Bearer ${localStorage.token}`,
        },
      })
        .then((response) => response.json())
        .then((result) => setUser(result));
    }
  }, []);

  const adminOptions = () => {
    if (user && user.admin === true) {
      return <CreatePost className='admin' />;
    } else {
      return null;
    }
  };

  return (
    <div className='footer-container'>
      <section className='footer-contact'>
        <p className='footer-contact-heading'>Comments? Questions? Problems?</p>
        <Button
          className='contact-button'
          buttonStyle='btn--outline1'
          onClick={handleClick}
        >
          CONTACT US
        </Button>
        {adminOptions()}
      </section>
    </div>
  );
}

export default Footer;
