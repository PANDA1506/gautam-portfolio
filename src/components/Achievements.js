import React from 'react';
import { ACHIEVEMENTS } from '../data';
import styles from './Achievements.module.css';

export default function Achievements() {
  return (
    <section id="achievements" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Recognition</p>
        <h2 className={styles.title}>Achievements & Certifications</h2>

        <div className={styles.grid}>
          {ACHIEVEMENTS.map((a, i) => (
            <div key={i} className={styles.card}>
              <span className={styles.icon}>{a.icon}</span>
              <p className={styles.achTitle}>{a.title}</p>
              <p className={styles.detail}>{a.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
