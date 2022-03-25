import React, {useEffect} from 'react';
import FormContactNEW from '../../common/FormContactNEW/FormContactNEW';
import {config} from './Config.js';
import styles from './Contact.module.scss';

const Contact = () => {
  const {title, subtitle, image} = config;
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className={styles.root}>
      <div className={styles.contact_left}>
        <div className={styles.description}>
          <p className={styles.title}>{title}</p>
          <p className={styles.subtitle}>{subtitle} </p>
        </div>

        <FormContactNEW />
      </div>
      <div className={styles.image}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
};

export default Contact;
