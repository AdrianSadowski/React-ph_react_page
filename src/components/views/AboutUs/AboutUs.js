import React from 'react';
import PropTypes from 'prop-types';

import styles from './AboutUs.module.scss';
import {MainDiv} from '../../common/MainDiv/MainDiv';
import IMGonas from '../../../images/onas.png';

const Component = () => {
  const onasData = {
    mainDivContent: {
      title: 'o nas',
      subtitle:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
      image: IMGonas,
    },
  };
  return (
    <div className={styles.root}>
      <MainDiv 
        title={onasData.mainDivContent.title} 
        subtitle={onasData.mainDivContent.subtitle} 
        image={onasData.mainDivContent.image}
      />
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
