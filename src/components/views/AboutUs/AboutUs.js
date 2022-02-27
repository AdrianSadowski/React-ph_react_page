import React from 'react';
import PropTypes from 'prop-types';

import styles from './AboutUs.module.scss';
import MainSection from '../../common/MainSection/MainSection';
import DefaultSection from '../../common/DefaultSection/DefaultSection';
import {config, main} from './Config.js';

const Component = () => {
  return (
    <div className={styles.root}>
      <MainSection {...main} />
      {config.map((elementConfig, index) => (
        <DefaultSection key={index}  {...elementConfig} />
      ))}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export {
  Component as AboutUs,
  // Container as AboutUs,
  Component as AboutUsComponent,
};
