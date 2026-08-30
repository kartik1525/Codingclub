export const TEAM_LEADERSHIP = {
  president: {
    id: "lead-01",
    name: "Aarav Sharma",
    role: "Club President & Community Lead",
    trackCode: "CORE // 01",
    departmentId: "core-operations",
    department: "B.Tech CSE '26",
    status: "ACTIVE MANDATE // 2026 COHORT",
    image: "/assets/team/aarav.jpg",
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
      trackCode: "SYS // 02",
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
      trackCode: "ALGO // 03",
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
      trackCode: "OSS // 04",
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
      trackCode: "PROD // 05",
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
