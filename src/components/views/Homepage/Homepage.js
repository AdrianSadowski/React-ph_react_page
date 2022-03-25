import React from 'react';

import MainSection from '../../common/MainSection/MainSection';
import {config, main} from './config.js';
import DefaultSection from '../../common/DefaultSection/DefaultSection';

const Homepage = () => {
  return (
    <div>
      <MainSection {...main} />

      {config.map((elementConfig, index) => (
        <DefaultSection key={index} {...elementConfig} />
      ))}
    </div>
  );
};

export default Homepage;
