import React, {useState} from "react";
import "../../App.css";
import HeroPage from "../HeroPage/HeroPage";
import Cards from "../../Components/Card/Cards";
import Footer from "../../Components/Footer/Footer";
import ContactModal from "../Footer/ContactModal";

function Home() {
  const [contactModal, setContactModal] = useState(false);
  return (
    <div className="home-container">
      <HeroPage />
      <Cards />
      <ContactModal
        contactModal={contactModal}
        setContactModal={setContactModal}
        className="contact-modal"
      />
      <Footer contactModal={contactModal} setContactModal={setContactModal} />
    </div>
  );
}

export default Home;
