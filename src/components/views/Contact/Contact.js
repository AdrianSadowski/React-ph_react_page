import React from 'react';
import FormContact from '../../common/FormContact/FormContact';
import {config} from './Config.js';
import styles from './Contact.module.scss';

const Contact = () => {
  const {title, subtitle, image} = config;
  return (
    <div className={styles.root}>
      <div className={styles.contact_left}>
        <div className={styles.description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle} </p>
        </div>
        <FormContact />
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Contact;
