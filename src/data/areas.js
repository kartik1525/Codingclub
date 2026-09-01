/**
 * areas.js - The 4 Scalable Technical Areas for BBS Coding Club
 * 
 * Authentic, student-focused technical areas that represent what members
 * learn, build, experiment with, and explore together.
 */

export const AREAS = [
  {
    id: "web-software",
    title: "Web & Software Development",
    shortTitle: "Web & Software",
    areaLabel: "WHAT WE EXPLORE",
    contextLabel: "ONE OF THE AREAS WE BUILD IN",
    tagline: "Building web applications, helpful campus tools, and exploring modern developer workflows.",
    overview: "We explore everything from frontend interfaces and backend APIs to databases, deployment, and the tools that keep modern web applications running. Rather than just following tutorials alone in our rooms, we learn by building small features together, sharing code, and figuring out how things work behind the scenes.",
    description: "From simple student utilities to full-stack web platforms, we write code, experiment with frameworks, discuss system design, and learn how to ship projects that actual people can use.",
    topics: [
      "Frontend Frameworks (React, Next.js)",
      "Backend APIs & Server Logic",
      "Databases & Schema Design (PostgreSQL, SQLite)",
      "Authentication & Web Security Basics",
      "State Management & Clean Component Patterns",
      "Cloud Deployment & Server Basics"
    ],
    technologies: ["React", "JavaScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Git & GitHub"],
    activities: [
      "Hands-on Coding Sprints",
      "Git & Code Reviews",
      "Web Experiments",
      "Deployment & Tooling Jams"
    ],
    detailedActivities: [
      {
        title: "Hands-on Coding Sprints",
        description: "Build small features together and learn by actually writing and testing code."
      },
      {
        title: "Git & Code Reviews",
        description: "Read each other's code, discuss better approaches, and learn collaborative workflows."
      },
      {
        title: "Web Experiments",
        description: "Try new frameworks, APIs, tools, and ideas without worrying about building something perfect."
      },
      {
        title: "Deployment & Tooling Jams",
        description: "Get code running on live servers and learn how domain names, SSL, and cloud hosts work."
      }
    ],
    relatedProjects: [],
    relatedEvents: []
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    shortTitle: "AI & Machine Learning",
    areaLabel: "TECHNICAL AREA",
    contextLabel: "AN AREA WE EXPERIMENT WITH",
    tagline: "Exploring machine learning basics, computer vision, and hands-on AI tools.",
    overview: "A student interest area for people curious about how AI models actually work and what we can build with them. We focus on practical experiments, understanding datasets, and integrating AI APIs into useful applications rather than relying solely on dry mathematical theory.",
    description: "Members explore real-world machine learning fundamentals, test image recognition pipelines, connect open-source models into apps, and discuss practical AI workflows.",
    topics: [
      "Data Analysis & Cleaning with Python",
      "Supervised & Unsupervised Learning Concepts",
      "Neural Networks & PyTorch Fundamentals",
      "Computer Vision & Image Processing",
      "Generative AI & LLM API Integrations",
      "Evaluating Models & Understanding Errors"
    ],
    technologies: ["Python", "PyTorch", "scikit-learn", "NumPy & Pandas", "OpenCV", "Hugging Face"],
    activities: [
      "Dataset Exploration",
      "Model Building & Experiments",
      "AI App Integrations",
      "Paper & Concept Teardowns"
    ],
    detailedActivities: [
      {
        title: "Dataset Exploration",
        description: "Clean, visualize, and understand real-world data using Python, Pandas, and Jupyter."
      },
      {
        title: "Model Building & Experiments",
        description: "Train simple models, tweak parameters, and learn why certain algorithms perform better."
      },
      {
        title: "AI App Integrations",
        description: "Connect vision models, speech recognition, and LLMs into interactive web projects."
      },
      {
        title: "Paper & Concept Teardowns",
        description: "Break down interesting papers and new model architectures into everyday student language."
      }
    ],
    relatedProjects: [],
    relatedEvents: []
  },
  {
    id: "dsa",
    title: "Data Structures & Algorithms",
    shortTitle: "DSA & Problem Solving",
    areaLabel: "CORE FOUNDATION",
    contextLabel: "PROBLEM SOLVING & LOGIC",
    tagline: "Build strong problem-solving fundamentals through data structures, algorithms, complexity analysis, and practical implementation.",
    overview: "Build strong problem-solving fundamentals through data structures, algorithms, complexity analysis, and practical implementation. We focus on understanding core data structure trade-offs, mastering recursive thinking, and breaking complex problems into structured algorithmic steps.",
    description: "Build strong problem-solving fundamentals through data structures, algorithms, complexity analysis, and practical implementation. We practice regularly to build intuition and confidence for technical interviews and engineering problem solving.",
    topics: [
      "Arrays, Strings & Linked Lists",
      "Stacks, Queues, Trees & Graphs",
      "Searching, Sorting & Recursion",
      "Dynamic Programming & Greedy Algorithms",
      "Time & Space Complexity"
    ],
    technologies: ["C++", "STL", "Data Structures", "Algorithms", "Problem Solving"],
    activities: [
      "Algorithmic Problem Ladders",
      "Data Structure Implementations",
      "Complexity & Logic Reviews",
      "Interview Problem Walkthroughs"
    ],
    detailedActivities: [
      {
        title: "Algorithmic Problem Ladders",
        description: "Solve structured problems progressively to build intuitive problem-solving confidence."
      },
      {
        title: "Data Structure Implementations",
        description: "Code trees, heaps, and graphs from scratch to master their inner mechanics."
      },
      {
        title: "Complexity & Logic Reviews",
        description: "Analyze Big-O time and memory trade-offs to write clean, optimal, and dependable code."
      },
      {
        title: "Interview Problem Walkthroughs",
        description: "Walk through common data structure questions asked in technical software internship interviews."
      }
    ],
    relatedProjects: [],
    relatedEvents: []
  },
  {
    id: "hackathons-innovation",
    title: "Hackathons & Innovation",
    shortTitle: "Hackathons & Innovation",
    areaLabel: "WHERE WE TEAM UP",
    contextLabel: "WHERE WE SPRINT & HACK",
    tagline: "Forming teams, brainstorming ideas, and building fast prototypes together.",
    overview: "Hackathons are one of the most exciting ways to learn because you build under time pressure with your friends. We help students assemble balanced teams, prepare for competitions like Smart India Hackathon (SIH), and turn rough ideas into functional prototypes.",
    description: "From picking problem statements and sketching system diagrams to rapid API scaffolding and practicing demo presentations, members learn how to build and ship under a deadline.",
    topics: [
      "Problem Statement Validation & Brainstorming",
      "Rapid Prototyping & MVP Scaffolding",
      "Cross-Discipline Team Coordination",
      "Architecture Diagrams & System Flowcharts",
      "Demo Day Dry Runs & Presentation Prep",
      "Smart India Hackathon (SIH) Campus Prep"
    ],
    technologies: ["Rapid Prototyping", "Full-Stack MVPs", "Figma", "REST APIs", "Vercel", "Docker"],
    activities: [
      "Team Assembly & Brainstorms",
      "Weekend Prototyping Sprints",
      "Demo & Pitch Dry Runs",
      "SIH & Contest Prep"
    ],
    detailedActivities: [
      {
        title: "Team Assembly & Brainstorms",
        description: "Find teammates across different years and branches who complement your skills."
      },
      {
        title: "Weekend Prototyping Sprints",
        description: "Build a working proof-of-concept in a weekend instead of getting stuck in planning loops."
      },
      {
        title: "Demo & Pitch Dry Runs",
        description: "Practice presenting what you built clearly, showing the working demo, and answering questions."
      },
      {
        title: "SIH & Contest Prep",
        description: "Understand problem statements, evaluate feasibility, and prepare submissions effectively."
      }
    ],
    relatedProjects: [],
    relatedEvents: []
  }
];

export const AREAS_PAGE_HEADER = {
  badge: "AREAS WE EXPLORE",
  title: "WHAT WE LEARN & BUILD TOGETHER.",
  description: "These are the technical areas and interests we explore as a student coding community. No formal departments or rigid silos—just topics we're curious about and projects we work on together."
};

export const AREAS_CATALOGUE_HEADER = {
  badge: "ALL TOPICS",
  title: "OUR TECHNICAL AREAS AT A GLANCE"
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
