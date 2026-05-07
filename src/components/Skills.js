import React, { useState } from 'react';
import { SKILLS } from '../data';
import styles from './Skills.module.css';

export default function Skills() {
  const [active, setActive] = useState('All');
  const categories = ['All', ...SKILLS.map((s) => s.category)];

  const filtered = active === 'All' ? SKILLS : SKILLS.filter((s) => s.category === active);

  return (
    <section id="skills" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Technical Expertise</p>
        <h2 className={styles.title}>Skills</h2>

        {/* Filter tabs */}
        <div className={styles.tabs}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.tab} ${active === cat ? styles.tabActive : ''}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skill cards */}
        <div className={styles.grid}>
          {filtered.map((skill) => (
            <div key={skill.category} className={styles.card}>
              <p className={styles.catLabel}>{skill.category}</p>
              <div className={styles.tags}>
                {skill.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
