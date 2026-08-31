/**
 * areas.js - The 5 Scalable Interest Areas for BBS Coding Club
 * 
 * Replaces the formal "Department" concept with authentic, scalable interest areas
 * that represent what members learn, build, experiment with, and participate in.
 */

export const AREAS = [
  {
    id: "web-software",
    title: "Web & Software Development",
    shortTitle: "Web & Software",
    tagline: "Architecting full-stack web platforms, reliable APIs, and production software.",
    overview: "We turn theoretical software engineering concepts into working products. Members learn modern frontend frameworks, scalable backends, database design, and collaborative Git workflows through hands-on building.",
    description: "From production web platforms to internal student tooling, members collaborate on real repositories, write clean modular code, and deploy to live cloud environments.",
    topics: [
      "Frontend Frameworks (React, Next.js)",
      "Backend Engineering & REST APIs",
      "Databases & Schema Design (PostgreSQL, SQLite)",
      "Authentication & Security Essentials",
      "Modern State Management & Performance",
      "Cloud Deployment & Server Management"
    ],
    technologies: ["React", "JavaScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Git & GitHub", "Vite", "Linux"],
    activities: [
      "Hands-on Coding Sprints",
      "Pull Request & Code Teardowns",
      "Campus Web Tooling Projects",
      "Full-Stack Architecture Sessions"
    ],
    relatedProjects: [
      {
        title: "BBS Coding Club Digital Platform",
        category: "Production Web Engineering",
        url: "/projects"
      }
    ],
    relatedEvents: [
      {
        title: "Git, Pull Requests & First OSS Contributions",
        category: "Workshop"
      }
    ]
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortTitle: "AI & Machine Learning",
    tagline: "Experimenting with applied machine learning, computer vision, and generative models.",
    overview: "A student interest group focused on understanding modern AI algorithms and building practical applications. We emphasize hands-on experimentation with models, datasets, and AI-assisted workflows rather than unsupported research claims.",
    description: "Members explore real-world machine learning fundamentals, test computer vision pipelines, experiment with open-source LLM integrations, and discuss ethical engineering practices.",
    topics: [
      "Data Analysis & Feature Engineering",
      "Supervised & Unsupervised Learning",
      "Neural Networks & PyTorch Fundamentals",
      "Computer Vision & Image Processing",
      "Generative AI & LLM API Integrations",
      "Model Evaluation & Error Analysis"
    ],
    technologies: ["Python", "PyTorch", "scikit-learn", "NumPy & Pandas", "OpenCV", "Hugging Face", "Jupyter"],
    activities: [
      "Dataset Exploration & Model Training",
      "AI Project Brainstorms & Demos",
      "Kaggle Problem-Solving Sessions",
      "Paper Discussions & Architecture Breakdowns"
    ],
    relatedProjects: [],
    relatedEvents: []
  },
  {
    id: "competitive-programming",
    title: "Competitive Programming",
    shortTitle: "Competitive Programming",
    tagline: "Sharpening algorithmic thinking, mathematical intuition, and contest speed.",
    overview: "Dedicated to problem-solving rigor and contest practice. Members practice algorithmic problem solving, analyze time and space complexity, and prepare for collegiate competitions and technical interviews.",
    description: "We host campus practice ladders, dissect tricky Dynamic Programming problems, and encourage friendly coding duels to build algorithmic confidence.",
    topics: [
      "Data Structures (Trees, Graphs, Disjoint Sets)",
      "Dynamic Programming & Memoization",
      "Graph Algorithms (BFS, DFS, Dijkstra)",
      "Greedy Approaches & Two Pointers",
      "Number Theory & Combinatorics",
      "Contest Strategy & Time Management"
    ],
    technologies: ["C++ STL", "Data Structures", "Algorithms", "Codeforces", "LeetCode", "CSES"],
    activities: [
      "Weekly Problem-Solving Ladders",
      "Contest Retrospectives & Editorial Breakdowns",
      "Speed-Coding Campus Duels",
      "Technical Interview Practice Rounds"
    ],
    relatedProjects: [],
    relatedEvents: [
      {
        title: "Weekend Project Showcase & Lightning Talks",
        category: "Community"
      }
    ]
  },
  {
    id: "open-source",
    title: "Open Source & Developer Tools",
    shortTitle: "Open Source & Tools",
    tagline: "Mastering version control, developer tooling, and collaborative software culture.",
    overview: "Open-source is how modern software is built. We demystify Git, guide members through their first public pull requests, and explore command-line utilities that make engineering faster and more enjoyable.",
    description: "Learn how to fork repositories, create atomic commits, write clean documentation, navigate large codebases, and contribute meaningfully to public software projects.",
    topics: [
      "Advanced Git (Rebase, Cherry-pick, Bisect)",
      "Pull Request Etiquette & Code Reviews",
      "Command Line & Shell Scripting",
      "Linux Environment & Dotfiles",
      "Package Management & Semantic Versioning",
      "Documentation & README Best Practices"
    ],
    technologies: ["Git", "GitHub & Actions", "Bash / Zsh", "Linux", "Markdown", "Docker", "Vim / Neovim"],
    activities: [
      "First Pull Request Walkthroughs",
      "Terminal & CLI Tooling Demos",
      "Upstream Issue Triage Sessions",
      "Hacktoberfest & Community Sprints"
    ],
    relatedProjects: [
      {
        title: "BBS Coding Club Digital Platform",
        category: "Open Source",
        url: "https://github.com/bbs-coding-club"
      }
    ],
    relatedEvents: [
      {
        title: "Hands-on Workshop: Git & Pull Requests",
        category: "Workshop"
      }
    ]
  },
  {
    id: "hackathons-innovation",
    title: "Hackathons & Innovation",
    shortTitle: "Hackathons & Sprints",
    tagline: "Forming cross-disciplinary squads, rapid prototyping, and building 36-hour MVPs.",
    overview: "Turning ideas into functional software prototypes under real-world time constraints. We help students assemble balanced teams, prepare for competitions like Smart India Hackathon (SIH), and pitch working demos with confidence.",
    description: "From problem statement selection and system architecture diagrams to rapid API scaffolding and jury presentations, members learn how to ship under pressure.",
    topics: [
      "Problem Statement Validation & User Scenarios",
      "Rapid Prototyping & MVP Scaffolding",
      "Cross-Discipline Team Coordination",
      "Architecture Diagrams & System Flowcharts",
      "Pitch Decks & Live Demo Preparation",
      "Smart India Hackathon (SIH) Internal Prep"
    ],
    technologies: ["Rapid Prototyping", "Full-Stack MVPs", "Figma", "REST APIs", "Vercel / Netlify", "Docker"],
    activities: [
      "Hackathon Ideation & Squad Assembly",
      "36-Hour Campus Mock Hack Nights",
      "Architecture & Pitch Deck Teardowns",
      "Live Demo Dry-Runs & Jury Feedback"
    ],
    relatedProjects: [
      {
        title: "SIH Campus Evaluation Hub",
        category: "Student Prototype",
        url: "/projects"
      }
    ],
    relatedEvents: [
      {
        title: "SIH Internal Campus Hackathon 2026",
        category: "Hackathon"
      }
    ]
  }
];

export const AREAS_PAGE_HEADER = {
  badge: "AREAS WE EXPLORE",
  title: "FIVE FOCUS AREAS.\nONE STUDENT DEVELOPER COMMUNITY.",
  description: "We're building a community around the technologies, problems, and opportunities that excite us. Explore what members learn, build, and experiment with across campus."
};

export const AREAS_CATALOGUE_HEADER = {
  badge: "COMPLETE CATALOGUE",
  title: "ALL 5 AREAS AT A GLANCE"
};

export const AREAS_PREVIEW = {
  badge: "AREAS WE EXPLORE",
  title: "WHAT WE BUILD & LEARN.",
  description: "We're building a community around the technologies, problems, and opportunities that excite us.",
  cta: {
    label: "EXPLORE ALL AREAS",
    path: "/explore"
  }
};
