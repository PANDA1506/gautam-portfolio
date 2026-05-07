import React from 'react';
import { EXPERIENCE } from '../data';
import styles from './Experience.module.css';

export default function Experience() {
  return (
    <section id="experience" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Work History</p>
        <h2 className={styles.title}>Experience</h2>

        <div className={styles.list}>
          {EXPERIENCE.map((exp, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.left}>
                <p className={styles.duration}>{exp.duration}</p>
                <p className={styles.type}>{exp.type}</p>
              </div>
              <div className={styles.right}>
                <p className={styles.company}>{exp.company}</p>
                <p className={styles.role}>{exp.role}</p>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
