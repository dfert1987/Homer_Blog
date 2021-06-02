import React, {useState} from 'react';
import './Login.css';

export default function Login() {
  const [userEmail, setUserEmail] = useState('');
  const [selectedForm, setSelectedForm] = useState('');
  
  const LOGIN = 'login';
  const RESET_PASSWORD = 'resetPassword';
  const VERIFY_CODE = 'verifyCode';

  const PanelContent = () => {
    return (
      <div className='side-image-container'>
        <div className='side-image-title-container'>
          <h3 className='side-image-title'>HOMER</h3>
          <h4 className='side-image-subtitle'>Meatballs Welcome</h4>
        </div>
      </div>
    );
  };

  let sidePanel;
  let content;
  const id = 'login';

  switch (selectedForm) {
    case LOGIN:
      sidePanel = <PanelContent />;
      content = (
        <LoginForm
          id={id}
          setSelectedForm={() => setSelectedForm(RESET_PASSWORD)}
        />
      );
      break;
    case VERIFY_CODE:
      content = (
        <VerifyCode
          id={id}
          setSelectedForm={() => setSelectedForm(LOGIN)}
          email={userEmail}
        />
      );
      break;
    case RESET_PASSWORD:
      content = (
        <ResetPassword
          id={id}
          setSelectedForm={() => setSelectedForm(VERIFY_CODE)}
          setEmail={(email) => setUserEmail(email)}
          setCancel={() => setSelectedForm(LOGIN)}
        />
      );
  }

  return (
    <div className='login-container'>
      {sidePanel}
      <div className='main-column'>
        <div className='header-row'>
          <h3 className='header-logo'>HOMER</h3>
          <div className='trademark'>
            <span className=''>© 2021 Homer</span>
          </div>
        </div>
        <div className='mobile-header-row'>
          <h4 className='mobile-logo'>HOMER</h4>
          <hr className='mobile-divider' />
        </div>
        <div className='form-switch-wrapper'>{content}</div>
        <div className='mobile-trademark'>
          <span>© 2021 Homer</span>
        </div>
      </div>
    </div>

    /* <div className='side-image-container'>
        <div className='side-image-tile-container'>
          <h3 className='side-image-title'>HOMER</h3>
          <h4 className='side-image-subtitle'>Meatballs Welcome</h4>
        </div>
      </div>
      <div className='right-side-container'>
        <h2 className='login-title'>Welcome Back to Homer</h2>
        <form className='login-form'>
          <label className='login-form-label'>Username</label>
          <input className='login-input'></input>
        </form>
      </div> */
  );
}
