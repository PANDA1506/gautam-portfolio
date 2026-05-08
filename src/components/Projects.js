import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PROJECTS } from '../data';
import styles from './Projects.module.css';

const INITIAL_COUNT = 4;

export default function Projects() {
  const [expanded, setExpanded] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const toggle = (i) => setExpanded(expanded === i ? null : i);

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, INITIAL_COUNT);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Selected Work</p>
        <h2 className={styles.title}>Projects</h2>

        <div className={styles.grid}>
          {visibleProjects.map((p, i) => (
            <div key={i} className={`${styles.card} ${expanded === i ? styles.cardOpen : ''}`}>
              <div className={styles.cardTop}>
                <span className={styles.num}>{p.num}</span>
                <div className={styles.meta}>
                  <p className={styles.projectName}>{p.name}</p>
                  <p className={styles.projectRole}>{p.role}</p>
                </div>
                <button
                  className={styles.toggleBtn}
                  onClick={() => toggle(i)}
                  aria-label="Toggle details"
                >
                  {expanded === i ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </button>
              </div>

              <p className={styles.desc}>{p.description}</p>

              <div className={`${styles.detail} ${expanded === i ? styles.detailOpen : ''}`}>
                <ul className={styles.bullets}>
                  {p.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.techs}>
                {p.tech.map((t) => (
                  <span key={t} className={styles.techBadge}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.showMoreWrap}>
          <button
            className={styles.showMoreBtn}
            onClick={() => {
              setShowAll(!showAll);
              setExpanded(null);
            }}
          >
            {showAll ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>View All Projects <ChevronDown size={16} /></>
            )}
          </button>
        </div>
      </div>
    </section>
  );
}


