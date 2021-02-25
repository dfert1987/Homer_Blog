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
            Name:
          </p>
          <input
            className="input"
            name="name"
            placeholder="Your name..."
          ></input>
          <p className="email-header" type="Email:">
            Email:
          </p>
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Your email..."
          ></input>
          <p className="message-header" type="Message:">
            Message:
          </p>
          <textarea
            className="message-input"
            name="message"
            rows="8"
            cols="38"
            placeholder="Your message..."
          ></textarea>
          <div className="button-container">
            <Button
              className="send-button"
              buttonStyle="btn--primary-send"
              onClick={() => setContactModal(false)}
            >
              SEND
            </Button>
            <Button
              className="cancel-button"
              buttonStyle="btn--outline3"
              onClick={() => setContactModal(false)}
            >
              CANCEL
            </Button>
          </div>
        </form>
      </div>
    </>
  ) : null;
};

export default ContactModal;
