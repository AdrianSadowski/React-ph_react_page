import React from 'react';
import PropTypes from 'prop-types';

import styles from './MainLayout.module.scss';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Component = ({children}) => (
  <div className={ styles.root}>
    <Header></Header>
    {children}
    <Footer />
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
};

export {
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
