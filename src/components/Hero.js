import React, { useEffect, useState } from 'react';
import { HERO_STATS } from '../data';
import styles from './Hero.module.css';

const ROLES = [
  'AI / ML Engineer',
  'Full Stack Developer',
  'Cloud Enthusiast',
  'Data Science Intern',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [visible, setVisible] = useState(false);

  // fade-in on mount
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  // typewriter
  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length - 1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className={`${styles.hero} ${visible ? styles.visible : ''}`} id="home">
      <div className={styles.ring1} />
      <div className={styles.ring2} />

      <div className={styles.inner}>
        <p className={styles.tag}>B.Tech CSE · Cloud & Automation · VIT Bhopal 2026</p>

        <h1 className={styles.name}>
          Gautam Singh<br />
          <span className={styles.accent}>Kaushik</span>
        </h1>

        <p className={styles.role}>
          <span className={styles.roleText}>{displayed}</span>
          <span className={styles.cursor}>|</span>
        </p>

        <p className={styles.sub}>
          Building intelligent systems — from RAG pipelines and computer vision to full-stack
          applications and cloud infrastructure.
        </p>

        <div className={styles.cta}>
          <button className={styles.btnPrimary} onClick={() => scrollTo('projects')}>
            View Projects
          </button>
          <button className={styles.btnOutline} onClick={() => scrollTo('contact')}>
            Get in Touch
          </button>
          <a
            className={styles.btnGhost}
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV ↗
          </a>
        </div>

        <div className={styles.stats}>
          {HERO_STATS.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.scrollHint} onClick={() => scrollTo('about')}>
        <span className={styles.scrollDot} />
        <span className={styles.scrollText}>scroll</span>
      </div>
    </section>
  );
}
