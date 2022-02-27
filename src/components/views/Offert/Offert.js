import React from 'react';
import DefaultSection from '../../common/DefaultSection/DefaultSection';
import MainSection from '../../common/MainSection/MainSection';
import {config, main} from './Config.js'
import styles from './Offert.module.scss';

const Offert = () => {
  return (
    <div className={styles.root}>
      <MainSection {...main} />
      {config.map((elementConfig, index) => (
        <DefaultSection key={index} {...elementConfig} />
      ))}
    </div>
  );
};


export default Offert;


