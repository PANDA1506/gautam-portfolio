import React from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <span className={styles.logo}>GSK</span>
        <p className={styles.copy}>© {new Date().getFullYear()} Gautam Singh Kaushik · Built with React</p>
        <button className={styles.top} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          ↑ Top
        </button>
      </div>
    </footer>
  );
}
