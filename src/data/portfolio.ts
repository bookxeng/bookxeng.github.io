export interface Link {
  label: string;
  href: string;
}

export interface Education {
  school: string;
  degrees: string[];
  period: string;
  gpa: string;
  coursework: { name: string; topics: string }[];
}

export interface Experience {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  tech: string[];
}

export interface Project {
  title: string;
  year: number;
  summary: string;
  highlights: string[];
  stats?: { value: string; label: string }[];
  tech: string[];
  links?: Link[];
  featured?: boolean;
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export const profile = {
  name: "Pongnapat Limmongkolhirun",
  shortName: "Pongnapat L",
  handle: "bookxeng",
  title: "Software Engineer · Backend & Machine Learning",
  tagline:
    "Computer Engineering student at KMITL building backend services, ML models and the systems that connect them.",
  location: "Bangkok, Thailand",
  email: "pongnapatlmkhr@gmail.com",
  github: "https://github.com/bookxeng",
  linkedin: "https://www.linkedin.com/in/pongnapat-limmongkolhirun-109481318",
  about: [
    "I'm a dual-degree student at King Mongkut's Institute of Technology Ladkrabang, studying Computer Engineering (IoT System and Information Engineering) alongside Industrial Physics.",
    "Most recently I was a Backend Intern at TTB Bank, shipping Spring Boot microservices to Kubernetes and building an agentic RAG assistant for code and spec review. Outside of work I like building things end to end, from a chess engine and an AlphaZero-style network trained on Lichess games to computer-vision apps deployed in the cloud.",
  ],
  spokenLanguages: [
    { name: "Thai", level: "Native" },
    { name: "English", level: "TOEIC 840/990 (B2)" },
  ],
} as const;

export const education: Education = {
  school: "King Mongkut's Institute of Technology Ladkrabang (Dual Degree)",
  degrees: [
    "Bachelor of Computer Engineering (IoT System and Information Engineering)",
    "Bachelor of Science (Industrial Physics)",
  ],
  period: "2023 – Present",
  gpa: "3.24",
  coursework: [
    { name: "AI of Things", topics: "RAG, Machine Learning, Computer Vision" },
    { name: "Data Analytics", topics: "Data Visualization, Neural Networks" },
    { name: "Mobile Application Development", topics: "JavaScript, React" },
    { name: "Web Application Development", topics: "TypeScript, React, Node.js" },
  ],
};

export const experiences: Experience[] = [
  {
    company: "TTB Bank",
    role: "Software Engineer, Backend Intern",
    location: "Bangkok, Thailand",
    period: "May 2026 – Oct 2026",
    highlights: [
      "Developed and implemented features for a banking learning platform using Java and Spring Boot, following the software development life cycle (SDLC).",
      "Built an agentic RAG assistant using GitHub Copilot over a document knowledge base of linked Jira/Confluence specs, with guardrails, to review code and documentation against business requirements.",
      "Configured library services to cut CPU execution time by 70% and memory allocation by 65%.",
      "Built and deployed microservices to Kubernetes via Jenkins CI/CD and debugged pods with kubectl.",
    ],
    tech: ["Java", "Spring Boot", "Kubernetes", "Jenkins", "RAG", "GitHub Copilot", "Jira", "Confluence"],
  },
];

export const projects: Project[] = [
  {
    title: "Chess AI with Deep Learning and Monte Carlo Tree Search",
    year: 2026,
    featured: true,
    summary:
      "A from-scratch chess rules engine and gym-style training environment, plus an AlphaZero-style network trained on strong human games and paired with Monte Carlo tree search.",
    highlights: [
      "Wrote a complete chess rules engine in pure Python + NumPy (castling, en passant, promotion, repetition and fifty-move draws) verified with perft against reference positions, exposed as a gym-style environment with a 4,672-move AlphaZero action space.",
      "Built a data pipeline that processes 500K Lichess games (2000+ Elo) into 38.8M training positions using a compact position format encoded on the GPU.",
      "Trained an AlphaZero-style ResNet (3.5M parameters, policy + value heads) in PyTorch on Google Colab, reaching 53% accuracy predicting strong players' moves.",
      "Implemented Monte Carlo tree search with batched GPU inference and an opponent ladder (random, greedy, Stockfish) — scoring 73.5% over 100 games against Stockfish limited to 2000 Elo.",
    ],
    stats: [
      { value: "38.8M", label: "training positions" },
      { value: "3.5M", label: "parameters" },
      { value: "53%", label: "move accuracy" },
      { value: "73.5%", label: "vs Stockfish 2000" },
    ],
    tech: ["Python", "PyTorch", "NumPy", "ResNet", "MCTS", "Google Colab", "pytest", "Stockfish"],
    links: [{ label: "GitHub", href: "https://github.com/bookxeng/chessml" }],
  },
  {
    title: "Chilli Detector with LINE Chatbot",
    year: 2025,
    summary:
      "A computer-vision service that detects chillies in user photos sent through LINE, with a web dashboard for managing results.",
    highlights: [
      "Deployed a custom-trained YOLOv8 model behind a Flask microservice to process image data.",
      "Built a Flask API for model inference and a Next.js frontend on Vercel to visualize and manage data stored in MongoDB.",
      "Integrated with a LINE Official Account for real-time user interaction and deployed the backend on Google Cloud.",
    ],
    tech: ["YOLOv8", "Flask", "Next.js", "MongoDB", "Vercel", "Google Cloud", "LINE Messaging API"],
  },
  {
    title: "Full-Stack Food Data Aggregator",
    year: 2024,
    summary:
      "A nutrition app that aggregates external food data and calculates personal caloric targets.",
    highlights: [
      "Developed a RESTful API with Express and TypeScript, using DTOs to validate external food data requests.",
      "Designed a relational PostgreSQL schema to securely manage user profiles and calculate caloric targets with high data integrity.",
    ],
    tech: ["TypeScript", "Express", "Node.js", "PostgreSQL", "REST API"],
  },
];

export const programmingLanguages: string[] = ["Python", "Java", "TypeScript", "JavaScript", "C++"];

export const skillGroups: SkillGroup[] = [
  {
    category: "Backend & Web",
    items: ["Spring Boot", "Express", "Flask", "Node.js", "React", "Next.js", "REST APIs"],
  },
  {
    category: "Machine Learning",
    items: ["PyTorch", "TensorFlow", "NumPy", "OpenCV", "YOLOv8"],
  },
  {
    category: "Databases & Cloud",
    items: ["PostgreSQL", "MongoDB", "Google Cloud", "Azure", "Vercel"],
  },
  {
    category: "DevOps & Tools",
    items: ["Kubernetes", "Docker", "Jenkins", "Git", "GitHub", "pytest"],
  },
  {
    category: "Concepts",
    items: [
      "Microservice Architecture",
      "CI/CD",
      "CNN / ResNet",
      "Monte Carlo Tree Search",
      "Computer Vision",
      "RAG",
      "Deep Learning",
    ],
  },
];
