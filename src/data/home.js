import { CLUB_INFO } from './clubInfo.js';

export const HERO_CONTENT = {
  words: ["LEARN.", "BUILD.", "EXPERIMENT."],
  staticPrefix: "WE",
  longestWord: "EXPERIMENT.",
  description: "We are a community of college students who love writing code, building software that people actually use, and staying up late debugging during hackathons. No corporate jargon—just genuine builders rooted at BBS.",
  primaryCta: {
    label: "JOIN THE CLUB ↗",
    path: "/join"
  },
  secondaryCta: {
    label: "SEE OUR PROJECTS ↓",
    href: "#projects"
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

export const DEPARTMENTS_PREVIEW = {
  badge: "SPECIALIZED TRACKS",
  title: "EXPLORE CLUB TRACKS.",
  cta: {
    label: "VIEW ALL 5 DEPARTMENTS",
    path: "/departments"
  }
};

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
  badge: "STUDENT CONSOLE",
  version: "bbs-sh — v1.0.4",
  tty: "LAB TTY: /dev/pts/0",
  quickCommands: ["whoami", "mission", "status", "help"],
  initialHistory: [
    { type: "input", text: "whoami" },
    { type: "output", text: "bbs_coding_club — student developer community" },
    { type: "input", text: "cat mission.txt" },
    { type: "output", text: "build things that work. learn with friends. ship code before graduation." },
    { type: "input", text: "./status" },
    { type: "output", text: "> SIH '26 TRACK: ACTIVE | DISCORD: ONLINE | LAB MEETS: CS LAB 02" }
  ],
  commandResponses: {
    help: "AVAILABLE COMMANDS:\n  whoami          — print community identity\n  cat mission.txt — view club charter\n  status          — show upcoming tracks\n  projects        — list active student builds\n  join            — open membership signup\n  clear           — reset terminal screen",
    whoami: "bbs_coding_club — student developer community at BBS",
    mission: "build things that work. learn with friends. ship code before graduation.",
    status: "> ALL SQUADS ACTIVE · FALL 2026 SIGNUPS OPEN",
    projects: "ACTIVE REPOSITORIES:\n  • bbs-official-web (React + Custom CSS Design System)\n  • sih-eval-hub (Hackathon Judging Dashboard Prototype)\n  • student-submissions (Open Call for Member Projects)",
    join: "> OPENING APPLICATION FORM..."
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
