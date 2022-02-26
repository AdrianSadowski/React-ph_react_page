import React from 'react';
import PropTypes from 'prop-types';

import styles from './AboutUs.module.scss';
import {MainDiv} from '../../common/MainDiv/MainDiv';
import { LeftDiv } from '../../common/LeftDiv/LeftDiv';
import { RightDiv } from '../../common/RightDiv/RightDiv';
import {onasData} from '../../../data/dataStore';

const Component = () => {
  const {mainDivContent, whoDiv, whatDiv, contactDiv} = onasData;

  return (
    <div className={styles.root}>
      <MainDiv
        title={mainDivContent.title}
        subtitle={mainDivContent.subtitle}
        image={mainDivContent.image}
      />
      <LeftDiv
        title={whoDiv.title}
        subtitle={whoDiv.subtitle}
        image={whoDiv.image}
      />
      <RightDiv
        title={whatDiv.title}
        subtitle={whatDiv.subtitle}
        image={whatDiv.image}
      />
      <LeftDiv
        title={contactDiv.title}
        subtitle={contactDiv.subtitle}
        buttonTo={contactDiv.buttonTo}
        image={contactDiv.image}
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
