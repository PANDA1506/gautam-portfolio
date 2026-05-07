import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Check, Copy } from 'lucide-react';
import { CONTACT_INFO } from '../data';
import styles from './Contact.module.css';

function CopyField({ label, value }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={styles.copyField}>
      <span className={styles.copyValue}>{value}</span>
      <button
        className={`${styles.copyBtn} ${copied ? styles.copied : ''}`}
        onClick={handleCopy}
        title={`Copy ${label}`}
      >
        {copied ? <Check size={14} /> : <Copy size={14} />}
        <span>{copied ? 'Copied!' : 'Copy'}</span>
      </button>
    </div>
  );
}

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>Let's Connect</p>
        <h2 className={styles.title}>Get In Touch</h2>

        <div className={styles.wrap}>
          <div className={styles.left}>
            <p className={styles.callout}>Open to internships, research collaborations, and interesting projects.</p>
            <p className={styles.sub}>The best way to reach me is via email or LinkedIn. I usually respond within 24 hours.</p>

            <div className={styles.fields}>
              <div className={styles.fieldRow}>
                <Mail size={16} className={styles.fieldIcon} />
                <div>
                  <p className={styles.fieldLabel}>Email</p>
                  <CopyField label="email" value={CONTACT_INFO.email} />
                </div>
              </div>
              <div className={styles.fieldRow}>
                <Phone size={16} className={styles.fieldIcon} />
                <div>
                  <p className={styles.fieldLabel}>Phone</p>
                  <CopyField label="phone" value={CONTACT_INFO.phone} />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.right}>
            <a className={styles.socialBtn} href={CONTACT_INFO.github} target="_blank" rel="noopener noreferrer">
              <Github size={18} />
              <span>GitHub</span>
              <span className={styles.arrow}>↗</span>
            </a>
            <a className={styles.socialBtn} href={CONTACT_INFO.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
              <span>LinkedIn</span>
              <span className={styles.arrow}>↗</span>
            </a>
            <a className={styles.socialBtn} href={`mailto:${CONTACT_INFO.email}`}>
              <Mail size={18} />
              <span>Send Email</span>
              <span className={styles.arrow}>↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
