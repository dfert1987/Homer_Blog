import React, {useState} from 'react';
import {Button} from '../Button/Button';
import './VerifyCode.css';

export default function VerifyCode({id, setSelectedForm, userEmail}) {
  const [confirmationCode, setCode] = useState('');
  const [sentMessage, showSentMessage] = useState(false);
  const [password, setNewPassword] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();
    setSelectedForm();
  };

  const resendCode = async (event) => {
    event.preventDefault();
    showSentMessage(true);
  };

  const verifyId = `${id}-verify`;

  return (
    <div id={verifyId} className='verify-wrapper'>
      <div className='verify-form-wrapper'>
        <h3 className='verify-instructions'>Instructions Sent</h3>
        <div className='code-sent-message'>
          <span>Verification code has been sent to</span>
          <span className='user-email'>{userEmail}</span>
        </div>
        <form className='verify-form' onSubmit={onSubmit}>
          <div className='code-input-container'>
            <label className='code-label'>Verification Code</label>
            <input
              className='code-input'
              type='text'
              id={`${verifyId}-code`}
              value={confirmationCode}
              onChange={(name, value) => setCode(value)}
              required
              name='code'
            />
          </div>
          <div className='button-and-resend-message'>
            <Button
              id={`${verifyId}-resend`}
              className='resend-code-button'
              type='button'
              onClick={resendCode}
            >
              Resend Code
            </Button>
            {sentMessage && (
              <span className='sent-message' id={`${verifyId}-resent`}>
                New code sent.
              </span>
            )}
          </div>
          <hr className='verify-divider' />
          <div className='new-password-input-container'>
            <label className='new-password-input-label'>New Password</label>
            <input
              id={`${verifyId}-password`}
              className='new-password-input'
              value={password}
              type='password'
              onChange={(name, value) => setNewPassword(value)}
              required
              name='newPassword'
            />
          </div>
          <div className='verify-button-container'>
            <div className='cancel-container'>
              <Button
                id={`${verifyId}-cancel`}
                className='cancel-button'
                type='button'
                onClick={() => setSelectedForm()}
              >
                Cancel
              </Button>
            </div>
            <Button
              id={`${verifyId}-submit`}
              className='new-password-button'
              type='submit'
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
