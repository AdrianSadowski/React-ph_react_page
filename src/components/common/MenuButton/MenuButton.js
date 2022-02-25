import React from 'react';
import styles from './MenuButton.module.scss';

const Component = () => {


  return (
<div className={styles.menuToogle} id="menuToggle">
    <input type="checkbox" />
    <span className={styles.span1}></span>
    <span className={styles.span2}></span>
    <span className={styles.span3}></span>
</div>
  );
};

export {
  Component as MenuButton,
  // Container as MenuButton,
  Component as MenuButtonComponent,
};
