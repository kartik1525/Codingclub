export const TEAM_LEADERSHIP = {
  president: {
    id: "lead-01",
    name: "Kartikeya Singh",
    role: "Club President & Community Lead",
    trackCode: "CORE LEADERSHIP",
    departmentId: "core-operations",
    department: "B.Tech CSE '26",
    status: "ACTIVE MANDATE · 2026 COHORT",
    image: "",
    quote: "Building an engineering collective where college students turn late-night debugging into production software and national hackathon victories.",
    description: "Leads club vision, bridges student teams with faculty & industry mentors, and drives campus-wide hackathon initiatives.",
    focus: "Student Mentorship, SIH Coordination, Campus Hackathons",
    specialties: ["Distributed Systems", "Go", "SIH Coordination", "Community"],
    socials: {
      github: "https://github.com/aarav-sharma-bbs",
      linkedin: "https://linkedin.com/in/aarav-sharma-bbs",
      email: "aarav@bbscodingclub.org"
    }
  },
  trackLeads: [
    {
      id: "tech-02",
      name: "Priya Patel",
      role: "Technical Lead (Systems & Web)",
      trackCode: "SYSTEMS & WEB",
      departmentId: "systems-web",
      department: "B.Tech IT '26",
      status: "CORE TRACK LEAD",
      image: "/assets/team/priya.jpg",
      description: "Architects club web platforms, reviews student PRs, and hosts deep-dive workshops on full-stack systems and cloud deployments.",
      focus: "React, Node.js, Developer Tooling, CI/CD",
      specialties: ["React / Vite", "Node.js", "Docker", "PostgreSQL"],
      socials: {
        github: "https://github.com/priya-patel-bbs",
        linkedin: "https://linkedin.com/in/priya-patel-bbs",
        email: "priya@bbscodingclub.org"
      }
    },
    {
      id: "algo-03",
      name: "Rohan Verma",
      role: "Competitive Programming Lead",
      trackCode: "ALGORITHMS",
      departmentId: "competitive-programming",
      department: "B.Tech CSE '27",
      status: "CORE TRACK LEAD",
      image: "/assets/team/rohan.jpg",
      description: "Candidate Master on Codeforces. Sets speed-coding contests, mentors ICPC regionalist teams, and runs advanced problem-solving sprints.",
      focus: "Data Structures, Codeforces, ICPC Prep, Problem Setting",
      specialties: ["C++ STL", "Graph Theory", "Dynamic Programming", "ICPC"],
      socials: {
        github: "https://github.com/rohan-verma-bbs",
        linkedin: "https://linkedin.com/in/rohan-verma-bbs",
        email: "rohan@bbscodingclub.org"
      }
    },
    {
      id: "os-04",
      name: "Ananya Singh",
      role: "Open Source & Community Lead",
      trackCode: "OPEN SOURCE",
      departmentId: "open-source",
      department: "B.Tech CSE '27",
      status: "CORE TRACK LEAD",
      image: "/assets/team/ananya.jpg",
      description: "Helps freshmen submit their first pull requests, curates hackathon starter kits, and spearheads open-source student contributions.",
      focus: "Git Workflows, Upstream Contributions, Starter Kits",
      specialties: ["Git & GitHub", "Python", "Linux Kernel Tools", "Documentation"],
      socials: {
        github: "https://github.com/ananya-singh-bbs",
        linkedin: "https://linkedin.com/in/ananya-singh-bbs",
        email: "ananya@bbscodingclub.org"
      }
    },
    {
      id: "hack-05",
      name: "Vikram Joshi",
      role: "Hackathons & Product Lead",
      trackCode: "PRODUCT & SPRINT",
      departmentId: "hackathons-product",
      department: "B.Tech ECE '26",
      status: "CORE TRACK LEAD",
      image: "/assets/team/vikram.jpg",
      description: "National hackathon winner. Guides multidisciplinary teams through 36-hour build cycles, rapid API scaffolding, and pitch decks.",
      focus: "Rapid Prototyping, SIH Finals, System Diagrams, Pitch Prep",
      specialties: ["System Architecture", "Next.js", "Hardware IoT", "Product Strategy"],
      socials: {
        github: "https://github.com/vikram-joshi-bbs",
        linkedin: "https://linkedin.com/in/vikram-joshi-bbs",
        email: "vikram@bbscodingclub.org"
      }
    }
  ]
};

// Backwards compatibility export
export const TEAM_MEMBERS = [
  TEAM_LEADERSHIP.president,
  ...TEAM_LEADERSHIP.trackLeads
];

export const ROSTER_SECTION_HEADER = {
  badge: "CORE LEADERSHIP",
  title: "STUDENT DIRECTORS & TRACK LEADS",
  description: "Meet the undergraduate student builders and department coordinators who organize hackathons, run code reviews, and mentor the community.",
  cta: {
    label: "VIEW COMPLETE ROSTER & MENTORS",
    path: "/team"
  }
};

export const ROSTER_PAGES = [
  // Page 1
  [
    {
      id: "aarav",
      name: "Kartikeya Singh",
      branch: "B.TECH CSE '27",
      role: "CLUB PRESIDENT & COMMUNITY LEAD",
      mandate: "PRESIDENTIAL MANDATE",
      image: "",
      github: "https://github.com/aarav-sharma-bbs",
      linkedin: "https://linkedin.com/in/aarav-sharma-bbs",
      email: "aarav@bbscodingclub.org",
    },
    {
      id: "priya",
      name: "Mohd. Shariq Irshad",
      branch: "MCA '27",
      role: "VICE PRESIDENT & OPERATIONS LEAD",
      mandate: "EXECUTION MANDATE",
      image: "",
      github: "https://github.com/priya-patel-bbs",
      linkedin: "https://linkedin.com/in/priya-patel-bbs",
      email: "priya@bbscodingclub.org",
    },
    {
      id: "rohan",
      name: "Adarsh Pandey",
      branch: "MCA '27",
      role: "TECH LEAD & ARCHITECTURE LEAD",
      mandate: "ARCHITECTURAL MANDATE",
      image: "",
      github: "https://github.com/rohan-verma-bbs",
      linkedin: "https://linkedin.com/in/rohan-verma-bbs",
      email: "rohan@bbscodingclub.org",
    },
    {
      id: "ananya",
      name: "Sakshi Pandey",
      branch: "B.TECH CS '27",
      role: "OUTREACH LEAD & DESIGN LEAD",
      mandate: "OUTREACH MANDATE",
      image: "",
      github: "https://github.com/ananya-singh-bbs",
      linkedin: "https://linkedin.com/in/ananya-singh-bbs",
      email: "ananya@bbscodingclub.org",
    },
  ],
  // Page 2
  [
    {
      id: "vikram",
      name: "Vikram Joshi",
      branch: "B.TECH ECE '26",
      role: "PRODUCT LEAD & INNOVATION LEAD",
      mandate: "INNOVATION MANDATE",
      image: "/assets/team/vikram.jpg",
      github: "https://github.com/vikram-joshi-bbs",
      linkedin: "https://linkedin.com/in/vikram-joshi-bbs",
      email: "vikram@bbscodingclub.org",
    },
    {
      id: "systems-lead",
      name: "Systems Co-Lead",
      branch: "B.TECH CSE '27",
      role: "JUNIOR PLATFORM ARCHITECT",
      mandate: "PLATFORM REVIEW MANDATE",
      image: "/assets/team/priya.jpg",
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "systems@bbscodingclub.org",
    },
    {
      id: "contest-setter",
      name: "Contest Setter",
      branch: "B.TECH IT '27",
      role: "SPEED-CODING PROBLEM SETTER",
      mandate: "ALGORITHMIC MANDATE",
      image: "/assets/team/rohan.jpg",
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "algorithms@bbscodingclub.org",
    },
    {
      id: "os-coord",
      name: "Open Source Coordinator",
      branch: "B.TECH CSE '28",
      role: "GIT & COMMUNITY EVANGELIST",
      mandate: "COMMUNITY ONBOARDING MANDATE",
      image: "/assets/team/ananya.jpg",
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "oss@bbscodingclub.org",
    },
  ],
];

export const TEAM_PAGE_HEADER = {
  badge: "CORE LEADERSHIP & ROSTER",
  title: "RUN BY STUDENTS.\nBUILT FOR BUILDERS.",
  description: "Every track at BBS Coding Club is led by undergraduate engineering students who volunteer their time to organize hackathons, run code reviews, and mentor first-years."
};

export const LEADERSHIP_NOMINATIONS_CALLOUT = {
  badge: "COHORT 2026 TRACK NOMINATIONS",
  title: "WANT TO LEAD A TRACK IN THE NEXT COHORT?",
  description: "Applications for track co-leads, contest coordinators, and sophomore mentors are evaluated every semester. Built for undergraduate students who love shipping real code.",
  cta: {
    label: "SUBMIT LEADERSHIP APPLICATION",
    path: "/join"
  }
};
