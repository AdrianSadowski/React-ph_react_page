import React from 'react';
import PropTypes from 'prop-types';

import styles from './Offert.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    <h2>Offert</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};


export {
  Component as Offert,
  // Container as Offert,
  Component as OffertComponent,
};
