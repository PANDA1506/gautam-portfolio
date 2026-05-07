import React from 'react';
import { ABOUT_HIGHLIGHTS } from '../data';
import styles from './About.module.css';

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Introduction</p>
        <h2 className={styles.title}>About Me</h2>

        <div className={styles.grid}>
          <div className={styles.text}>
            <p>
              I'm a final-year B.Tech student at VIT Bhopal, specialising in Cloud Computing and
              Automation. My work sits at the intersection of machine learning, full-stack
              development, and cloud engineering.
            </p>
            <p>
              I've built end-to-end AI systems — from retrieval-augmented generation pipelines to
              OCR-powered expense trackers — and I enjoy turning complex problems into clean,
              scalable solutions.
            </p>
            <p>
              When I'm not coding, you'll find me competing in hackathons, accumulating Google
              Cloud Arcade XP, or writing scripts for college fests.
            </p>
          </div>

          <div className={styles.highlights}>
            {ABOUT_HIGHLIGHTS.map((item, i) => (
              <div key={i} className={styles.highlightItem}>
                <span className={styles.dot} />
                <span className={styles.highlightText}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
