import React, {useState} from 'react';
import emailjs from 'emailjs-com';
import {Button} from '../Button/Button';
import './ContactModal.css';

export const ContactModal = ({contactModal, setContactModal}) => {
  const [senderEmail, setSenderEmail] = useState('');
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  const sendMessage = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_hgdjkzr',
        'template_ggc1cca',
        e.target,
        'user_R32BExB3ryy6kaZZxipLF'
      )
      .then(
        (result) => {
          console.log(result.text);
          setSent(true);
          setError(false);
        },
        (error) => {
          console.log(error.text);
          setError(true);
          setSent(false);
        }
      );
    clearForm(e);
  };

  const clearForm = (e) => {
    e.preventDefault();
    setSenderName('');
    setSenderEmail('');
    setSubject('');
    setMessage('');
  };

  const successOrFail = () => {
    if (sent === true && error === false) {
      return <h4 className='sent-message'>Message Sent!</h4>;
    }
    if (error === true && sent === false) {
      return <h4 className='error-message'>Error, Try again.</h4>;
    } else {
      return null;
    }
  };

  return contactModal ? (
    <div className='contact-container'>
      <div className='modal-container'>
        <h1 className='modal-title'>Contact Form</h1>
        <form onSubmit={sendMessage}>
          <p className='name-header'>Name:</p>
          <input
            className='modal-input'
            name='name'
            value={senderName}
            type='text'
            placeholder='Your name...'
            onChange={(e) => setSenderName(e.target.value)}
            required
          ></input>
          <p className='email-header'>Email:</p>
          <input
            className='modal-input'
            type='email'
            name='email'
            value={senderEmail}
            placeholder='Your email...'
            onChange={(e) => setSenderEmail(e.target.value)}
            required
          ></input>
          <p className='email-header'>Subject:</p>
          <input
            className='modal-input'
            type='text'
            name='subject'
            value={subject}
            placeholder='Message subject...'
            onChange={(e) => setSubject(e.target.value)}
            required
          ></input>
          <p className='message-header' type='Message:'>
            Message:
          </p>
          <textarea
            className='message-input'
            name='message'
            rows='8'
            cols='38'
            value={message}
            placeholder='Your message...'
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <div className='success-message-container'>{successOrFail()}</div>
          <div className='button-container'>
            <Button
              className='send-button'
              buttonStyle='btn--primary-send'
              type='submit'
            >
              SEND
            </Button>
            <Button
              className='cancel-button'
              buttonStyle='btn--outline3'
              onClick={() => setContactModal(false)}
            >
              CANCEL
            </Button>
          </div>
        </form>
      </div>
    </div>
  ) : null;
};

export default ContactModal;
