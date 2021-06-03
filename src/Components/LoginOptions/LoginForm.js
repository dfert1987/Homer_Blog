import React, {useCallback, useState} from 'react';
import {Button} from '../Button/Button';
import {useHistory} from 'react-router-dom';

export default function LoginForm({id, setSelectedForm}) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = () => {
    history.push('/');
    return;
  };

  const updateField = useCallback(
    (name, value) => {
      if (name === 'username') {
        setUsername(value);
      }
      if (name === 'password') {
        setPassword(value);
      }
    },
    [setUsername, setPassword]
  );

  const loginFormId = `${id}-login`;

  return (
    <div id={loginFormId} className='login-wrapper'>
      <div className='login-form-wrapper'>
        <h3 className='login-form-title'>Sign In</h3>
        <form className='login-form' onSubmit={onSubmit}>
          <div className='input-wrapper-top'>
            <label className='login-username-label'>Username</label>
            <input
              className='login-input'
              id={`${loginFormId}-username`}
              value={username}
              onChange={updateField}
              name='username'
            />
          </div>
          <div className='input-wrapper-bottom'>
            <label className='login-password-label'>Password</label>
            <input
              className='password-input'
              type='password'
              id={`${loginFormId}-password`}
              value={password}
              name='password'
              onChange={updateField}
            />
          </div>
          <div className='login-button-container'>
            <Button
              id={`${loginFormId}-submit`}
              className='login-button'
              type='submit'
            >
              Log In
            </Button>
          </div>
        </form>
        <hr className='login-divider' />
        <div className='login-bottom-row'>
          <Button
            id={`${loginFormId}-reset`}
            className='forgot-password-button'
            onClick={() => setSelectedForm()}
            type='button'
          >
            Forgot Your Password?
          </Button>
        </div>
      </div>
    </div>
  );
}
