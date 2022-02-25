import React from 'react';
import PropTypes from 'prop-types';

import styles from './AboutUs.module.scss';

const Component = ({children}) => (
  <div className={styles.root}>
    <h2>AboutUs</h2>
    {children}
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};


export {
  Component as AboutUs,
  // Container as AboutUs,
  Component as AboutUsComponent,
};
