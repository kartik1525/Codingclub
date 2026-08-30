export const PROJECTS = [
  {
    id: "bbs-official-web",
    title: "BBS Coding Club Digital Platform",
    tagline: "The official web platform and community gateway built by student developers.",
    category: "Web Engineering / Design Systems",
    year: "2026",
    status: "ACTIVE PRODUCTION · OPEN SOURCE",
    description: "Designed and implemented in-house to give BBS Coding Club an editorial, technically credible digital identity. Built with React and a strict custom CSS design token system without bloated UI templates.",
    techTags: ["React", "JavaScript", "Vite", "Custom CSS", "Design Systems"],
    contributors: ["Student Core Developers"],
    image: "/assets/project-mockup.jpg",
    demoUrl: "#hero",
    repoUrl: "https://github.com/bbs-coding-club",
    isReal: true,
    context: "Replaced generic club portal concepts with an engineered, high-contrast editorial platform featuring interactive terminals, accessible navigation, and curated student tracks."
  },
  {
    id: "sih-eval-hub",
    title: "SIH Campus Evaluation Hub",
    tagline: "Internal hackathon judging rubrics and team leaderboard tool.",
    category: "Student Prototype · In Development",
    year: "2026",
    status: "PROTOTYPING · FALL 2026",
    description: "An internal evaluation dashboard designed to streamline live scoring and rubric normalization for college hackathons and Smart India Hackathon internal selections.",
    techTags: ["React", "Node.js", "SQLite"],
    contributors: ["Hackathon Working Group"],
    image: "/assets/hackathon.jpg",
    demoUrl: "#events",
    repoUrl: "https://github.com/bbs-coding-club",
    isReal: true,
    context: "Created by student organizers to replace chaotic paper rubrics with transparent live leaderboard synchronization during overnight hackathon rounds."
  },
  {
    id: "student-project-slot-open",
    title: "[YOUR PROJECT HERE]",
    tagline: "Built something cool in your dorm or lab? Showcase it here.",
    category: "Community Showcase Submission",
    year: "2026",
    status: "OPEN FOR MEMBER SUBMISSIONS",
    description: "Every member of BBS Coding Club has the opportunity to submit their side projects, open-source libraries, or hackathon MVPs to the official club showcase.",
    techTags: ["Your Tech Stack", "Open Source", "Peer Review"],
    contributors: ["Open to All Members"],
    demoUrl: "#join",
    repoUrl: "https://github.com/bbs-coding-club",
    isPlaceholder: true,
    context: "We run monthly project showcases and peer code reviews where student builders pitch their repositories to senior peers and alumni mentors."
  }
];

export const PROJECTS_PAGE_HEADER = {
  badge: "SELECTED BUILDS & REPOSITORIES",
  title: "SOFTWARE ENGINEERED\nFOR ACTUAL CAMPUS USE.",
  description: "Real software built by student members at BBS Coding Club. From production web applications and evaluation systems to open-source starter packages."
};

export const PROJECT_CATEGORIES = [
  { id: 'all', label: 'ALL BUILDS' },
  { id: 'web', label: 'WEB SYSTEMS' },
  { id: 'hackathon', label: 'HACKATHON MVPS' },
  { id: 'community', label: 'MEMBER REPOS' },
];

export const PROJECTS_SUBMISSION_CALLOUT = {
  badge: "MEMBER SHOWCASE PORTAL",
  title: "SHIPPED A REPOSITORY OR HACKATHON MVP?",
  description: "Every BBS Coding Club member has the opportunity to showcase their side projects and repositories to the community and alumni network.",
  cta: {
    label: "SUBMIT PR ON GITHUB",
    url: "https://github.com/bbs-coding-club"
  }
};
