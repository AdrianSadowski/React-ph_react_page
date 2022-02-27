import React from 'react';
import styles from './MainSection.module.scss';

const MainSection = ({title, subtitle, image}) => {
  return <div className={styles.root}>
    <div className={styles.left}>
      <p className={styles.title}>{title}</p>
      <p className={styles.subtitle}>{subtitle} </p>
    </div>
    <div className={styles.right}>
      <img src={image} alt='error' />
    </div>
  </div>;
};

export default MainSection;
