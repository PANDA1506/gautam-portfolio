export const NAV_LINKS = [
  { id: 'about',        label: 'About' },
  { id: 'skills',       label: 'Skills' },
  { id: 'experience',   label: 'Experience' },
  { id: 'projects',     label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact',      label: 'Contact' },
];

export const HERO_STATS = [
  { num: '9.01', label: 'CGPA' },
  { num: '138',  label: '/ 1500+ Rank' },
  { num: '18K+', label: 'GCloud XP' },
];

export const ABOUT_HIGHLIGHTS = [
  'IBM Generative AI certified with hands-on LLM & RAG experience',
  'Full-Stack MERN developer — SmartBridge & MongoDB certified',
  'Google Cloud Arcade participant since 2023 — 18,810 XP',
  'AWS ML Ascend Challenge — Rank 138 out of 1500+ teams',
  'Languages: English, Hindi, German (A1/A2)',
];

export const SKILLS = [
  {
    category: 'Languages',
    tags: ['Java', 'Python'],
  },
  {
    category: 'AI / ML',
    tags: ['TensorFlow', 'OpenCV', 'OpenPose', 'ResNet101', 'U-Net', 'RAG', 'Generative AI', 'Scikit-learn'],
  },
  {
    category: 'Web & Full-Stack',
    tags: ['React.js', 'Node.js', 'Express.js', 'Flask', 'Gradio', 'Tailwind CSS'],
  },
  {
    category: 'Cloud & DevOps',
    tags: ['AWS EC2', 'S3', 'Lambda', 'Athena', 'Google Cloud', 'IBM Cloud', 'Power BI'],
  },
  {
    category: 'Databases & Tools',
    tags: ['MySQL', 'MongoDB', 'FAISS', 'Git', 'Figma', 'Vector Databases'],
  },
];

export const EXPERIENCE = [
  {
    company: 'Unified Mentor Pvt. Ltd.',
    role: 'Data Science Intern',
    duration: 'Oct 2025 – Jan 2026',
    type: 'Remote Internship',
    bullets: [
      'Performed data cleaning, preprocessing, and EDA to prepare high-quality datasets for analytics workflows.',
      'Built and optimised ML models for predictive insights using Python and Scikit-learn.',
      'Designed interactive Power BI dashboards to visualise KPIs and communicate data-driven insights effectively.',
    ],
  },
];

export const PROJECTS = [
  {
    num: '01',
    name: 'RAG Chat Assistant',
    subtitle: 'Retrieval-Augmented Generation System',
    role: 'Individual · AI/ML',
    date: 'Aug 2025',
    description:
      'End-to-end RAG chat assistant supporting PDF/Image upload, OCR extraction, FAISS vector search, and source-grounded answers with automated page-level citations.',
    bullets: [
      'OCR extraction, text chunking, and FAISS vector indexing for scalable document knowledge base.',
      'Interactive Flask–Gradio pipeline for real-time QA and file uploads.',
      'Automated page-level source citations to ensure answer reliability.',
    ],
    tech: ['Python', 'Flask', 'Gradio', 'FAISS', 'OCR', 'Vector DB', 'RAG'],
    color: '#c9a84c',
  },
  {
    num: '02',
    name: 'MoneyPoly',
    subtitle: 'Smart Expense Categoriser',
    role: 'Team · Full-Stack & ML',
    date: 'Jun 2025',
    description:
      'Intelligent full-stack expense tracking system with OCR-based receipt scanning, ML-powered categorisation, real-time analytics dashboards, and RESTful APIs.',
    bullets: [
      'Automated merchant and item extraction for intelligent expense classification.',
      'Responsive dashboards for real-time expense analytics and account tracking.',
      'RESTful APIs for transaction processing, account management, and data updates.',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'OCR', 'Tailwind CSS'],
    color: '#4c8fc9',
  },
];

export const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'AWS ML Ascend Challenge',
    detail: 'Zelestra x AWS · Team Leader · Rank 138 / 1500+ participants (2025)',
  },
  {
    icon: '💡',
    title: 'SIH 2023 Finalist',
    detail: 'Internal Hackathon Finalist · Project: Price Pulse · Frontend Developer',
  },
  {
    icon: '☁️',
    title: 'Google Cloud Arcade',
    detail: 'Active since 2023 · 18,810 XP accumulated across all challenges',
  },
  {
    icon: '🎖️',
    title: 'Certifications',
    detail: 'IBM GenAI · MERN Full Stack · MongoDB Node.js · Applied ML (Coursera) · Accenture Data',
  },
  {
    icon: '✍️',
    title: '3rd Place — Script Writing',
    detail: "Tamasha'23 · Ekfraseis Club · Among 200+ participants",
  },
];

export const CONTACT_INFO = {
  email: 'gautamisngh150604@gmail.com',
  phone: '+91-7898557414',
  github: 'https://github.com/',         // ← replace with your URL
  linkedin: 'https://linkedin.com/in/',  // ← replace with your URL
};
