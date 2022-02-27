import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

import styles from './Header.module.scss';

const Header = () => {
  const [toogleMenu, setToogleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toogleNav = () => {
    setToogleMenu(!toogleMenu);
  };
  const toogleNavFalse = () => {
    setToogleMenu(false);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', changeWidth);

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
  return (
    <div className="row">
      <div className="col-lg-7 row">
        <div className={'col-6 ' + styles.logo}>
          <Link onClick={toogleNavFalse} to="/">
            <img src='assets/logo.png' alt="Logo" />
          </Link>
        </div>
        <nav className={'col-6 ' + styles.root}>
          {(toogleMenu || screenWidth > 576) && (
            <ul className={styles.list}>
              <Link to="/onas">
                <li onClick={toogleNav} className={styles.items}>
                  o nas
                </li>
              </Link>
              <Link to="/oferta">
                <li onClick={toogleNav} className={styles.items}>
                  oferta
                </li>
              </Link>
              <Link to="/kontakt">
                <li onClick={toogleNav} className={styles.items}>
                  kontakt
                </li>
              </Link>
            </ul>
          )}
          <button onClick={toogleNav} className={styles.btn}>
            BTN
          </button>
        </nav>
      </div>
      <div className={'col-lg-5 ' + styles.rightnav}></div>
    </div>
  );
};

export default Header;
