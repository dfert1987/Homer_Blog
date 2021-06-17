import React, {useState} from 'react';
import LoginForm from '../LoginOptions/LoginForm';
import VerifyCode from '../LoginOptions/VerifyCode';
import ResetPassword from '../LoginOptions/ResetPassword';
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
          <img
            className='side-image-logo'
            src='https://Zi.imgur.com/MaLqLee.png'
            alt='homer-logo'
          />
          <div className='side-image-subtitle'>A Safe Place for Die-Hards</div>
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
      sidePanel = <PanelContent />;
      content = (
        <VerifyCode
          id={id}
          setSelectedForm={() => setSelectedForm(LOGIN)}
          email={userEmail}
        />
      );
      break;
    case RESET_PASSWORD:
      sidePanel = <PanelContent />;
      content = (
        <ResetPassword
          id={id}
          setSelectedForm={() => setSelectedForm(VERIFY_CODE)}
          setEmail={(email) => setUserEmail(email)}
          setCancel={() => setSelectedForm(LOGIN)}
        />
      );
      break;
    default:
      sidePanel = <PanelContent />;
      content = (
        <LoginForm
          id={id}
          setSelectedForm={() => setSelectedForm(RESET_PASSWORD)}
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
  );
}
