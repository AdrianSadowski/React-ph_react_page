import React from 'react';
import PropTypes from 'prop-types';

import styles from './Contact.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    <h2>Contact</h2>
    <img src='assets/brandingipakowanie.png' />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};


export {
  Component as Contact,
  // Container as Contact,
  Component as ContactComponent,
};
