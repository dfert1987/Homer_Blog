import React, {useCallback, useState} from 'react';
import {Button} from '../Button/Button';

export default function ResetPassword({
  id,
  setSelectedForm,
  setEmail,
  setCancel,
}) {
  const resetId = `${id}-reset`;
  const [userEmail, setUserEmail] = useState('');

  const onSubmit = () => {
    setEmail(userEmail);
    setSelectedForm();
  };

  const updateField = useCallback(
    (field, value) => {
      setUserEmail(value);
    },
    [setUserEmail]
  );

  return (
    <div id={resetId} className='reset-wrapper'>
      <div className='reeset-title'>Forgot Your Password?</div>
      <div className='reset-instructions'>
        Enter your email below and we'll send reset instructions
      </div>
      <form onSubmit={onSubmit}>
        <div className='reset-email-container'>
          <label className='reset-email-label'>Email</label>
          <input
            className='reset-email-input'
            type='text'
            id={`${resetId}-email`}
            value={userEmail}
            onChange={updateField}
          />
        </div>
        <div className='reset-button-container'>
          <Button
            id={`${resetId}-cancel`}
            className='reset-cancel'
            onClick={setCancel}
            type='button'
          >
            Cancel
          </Button>
          <Button
            id={`${resetId}-submit`}
            className='reset-submit'
            type='submit'
          >
            Send Reset Instructions
          </Button>
        </div>
      </form>
    </div>
  );
}
