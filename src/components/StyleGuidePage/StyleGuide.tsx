import React from 'react';
import styles from './StyleGuide.module.scss';
const StyleGuide = () => {
  return (
    <div className={styles.page}>
      <h3 className={styles.title}>StyleGuide</h3>
      <div className={styles.body}>
        <div className={styles.titles}>
          <h3 className={styles.titleExample}>Title</h3>
          <h5 className={styles.subtitle}>Subtitle</h5>
        </div>
        <div className={styles.buttons}>
          <button className={styles.baseButton}>Base Button</button>
          <button className={styles.redNeonButton}>Red Neon Button</button>
          <button className={styles.blueNeonButton}>Blue Neon Button</button>
        </div>
        <div className={styles.links}>
          <a href="#" className={styles.link}>
            Base Link
          </a>
          <a href="#" className={styles.customLink}>
            Custom Link
          </a>
        </div>
        <div className={styles.links}>
          <form action="" className={styles.form}>
            <h5 className={styles.formTitle}>Example Form</h5>
            <input type="text" className={styles.input} placeholder={'input'} />
            <input type="text" className={styles.input} placeholder={'input'} />
            <input
              type="password"
              className={styles.input}
              placeholder={'input'}
            />
            <button disabled className={styles.button}>
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StyleGuide;
