import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Footer.module.scss';

const Footer = () => (
  <>
  <div className={styles.pasek}></div>
  <div className={styles.root}>
    <Link className={styles.logo} to="/">
      <img src='assets/logo.png' alt="Logo" />
    </Link>
    <p className={styles.phone}>
      +48 508 268 629
      <br />
      biuro@prospecthouse.pl
    </p>
    <p className={styles.companyInfo}>
      PROSPECT HOUSE
      <br />
      Tomasz Kowalski
      <br />
      ul. Brzeziny 35a
      <br />
      03-256 Warszawa
      <br />
      NIP: 5241923826
      <br />
      Regon: 147382507
      <br />
      Bank Zachodni WBK S.A.
      <br />
      17 1500 1012 1010 1016 6077 0000
    </p>
  </div>
  </>
);


export default Footer;