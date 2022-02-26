import React from 'react';
import styles from './MainDiv.module.scss';
import PropTypes from 'prop-types';

const Component = ({title, subtitle, image}) => {
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

Component.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  className: PropTypes.string,
};

export {
  Component as MainDiv,
  Component as MainDivComponent,
};
