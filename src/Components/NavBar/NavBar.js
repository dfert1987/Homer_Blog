import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Button} from '../Button/Button';
import './NavBar.css';

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [user, setUser] = useState();

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem('user')));
  }, [setUser]);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='container'>
          <div className='navbar-container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              HOMER <i className='logo' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? ' fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/bears'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Bears
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/bulls'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Bulls
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/cubs'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Cubs
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/meatball'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Meatball
                </Link>
              </li>
              <li className='nav-item'>
                {user ? (
                  <Link
                    to='/profile'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Your Profile
                  </Link>
                ) : (
                  <Link
                    to='/signup'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Link>
                )}
              </li>
            </ul>
            {!user ? (
              <div>
                {button && (
                  <Link to='/login' className='nav-links'>
                    <Button buttonStyle='btn--outline'>Sign In</Button>
                  </Link>
                )}
              </div>
            ) : (
              <div>
                {button && (
                  <Link to='/profile' className='nav-links'>
                    <Button buttonStyle='btn--outline'>Your Profile</Button>
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
