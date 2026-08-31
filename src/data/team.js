/**
 * team.js - Core Team of BBS Coding Club
 * 
 * Represents the ~10 actual undergraduate students organizing, mentoring,
 * and building the BBS Coding Club community.
 */

export const FEATURED_LEADS = [
  {
    id: "kartikeya",
    name: "Kartikeya Singh",
    role: "President & Community Lead",
    branch: "B.Tech CSE '27",
    category: "Core Organizers",
    status: "PRESIDENTIAL MANDATE",
    image: "",
    bio: "Leads club initiatives, coordinates campus hackathon participation, and mentors junior students in software engineering and community building.",
    focus: "Student Mentorship, SIH Coordination, Community Growth",
    specialties: ["Full-Stack Systems", "Community Building", "Hackathons"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "shariq",
    name: "Mohd. Shariq Irshad",
    role: "Vice President & Operations Lead",
    branch: "MCA '27",
    category: "Core Organizers",
    status: "OPERATIONS MANDATE",
    image: "",
    bio: "Oversees club operations, coordinates event logistics, and ensures smooth collaboration between student working groups and campus administration.",
    focus: "Club Operations, Event Logistics, Squad Planning",
    specialties: ["Operations", "Event Logistics", "Team Management"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "adarsh",
    name: "Adarsh Pandey",
    role: "Tech Lead & Platform Architect",
    branch: "MCA '27",
    category: "Technical & Projects",
    status: "TECHNICAL MANDATE",
    image: "",
    bio: "Spearheads internal technical projects, reviews student pull requests, and maintains the club's digital platforms and infrastructure.",
    focus: "Platform Architecture, Web Systems, Code Reviews",
    specialties: ["React / Vite", "Node.js", "System Architecture"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "sakshi",
    name: "Sakshi Pandey",
    role: "Outreach Lead & Design Coordinator",
    branch: "B.Tech CS '27",
    category: "Community & Outreach",
    status: "OUTREACH MANDATE",
    image: "",
    bio: "Drives student outreach, community communications, visual design, and welcoming first-year students to the club's WhatsApp network and discord channels.",
    focus: "Community Outreach, UI/UX Design, Student Onboarding",
    specialties: ["UI/UX Design", "Social Strategy", "Community Onboarding"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  }
];

export const CORE_MEMBERS = [
  ...FEATURED_LEADS,
  {
    id: "cp-coord",
    name: "Problem Solving Coordinator",
    role: "Competitive Programming Lead",
    branch: "B.Tech CSE '27",
    category: "Technical & Projects",
    status: "ALGORITHMIC MANDATE",
    image: "",
    bio: "Curates weekly problem sets on Codeforces and LeetCode, runs contest retrospectives, and helps members improve algorithmic speed and intuition.",
    focus: "Data Structures, Algorithms, Contest Practice",
    specialties: ["C++ STL", "Graph Theory", "Dynamic Programming"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "oss-mentor",
    name: "Open Source Coordinator",
    role: "Git & Open Source Mentor",
    branch: "B.Tech IT '27",
    category: "Technical & Projects",
    status: "OPEN SOURCE MANDATE",
    image: "",
    bio: "Guides freshmen through their first Git commits, explains PR workflows, and curates open-source starter packages for club members.",
    focus: "Git Workflows, GitHub Actions, Linux Fundamentals",
    specialties: ["Git & GitHub", "Linux CLI", "Documentation"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "hack-coord",
    name: "Hackathons Coordinator",
    role: "Hackathon & Prototyping Lead",
    branch: "B.Tech ECE '26",
    category: "Technical & Projects",
    status: "PROTOTYPING MANDATE",
    image: "",
    bio: "Helps students assemble balanced hackathon teams, brainstorms MVP architectures, and conducts dry-run demo presentations before submission deadlines.",
    focus: "Rapid Prototyping, SIH Preparation, Demo Pitching",
    specialties: ["Rapid MVPs", "Hardware/IoT", "Pitch Decks"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "events-coord",
    name: "Events Coordinator",
    role: "Workshops & Lab Sprints Lead",
    branch: "B.Tech CSE '27",
    category: "Core Organizers",
    status: "LOGISTICS MANDATE",
    image: "",
    bio: "Organizes hands-on code-alongs in campus CS labs, reserves seminar venues, and manages attendance and workshop schedules.",
    focus: "Lab Bookings, Workshop Scheduling, Event Execution",
    specialties: ["Event Coordination", "Lab Logistics", "Student Support"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "community-mod",
    name: "Community Coordinator",
    role: "Discord & WhatsApp Moderator",
    branch: "B.Tech CSE '28",
    category: "Community & Outreach",
    status: "ENGAGEMENT MANDATE",
    image: "",
    bio: "Monitors daily discussions on the student WhatsApp group and Discord server, answers technical queries, and shares curated learning resources.",
    focus: "Community Chat Moderation, Peer Support, Resource Sharing",
    specialties: ["Discord Management", "Community Support", "Discussion Facilitation"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "content-editor",
    name: "Editorial & Content Lead",
    role: "Technical Content & Documentation",
    branch: "B.Tech IT '27",
    category: "Community & Outreach",
    status: "EDITORIAL MANDATE",
    image: "",
    bio: "Writes workshop recaps, documents project guides, and crafts announcements for the campus developer community.",
    focus: "Technical Writing, Announcement Updates, Project Documentation",
    specialties: ["Technical Writing", "Documentation", "Content Strategy"],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  }
];

export const TEAM_CATEGORIES = [
  { id: "all", label: "ALL CORE TEAM" },
  { id: "Core Organizers", label: "CORE ORGANIZERS" },
  { id: "Technical & Projects", label: "TECHNICAL & PROJECTS" },
  { id: "Community & Outreach", label: "COMMUNITY & OUTREACH" }
];

export const TEAM_PAGE_HEADER = {
  badge: "THE PEOPLE BUILDING THE COMMUNITY",
  title: "RUN BY STUDENTS.\n100% STUDENT ORGANIZED.",
  description: "BBS Coding Club is organized and maintained by undergraduate students who volunteer their time to build projects, organize events, support their peers, and grow the community."
};

export const ROSTER_SECTION_HEADER = {
  badge: "CORE TEAM PREVIEW",
  title: "THE PEOPLE BUILDING THE COMMUNITY.",
  description: "Run by students, for students. Meet the core members who organize events, build projects, coordinate activities, and support the community.",
  cta: {
    label: "MEET THE FULL TEAM",
    path: "/team"
  }
};

export const LEADERSHIP_NOMINATIONS_CALLOUT = {
  badge: "STUDENT INVOLVEMENT",
  title: "WANT TO HELP BUILD THE COMMUNITY?",
  description: "We are always looking for curious, active students to help organize workshops, moderate Discord channels, and coordinate hackathon squads.",
  cta: {
    label: "JOIN THE CORE SQUAD",
    path: "/join"
  }
};

// Backwards compatibility mappings for older components
export const TEAM_LEADERSHIP = {
  president: FEATURED_LEADS[0],
  trackLeads: FEATURED_LEADS.slice(1)
};

export const TEAM_MEMBERS = CORE_MEMBERS;

export const ROSTER_PAGES = [
  FEATURED_LEADS,
  CORE_MEMBERS.slice(4, 8)
];
