import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

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
              <Link to="/onas" className={styles.items} onClick={toogleNav} >
                <li>
                  o nas
                </li>
              </Link>
              <Link to="/oferta" className={styles.items} onClick={toogleNav} >
                <li>
                  oferta
                </li>
              </Link>
              <Link to="/kontakt" onClick={toogleNav} className={styles.items}>
                <li>
                  kontakt
                </li>
              </Link>
            </ul>
          )}
          <FontAwesomeIcon onClick={toogleNav} className={styles.btn} icon={faBars} />

        </nav>
      </div>
      <div className={'col-lg-5 ' + styles.rightnav}></div>
    </div>
  );
};

export default Header;
