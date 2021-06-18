import React, {useState, useEffect} from 'react';
import '../../App.css';
import HeroPage from '../HeroPage/HeroPage';
import Cards from '../../Components/Card/Cards';
import Footer from '../../Components/Footer/Footer';
import ContactModal from '../Footer/ContactModal';

export default function Home() {
  const [contactModal, setContactModal] = useState(false);
  const [userProfile, setUserProfile] = useState();

  console.log(localStorage.getItem('user'))
  useEffect(() => {
    setUserProfile(JSON.parse(localStorage.getItem('user')));
  }, [setUserProfile]);

  const welcome = () => {
    if (userProfile) {
      return <h1>{`Welcome ${userProfile.username}`}</h1>;
    }
    else {
      return null;
    }
  };

  console.log(userProfile);
  return (
    <div className='home-container'>
      <HeroPage />
      <Cards />
      {welcome()}
      <ContactModal
        contactModal={contactModal}
        setContactModal={setContactModal}
        className='contact-modal'
      />
      <Footer contactModal={contactModal} setContactModal={setContactModal} />
    </div>
  );
}
