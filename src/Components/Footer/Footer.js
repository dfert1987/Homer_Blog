import React, {useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import CreatePost from '../Footer/CreatePost';
import './Footer.css';

function Footer({setContactModal}) {
  const [user, setUser] = useState();
  const handleClick = () => setContactModal(true);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  const adminOptions = () => {
    if (user && user.admin === true) {
      return <CreatePost className='admin' />;
    }
    return null;
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
