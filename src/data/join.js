import { CLUB_INFO } from './clubInfo.js';

export const JOIN_PAGE_HEADER = {
  eyebrow: "GET INVOLVED",
  badge: "GET INVOLVED",
  title: "BUILD WITH US.\nJOIN THE COMMUNITY.",
  description: "Whether you want to learn, build, compete, or help run what we build, there's a place for you at BBS Coding Club."
};

export const WAYS_TO_JOIN_HEADER = {
  eyebrow: "CHOOSE HOW YOU WANT TO PARTICIPATE",
  title: "FIND YOUR PLACE IN THE CLUB."
};

export const CHOOSE_PATH_HEADER = WAYS_TO_JOIN_HEADER;

export const JOIN_PATHS = [
  {
    id: "community",
    number: "01",
    badge: "COMMUNITY MEMBER",
    subtitle: "COMMUNITY MEMBER",
    title: "JOIN THE COMMUNITY",
    description: "Get updates, meet other students, participate in coding sessions, events, hackathons, announcements, and student discussions.",
    cta: {
      label: "JOIN WHATSAPP COMMUNITY ↗",
      href: "https://chat.whatsapp.com/Cx6r3BHaVbRBnDxaJxrFMi",
      isExternal: true
    }
  },
  {
    id: "organizing",
    number: "02",
    badge: "ORGANIZING TEAM",
    subtitle: "ORGANIZING TEAM",
    title: "HELP BUILD THE CLUB",
    description: "Want to do more than attend? Help organize coding sessions, workshops, competitions, events, hackathons, outreach, media, logistics, and technical activities.",
    cta: {
      label: "APPLY TO ORGANIZING TEAM ↓",
      href: "#application",
      isExternal: false
    }
  }
];

export const JOIN_WAYS = JOIN_PATHS;

export const ORGANIZING_SECTION = {
  eyebrow: "ORGANIZING TEAM · VOLUNTEER",
  title: "BUILD THE EVENTS YOU WANT TO ATTEND.",
  description: "From coding sessions to hackathons, our organizing team works behind the scenes to make things happen. Join the team, take responsibility, and help us execute the next generation of Coding Club events.",
  areas: [
    "COORDINATION",
    "PARTICIPANT MANAGEMENT",
    "TECHNICAL SUPPORT",
    "LOGISTICS",
    "MEDIA & OUTREACH",
    "ON-GROUND EXECUTION"
  ],
  disclaimer: "* Opportunity to contribute to hackathon organization; does not guarantee a competitive team position.",
  cta: {
    label: "APPLY TO HELP RUN EVENTS →",
    targetId: "application"
  }
};

export const APPLICATION_SECTION = {
  eyebrow: "VOLUNTEER APPLICATION · JOIN THE ORGANIZING TEAM",
  title: "WANT TO HELP BUILD WHAT COMES NEXT?",
  description: "Tell us where you can contribute and how you'd like to help the Coding Club grow."
};

export const CONTRIBUTION_AREAS = [
  {
    id: "technical",
    title: "Technical & Development",
    shortTitle: "TECHNICAL & CODE",
    description: "Help with technical sessions, coding workshops, problem setting, technical infrastructure, and projects.",
    activities: [
      "Coding Workshops & Code-Alongs",
      "Technical Problem Setting",
      "Project & Repository Maintenance",
      "Hands-on Peer Debugging"
    ],
    technologies: ["JavaScript / React", "Python", "C++ / Java", "Git & GitHub", "Web Standards"]
  },
  {
    id: "hackathons",
    title: "Hackathons & Innovation",
    shortTitle: "HACKATHONS",
    description: "Help brainstorm, coordinate, and execute hackathons, including team formation, logistics, technical support, and event operations.",
    activities: [
      "Hackathon Ideation & Mentoring",
      "Campus Squad Formation",
      "Rapid Prototype Demos",
      "Smart India Hackathon Prep"
    ],
    technologies: ["Rapid MVPs", "Pitch Decks", "System Scaffolding", "Demo Preparation"]
  },
  {
    id: "events-operations",
    title: "Events & Operations",
    shortTitle: "OPERATIONS",
    description: "Help arrange campus lab venues, equipment, attendee registrations, and on-ground logistics during club events.",
    activities: [
      "Lab & Venue Bookings",
      "Participant Check-in & Desk",
      "Technical Setup & Equipment",
      "Certificate Distribution"
    ],
    technologies: ["Google Forms / Sheets", "Event Scheduling", "Venue Logistics", "Coordination"]
  },
  {
    id: "community-outreach",
    title: "Community & Outreach",
    shortTitle: "COMMUNITY",
    description: "Help coordinate with classes, onboard new members, build student engagement, and collect feedback.",
    activities: [
      "Classroom Announcements",
      "New Member Onboarding",
      "Student Feedback Collection",
      "WhatsApp Discussion Moderation"
    ],
    technologies: ["WhatsApp Community", "Class Outreach", "Surveys", "Peer Engagement"]
  },
  {
    id: "content-design",
    title: "Content & Design",
    shortTitle: "DESIGN",
    description: "Help design promotional materials, announcements, banners, and maintain the club's visual branding.",
    activities: [
      "Event Posters & Banners",
      "Announcement Content",
      "Brand Consistency",
      "Presentation Visuals"
    ],
    technologies: ["Figma", "Canva", "Typography", "Editorial Layouts"]
  },
  {
    id: "media-documentation",
    title: "Media & Documentation",
    shortTitle: "MEDIA & DOCS",
    description: "Help capture event photos, videos, maintain archives, and record major club milestones.",
    activities: [
      "Event Photography & Video",
      "Media Archive Organization",
      "Milestone Highlights",
      "Activity Reports"
    ],
    technologies: ["Photography", "Media Editing", "Cloud Storage", "Documentation"]
  }
];

export const ACTIVITY_OPTIONS = [
  "Coding Workshops",
  "Competitive Programming",
  "Hackathons",
  "Technical Sessions",
  "Community & Outreach",
  "Event Operations",
  "Content & Design",
  "Media & Documentation"
];

export const BRANCH_YEAR_OPTIONS = [
  { value: "CS - 1st Year", label: "CSE - 1st Year" },
  { value: "CS - 2nd Year", label: "CSE - 2nd Year" },
  { value: "CS - 3rd Year", label: "CSE - 3rd Year" },
  { value: "CS - 4th Year", label: "CSE - 4th Year" },
  { value: "IT - 1st Year", label: "IT - 1st Year" },
  { value: "IT - 2nd Year", label: "IT - 2nd Year" },
  { value: "IT - 3rd Year", label: "IT - 3rd Year" },
  { value: "MCA - 1st Year", label: "MCA - 1st Year" },
  { value: "MCA - 2nd Year", label: "MCA - 2nd Year" },
  { value: "ECE - 1st/2nd Year", label: "ECE - 1st/2nd Year" },
  { value: "Other Branch", label: "Other Engineering Branch" }
];

export const HACKATHON_OPPORTUNITY = {
  eyebrow: ORGANIZING_SECTION.eyebrow,
  badge: "SMART INDIA HACKATHON",
  title: ORGANIZING_SECTION.title,
  description: ORGANIZING_SECTION.description,
  details: ORGANIZING_SECTION.areas.join(" · "),
  note: ORGANIZING_SECTION.disclaimer
};
