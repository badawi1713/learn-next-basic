import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; Badawi -
      {' '}
      {new Date().getFullYear()}
    </footer>
  );
}

export default Footer;
