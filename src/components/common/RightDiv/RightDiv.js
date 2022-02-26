import React from 'react';
import styles from './RightDiv.module.scss';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Component = ({title, subtitle, image, buttonTo}) => {
  console.log(buttonTo)
  return (
    <div className={styles.root}>
      <div className={styles.left}>
        <div className={styles.leftSide}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle} </p>
          <Link className={styles.button} to={buttonTo}>
            <p>więcej</p>
          </Link>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.background}>
          <img src={image} alt="error" />
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.string,
  buttonTo: PropTypes.string,
  className: PropTypes.string,
};

export {Component as RightDiv, Component as RightDivComponent};
