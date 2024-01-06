import React from 'react';
import styles from './Loader.module.scss';
const Loader = () => {
  return (
    <div className={styles.container}>
      <img src="src/assets/loader.gif" alt="Loading" className={styles.Img} />
      <div className={styles.text}>Loading...</div>
    </div>
  );
};

export default Loader;
