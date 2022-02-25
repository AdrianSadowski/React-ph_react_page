import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../../images/logo.png';
import {Link} from 'react-router-dom';

import styles from './Footer.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    <Link className={styles.left} to="/">
      <img src={logo} alt="Logo" />
    </Link>
    <p className={styles.middle}>
      +48 508 268 629
      <br />
      biuro@prospecthouse.pl
    </p>
    <p className={styles.right}>
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
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as Footer,
  // Container as Footer,
  Component as FooterComponent,
};
