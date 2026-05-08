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
    num: "01",
    name: "Visual Product Matcher",
    role: "Individual · AI/ML",
    description:
      "AI-powered full-stack application that identifies visually similar products using image uploads and CLIP-based embeddings with real-time similarity search and filtering.",
    bullets: [
      "Visual similarity search using CLIP embeddings and cosine similarity",
      "Upload image or image URL support for product matching",
      "Responsive React frontend with advanced product filtering",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "FastAPI", "Python", "CLIP", "Computer Vision"],
  },
  {
    num: "02",
    name: "Movie Ticket Booking System",
    role: "Team · Full Stack Web Application",
    description:
      "A MERN stack-based movie ticket booking platform with separate admin and user roles, enabling seamless movie browsing, seat booking, online payments, and theater management.",
    bullets: [
      "Implemented secure user authentication and role-based access control",
      "Enabled users to browse movies, select seats, book tickets, and manage booking history",
      "Integrated online payment gateway for secure ticket transactions",
      "Developed admin dashboard to manage theaters, movie schedules, show timings, and bookings",
      "Built responsive UI with real-time seat availability and booking workflow",
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "Tailwind CSS", "JWT", "Razorpay", "REST API"],
  },
  {
    num: "03",
    name: "Handwritten Digit Recognition",
    role: "Individual · Machine Learning",
    description:
      "Machine learning project for recognizing handwritten digits using a Convolutional Neural Network (CNN), trained on image datasets to accurately classify numeric inputs.",
    bullets: [
      "Developed a CNN model for handwritten digit classification",
      "Processed and normalized image data for better prediction accuracy",
      "Trained and evaluated the model using deep learning techniques",
      "Implemented digit prediction workflow for real-time input testing",
    ],
    tech: ["Python", "TensorFlow", "Keras", "CNN", "NumPy", "Matplotlib", "Jupyter Notebook"],
  },
  {
    num: "04",
    name: "Google Play Store Analysis",
    role: "Individual · Data Science Internship",
    description:
      "End-to-end data analysis and predictive modeling on Google Play Store datasets to extract business insights, analyze user reviews, and visualize application trends.",
    bullets: [
      "Data cleaning, preprocessing, and exploratory data analysis (EDA)",
      "Machine learning models for predictive analysis and insights",
      "Interactive dashboards and business intelligence visualizations",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook", "Data Visualization", "Machine Learning"],
  },
  {
    num: "05",
    name: "Supermart Grocery Sales Analysis",
    role: "Individual · Data Science Internship",
    description:
      "Comprehensive retail sales analysis on supermarket grocery datasets to uncover customer purchasing behavior, sales trends, and business optimization opportunities.",
    bullets: [
      "Data cleaning, preprocessing, and exploratory data analysis (EDA)",
      "Sales trend analysis and customer behavior insights",
      "Predictive modeling for sales forecasting and business intelligence",
      "Data visualization and reporting using interactive charts and graphs",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook", "Machine Learning", "Data Visualization"],
  },
  {
    num: "06",
    name: "Netflix Data Analysis",
    role: "Individual · Data Analytics Project",
    description:
      "In-depth analysis of Netflix movies and TV shows datasets to identify content trends, audience preferences, and streaming platform insights through data visualization and dashboard reporting.",
    bullets: [
      "Data cleaning, preprocessing, and exploratory data analysis (EDA)",
      "Analysis of genre trends, ratings, release patterns, and content distribution",
      "Interactive dashboard creation and business intelligence reporting using Power BI",
      "Visualization of user-centric insights and entertainment industry trends",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Power BI", "Jupyter Notebook", "Data Visualization", "Business Intelligence"],
  },
  {
    num: "07",
    name: "IBM HR Analytics",
    role: "Individual · Data Science & Analytics",
    description:
      "Analyzed IBM HR analytics datasets to identify employee attrition patterns, workforce trends, and key organizational factors influencing employee retention and performance.",
    bullets: [
      "Data cleaning, preprocessing, and exploratory data analysis (EDA)",
      "Feature engineering and ML model development for attrition prediction",
      "HR metrics analysis including employee satisfaction, performance, and retention trends",
      "Dashboard-ready data preparation and visualization for business decision-making",
    ],
    tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Jupyter Notebook", "Machine Learning", "Feature Engineering"],
  },
  {
    num: "08",
    name: "Siren Share",
    role: "Individual · Web App",
    description:
      "Sound-based encoding and decoding web application that converts messages into audio signals for secure and fun communication experiences.",
    bullets: [
      "Audio-based message encoding and decoding system",
      "Interactive web interface for uploading and processing audio",
      "Real-time sound generation and decoding workflow",
    ],
    tech: ["Python", "Flask", "HTML", "CSS", "JavaScript", "Audio Processing"],
  },
  {
    num: "09",
    name: "Ecom Dashboard",
    role: "Individual · Power BI Dashboard",
    description:
      "Interactive e-commerce sales dashboard built using Microsoft Power BI for analyzing sales performance, profit, quantity, and shipping metrics across different countries, states, and markets.",
    bullets: [
      "Visualized sales, profit, quantity, and shipping cost insights",
      "Created interactive filters for category and market analysis",
      "Built charts for sales by country, state, ship mode, market, and category",
      "Enabled data-driven business insights through dynamic visualizations",
    ],
    tech: ["Microsoft Power BI", "Excel", "Data Visualization", "Business Intelligence"],
  },
  {
    num: "10",
    name: "Notes App",
    role: "Individual · Web App",
    description:
      "Simple and user-friendly notes management application with support for audio notes, allowing users to quickly create, organize, and access both text and voice-based notes efficiently.",
    bullets: [
      "Created and managed text and audio notes in one platform",
      "Implemented audio recording and playback functionality",
      "Built a clean and responsive interface for easy note organization",
      "Developed full-stack CRUD operations for storing and managing notes",
    ],
    tech: ["React", "Node.js", "Express.js", "MongoDB", "JavaScript", "HTML", "CSS", "Audio Recording API"],
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
