import React from 'react';
import DefaultSection from '../../common/DefaultSection/DefaultSection';
import MainSection from '../../common/MainSection/MainSection';
import {config, main} from './Config.js'

const Offert = () => {
  return (
    <div>
      <MainSection {...main} />
      {config.map((elementConfig, index) => (
        <DefaultSection key={index} {...elementConfig} />
      ))}
    </div>
  );
};


export default Offert;


