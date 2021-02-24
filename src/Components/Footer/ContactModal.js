import React from "react";
import {Button} from "../Button/Button";
import "./ContactModal.css";

export const ContactModal = ({contactModal, setContactModal}) => {
  return contactModal ? (
    <>
      <div className="modal-container">
        <h1 className="modal-title">Contact Form</h1>
        <form>
          <p className="name-header" type="Name:">
            <input name="name" placeholder="Your name..."></input>
          </p>
          <p className="email-header" type="Email:">
            <input
              type="email"
              name="email"
              placeholder="Your email..."
            ></input>
          </p>
          <p className="message-header" type="Message:">
            <textarea
              name="message"
              rows="8"
              cols="50"
              placeholder="Your message..."
            ></textarea>
          </p>
          <textarea
            name="message"
            rows="8"
            cols="50"
            placeholder="Your message..."
          ></textarea>
          <Button
            className="send-button"
            buttonStyle="btn--primary-send"
            onClick={() => setContactModal(false)}
          >
            SEND
          </Button>
          <Button
            className="send-button"
            buttonStyle="btn--outline3"
            onClick={() => setContactModal(false)}
          >
            CANCEL
          </Button>
        </form>
      </div>
    </>
  ) : null;
};

export default ContactModal;
