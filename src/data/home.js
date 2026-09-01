import { CLUB_INFO } from './clubInfo.js';

export const HERO_CONTENT = {
  words: ["LEARN.", "BUILD.", "GROW."],
  staticPrefix: "WE",
  longestWord: "GROW.",
  description: "BBS Coding Club is a student-led community at BBS where we learn, build, and grow together. From coding sessions and workshops to hackathons and real projects, we create a space where students can turn ideas into something they can actually build.",
  primaryCta: {
    label: "JOIN THE CLUB ↗",
    path: "/join"
  },
  secondaryCta: {
    label: "EXPLORE WHAT WE DO ↓",
    href: "#areas"
  },
  campusPhoto: {
    src: "/assets/bbs-college.jpg",
    alt: `${CLUB_INFO.institution} campus building`,
    title: CLUB_INFO.institution.toUpperCase(),
    subtitle: "CAMPUS LABS & HACKATHON ARENA"
  },
  bottomMeta: {
    estText: `EST. ${CLUB_INFO.estYear}`,
    institutionText: CLUB_INFO.institution.toUpperCase(),
    locationText: `CAMPUS LOCATION: ${CLUB_INFO.fullCampusLocation.toUpperCase()}`,
    protocolText: "COMMUNITY PROTOCOL: IN-PERSON LABS + ASYNC BUILDS"
  }
};

export const MARQUEE_ITEMS = [
  "BUILD",
  "LEARN",
  "COMPETE",
  "CREATE",
  "COLLABORATE",
  "SHIP",
  "DEBUG",
  "DEPLOY"
];

export const ABOUT_PREVIEW = {
  badge: "ABOUT US OVERVIEW",
  title: "WE ARE NOT JUST A CODING CLUB.",
  description: "Most college clubs stop at slide presentations and textbook definitions. At BBS Coding Club, we learn by actually writing code, building software with our peers, competing in national hackathons, and preparing each other for modern engineering careers.",
  cta: {
    label: "READ FULL ABOUT & MISSION",
    path: "/about"
  }
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

export const DEPARTMENTS_PREVIEW = AREAS_PREVIEW;

export const PROJECTS_PREVIEW = {
  badge: "SELECTED BUILDS",
  title: "THINGS WE'VE SHIPPED.",
  cta: {
    label: "VIEW ALL PROJECTS & REPOS",
    path: "/projects"
  }
};

export const EVENTS_PREVIEW = {
  badge: "SCHEDULE & ACTIVITIES",
  title: "UPCOMING & RECENT EVENTS.",
  cta: {
    label: "VIEW FULL EVENT ARCHIVE",
    path: "/events"
  }
};

export const TERMINAL_CONFIG = {
  badge: "INTERACTIVE CONSOLE",
  title: "EXPLORE THE CLUB FROM THE TERMINAL",
  description: "Curious how BBS Coding Club works? Type a command and explore what we build, learn, and compete in.",
  headerTitle: "bbs-sh — interactive club terminal",
  statusText: "STATUS: ONLINE",
  quickCommands: ["help", "whoami", "learn", "compete", "team"],
  initialHistory: [
    { type: "input", text: "whoami" },
    { 
      type: "output", 
      text: "bbs_coding_club\nstudent-led coding community\nBBS College of Engineering & Technology\n\nWe learn by building, compete by challenging ourselves,\nand grow by helping each other." 
    }
  ],
  commandResponses: {
    help: `AVAILABLE COMMANDS

whoami
→ Learn what BBS Coding Club is

about
→ See what the club is about

learn
→ Explore what members learn

build
→ See what members build and practice

compete
→ Explore hackathons and coding competitions

events
→ See upcoming club activities

team
→ Meet the student leadership team

clear
→ Clear the terminal

help
→ Show available commands`,

    whoami: `bbs_coding_club
student-led coding community
BBS College of Engineering & Technology

We learn by building, compete by challenging ourselves,
and grow by helping each other.`,

    about: `BBS Coding Club is a student-led community for students
who enjoy coding, building, experimenting, and learning
together.

From coding sessions and workshops to hackathons and
technical competitions, the club focuses on practical
learning and collaboration.`,

    learn: `LEARN

→ Programming & DSA
→ Web & Software Development
→ Git & GitHub
→ Problem Solving
→ Development Workflows
→ Emerging Technologies

Learn by doing, reviewing, breaking, fixing, and building.`,

    build: `BUILD

→ Web applications
→ Student tools
→ Technical prototypes
→ Open-source contributions
→ Hackathon solutions

The goal isn't to build for the sake of building.
It's to solve something useful.`,

    compete: `COMPETE

→ Smart India Hackathon
→ Coding competitions
→ Hackathons
→ Algorithmic problem solving
→ Inter-college technical events

Find a team. Pick a problem. Build something that works.`,

    events: `UPCOMING ACTIVITIES

→ SIH Internal Campus Hackathon 2026
→ Coding & DSA sessions
→ Technical workshops
→ Community meetups

Use the Events page to see the latest schedule.`,

    team: `CORE TEAM

President / Club Head — Kartikeya Singh
Vice President — Adarsh Pandey
General Secretary — Mohd. Shariq Irshad
Technical Lead — Aditya Raj Chowdhary
Event & Hackathon Lead — Raj Upadhyaya
Community & Outreach Lead — Sakshi Pandey
Content & Design Lead — Umamani Singh
Technical Coordinator — Krishna Chandra Updahyaya
Event & Operations Coordinator — Akarshit Singh
Media & Documentation Coordinator — Aditya Singh

→ Visit /team to meet the team`
  }
};

export const JOIN_BANNER = {
  badge: "MEMBERSHIP & ONBOARDING",
  title: "READY TO BUILD REAL SOFTWARE WITH YOUR PEERS?",
  description: "Choose your track, meet fellow student developers, collaborate on campus hackathon squads, and level up your engineering skills outside the classroom.",
  cta: {
    label: "START APPLICATION / ONBOARDING",
    path: "/join"
  }
};
