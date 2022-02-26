import React from 'react';
import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';
import {MainDiv} from '../../common/MainDiv/MainDiv';
import {homepageData} from '../../../data/dataStore';
import {RightDiv} from '../../common/RightDiv/RightDiv';
import {LeftDiv} from '../../common/LeftDiv/LeftDiv';

const Component = () => {


  return (
    <div className={styles.root}>
      <MainDiv
        title={homepageData.mainDivContent.title}
        subtitle={homepageData.mainDivContent.subtitle}
        image={homepageData.mainDivContent.image}
      />
      <LeftDiv
        title={homepageData.whoDiv.title}
        subtitle={homepageData.whoDiv.subtitle}
        buttonTo={homepageData.whoDiv.buttonTo}
        image={homepageData.whoDiv.image}
      />
      <RightDiv
        title={homepageData.offertDiv.title}
        subtitle={homepageData.offertDiv.subtitle}
        buttonTo={homepageData.offertDiv.buttonTo}
        image={homepageData.offertDiv.image}
      />
      <LeftDiv
        title={homepageData.contactDiv.title}
        subtitle={homepageData.contactDiv.subtitle}
        buttonTo={homepageData.contactDiv.buttonTo}
        image={homepageData.contactDiv.image}
      />
    </div>
  );
};

Component.propTypes = {
  homepageData: PropTypes.string,
  className: PropTypes.string,
};

export {
  Component as Homepage,
  // Container as Homepage,
  Component as HomepageComponent,
};
