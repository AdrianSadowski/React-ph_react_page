import React, {useEffect} from 'react';

import MainSection from '../../common/MainSection/MainSection';
import {config, main} from './config.js';
import DefaultSection from '../../common/DefaultSectionTEST/DefaultSection';

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
