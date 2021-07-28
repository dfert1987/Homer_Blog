import React, {useState} from 'react';
import {Button} from '../Button/Button';
import {useHistory} from 'react-router-dom';
import './LoginForm.css';

export default function LoginForm({id, setSelectedForm}) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showLogin, setShowLogin] = useState(true);

  const onSubmit = (event) => {
    if (showLogin) {
      loginUser();
      event.preventDefault();
    }
    createUser();
    event.preventDefault();
  };

  const loginUser = () => {

    
    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          username: username,
          password: password
        }
      }),
    })
      .then((response) => response.json())
      .then((result) => {
      if (result.error) {
        console.error(result.error);
      } else {
        console.log('token', result.token);
        setUsername('');
        setPassword('');
        history.push('/');
        localStorage.setItem('token', result.token)
      }
  })
};

  const createUser = () => {
    const newUser = {
      username: username,
      password: password,
    };
    fetch('http://localhost:3000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    });
    setUsername('');
    setPassword('');
    setShowLogin(true);
    return;
  };

  const loginFormId = `${id}-login`;

  return (
    <div id={loginFormId} className='login-wrapper'>
      <div className='login-form-wrapper'>
        {showLogin ? (
          <h3 className='login-form-title'>Sign In</h3>
        ) : (
          <h3 className='login-form-title'>Create an Account</h3>
        )}
        <form className='login-form' onSubmit={onSubmit}>
          <div className='input-wrapper-top'>
            <label className='login-username-label'>Username</label>
            <input
              className='login-input'
              id={`${loginFormId}-username`}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name='username'
            />
          </div>
          <div className='input-wrapper-middle'>
            <label className='login-password-label'>Password</label>
            <input
              className='password-input'
              type='password'
              id={`${loginFormId}-password`}
              value={password}
              name='password'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='buttons'>
            {showLogin ? (
              <>
                <div className='login-button-container'>
                  <Button
                    id={`${loginFormId}-submit`}
                    className='login-button'
                    type='submit'
                  >
                    Submit
                  </Button>
                </div>
                <div className='signup-button-container'>
                  <Button
                    id={`${loginFormId}-sign-up`}
                    className='signup-button'
                    type='button'
                    onClick={() => setShowLogin(false)}
                  >
                    Sign Up
                  </Button>
                </div>
              </>
            ) : (
              <>
                <div className='login-button-container'>
                  <Button
                    id={`${loginFormId}-submit`}
                    className='login-button'
                    type='submit'
                  >
                    Submit
                  </Button>
                </div>
                <div className='signup-button-container'>
                  <Button
                    id={`${loginFormId}-sign-up`}
                    className='signup-button'
                    type='button'
                    onClick={() => setShowLogin(true)}
                  >
                    Login
                  </Button>
                </div>
              </>
            )}
          </div>
        </form>
        <hr className='login-divider' />
        <div className='login-bottom-row'>
          <Button
            id={`${loginFormId}-reset`}
            className='forgot-password-button'
            onClick={() => setSelectedForm('resetPassword')}
            type='button'
          >
            Forgot Your Password?
          </Button>
        </div>
      </div>
    </div>
  );
}
