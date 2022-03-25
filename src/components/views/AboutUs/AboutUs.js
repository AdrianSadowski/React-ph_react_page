import React from 'react';
import PropTypes from 'prop-types';

import MainSection from '../../common/MainSection/MainSection';
import DefaultSection from '../../common/DefaultSection/DefaultSection';
import {config, main} from './Config.js';

const AboutUs = () => {
  return (
    <div>
      <MainSection {...main} />
      {config.map((elementConfig, index) => (
        <DefaultSection key={index}  {...elementConfig} />
      ))}
    </div>
  );
};

AboutUs.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default AboutUs;

