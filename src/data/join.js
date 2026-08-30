import { CLUB_INFO } from './clubInfo.js';

export const JOIN_PAGE_HEADER = {
  badge: "MEMBERSHIP & ONBOARDING",
  title: "BUILD WITH US.\nJOIN BBS CODING CLUB.",
  description: "Whether you wrote your first lines of code last week or have already deployed side projects, BBS Coding Club welcomes any undergraduate student who wants to learn, build software, and compete in hackathons."
};

export const WHY_JOIN_HIGHLIGHTS = [
  {
    id: "shipping",
    iconType: "terminal",
    title: "Learn by Shipping",
    description: "No boring PowerPoint slides. Build software for campus use, submit real pull requests, and deploy live prototypes with your peers."
  },
  {
    id: "squads",
    iconType: "users",
    title: "Hackathon Squads",
    description: "Find teammates for Smart India Hackathon (SIH) and collegiate hackathons, brainstorm architectures, and prepare live prototype demos."
  },
  {
    id: "mentorship",
    iconType: "sparkles",
    title: "Senior Peer Mentorship",
    description: "Get unstuck during late-night debugging, receive honest resume reviews, and learn algorithms with structured peer guidance."
  }
];

export const JOIN_STEPS = {
  step1: {
    badge: "STEP 1 OF 2",
    title: "SELECT YOUR PREFERRED TRACK",
    hint: "CLICK A CARD TO SELECT"
  },
  step2: {
    badge: "STEP 2 OF 2",
    title: "SUBMIT APPLICATION"
  }
};

export const BRANCH_YEAR_OPTIONS = [
  { value: "CS - 1st Year", label: "CSE - 1st Year (2028)" },
  { value: "CS - 2nd Year", label: "CSE - 2nd Year (2027)" },
  { value: "CS - 3rd Year", label: "CSE - 3rd Year (2026)" },
  { value: "IT - 1st Year", label: "IT - 1st Year (2028)" },
  { value: "IT - 2nd Year", label: "IT - 2nd Year (2027)" },
  { value: "ECE - 1st/2nd Year", label: "ECE - 1st/2nd Year" },
  { value: "Other Engineering", label: "Other Engineering Branch" }
];

export const INTEREST_OPTIONS = [
  { value: "Systems & Web Engineering", label: "Systems & Web Engineering" },
  { value: "Algorithms & Speed-Coding", label: "Algorithms & Speed-Coding" },
  { value: "Hackathons & SIH Squads", label: "Hackathons & SIH Squads" },
  { value: "Open Source & Git Tooling", label: "Open Source & Git Tooling" },
  { value: "Undecided / Want to Explore All", label: "Undecided / Want to Explore All" }
];

export const ALTERNATE_CHANNELS_CALLOUT = {
  badge: "ALTERNATE CHANNELS",
  title: "PREFER JOINING OUR DISCORD SERVER DIRECTLY?",
  description: "Hop into our open Discord channels to hang out, participate in weekly code teardowns, and ask technical questions.",
  channels: [
    { label: "DISCORD SERVER ↗", href: CLUB_INFO.socials.discord },
    { label: "GITHUB ORG ↗", href: CLUB_INFO.socials.github }
  ]
};

export const JOIN_SECTION_CONTENT = {
  badge: "JOIN THE COMMUNITY",
  title: "READY TO BUILD?",
  description: "Whether you wrote your first lines of Python last semester or have already deployed side projects, BBS Coding Club welcomes any student who wants to learn, build, and ship real code.",
  valuePill: {
    label: "WHAT WE VALUE",
    text: "Curiosity, consistency, and a willingness to learn in public."
  },
  getPill: {
    label: "WHAT YOU GET",
    text: "Teammates for hackathons, project reviews, and a real community."
  },
  channelsTitle: "DIRECT COMMUNITY CHANNELS",
  formHeader: "SIGNUP FOR 2026 COHORT",
  formBadge: "FREE MEMBERSHIP",
  footerNote: "NO FEES · ALL STUDENTS WELCOME REGARDLESS OF EXPERIENCE"
};
