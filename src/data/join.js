import { CLUB_INFO } from './clubInfo.js';

export const JOIN_PAGE_HEADER = {
  badge: "GET INVOLVED",
  title: "BUILD WITH US.\nJOIN THE COMMUNITY.",
  description: "Whether you're here to learn, build, compete, or help run what we build, there's a place for you at BBS Coding Club. Join our community, find your people, and start building."
};

export const JOIN_PATHS = [
  {
    id: "community",
    badge: "COMMUNITY MEMBER",
    secondaryText: "DEFAULT ENTRY",
    title: "JOIN THE COMMUNITY",
    description: "Get updates, meet other students, participate in events, and stay connected with the BBS Coding Club.",
    supportingText: "Join the BBS Coding Club WhatsApp Community and stay connected with coding sessions, events, hackathons, announcements, and other students.",
    cta: {
      label: "JOIN WHATSAPP COMMUNITY ↗",
      href: "https://chat.whatsapp.com/Cx6r3BHaVbRBnDxaJxrFMi",
      isExternal: true
    },
    accent: false
  },
  {
    id: "organizing",
    badge: "ORGANIZING TEAM",
    secondaryText: "VOLUNTEER ROLE",
    title: "JOIN THE ORGANIZING TEAM",
    description: "Want to do more than attend? Apply to become a Coding Club volunteer and help organize workshops, competitions, events, and hackathons.",
    supportingText: "Help run hackathons, coordinate campus coding activities, guide workshops, and work behind the scenes with the club team.",
    cta: {
      label: "APPLY TO ORGANIZING TEAM ↓",
      href: "#apply",
      isExternal: false
    },
    accent: true
  }
];

export const ORGANIZING_HERO = {
  eyebrow: "VOLUNTEER APPLICATION",
  badge: "JOIN THE ORGANIZING TEAM",
  title: "HELP US BUILD WHAT HAPPENS NEXT.",
  description: "BBS Coding Club is run by students who don't just attend events — they help create them. Apply to join the organizing team and contribute to workshops, coding sessions, competitions, community initiatives, and hackathons."
};

export const JOIN_STEPS = {
  step1: {
    badge: "STEP 1 OF 2",
    title: "CHOOSE YOUR INTERESTS",
    description: "Tell us where you'd like to contribute.",
    hint: "CLICK A CARD TO SELECT"
  },
  step2: {
    badge: "STEP 2 OF 2",
    title: "SUBMIT APPLICATION",
    description: "Share a little about yourself and how you'd like to contribute."
  }
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
  eyebrow: "UPCOMING FOCUS",
  badge: "SMART INDIA HACKATHON",
  title: "BUILD THE EVENTS YOU WANT TO ATTEND.",
  description: "From coding sessions to hackathons, our organizing team works behind the scenes to make things happen. Join the team, take responsibility, and help us execute the next generation of Coding Club events.",
  details: "Help with coordination, participant management, technical support, logistics, media, outreach, and on-ground execution.",
  note: "Opportunity to contribute to hackathon organization; does not guarantee a competitive team position."
};

export const STAY_CONNECTED_CALLOUT = {
  badge: "STAY CONNECTED",
  title: "JOIN THE COMMUNITY DIRECTLY?",
  description: "Join the official BBS Coding Club WhatsApp Community for announcements, event updates, coding sessions, hackathons, and student discussions.",
  channels: [
    { label: "WHATSAPP COMMUNITY ↗", href: CLUB_INFO.socials.whatsapp, isPrimary: true },
    { label: "GITHUB ORG ↗", href: CLUB_INFO.socials.github, isPrimary: false }
  ]
};

// Backwards compatibility mappings for older components
export const INTEREST_OPTIONS = CONTRIBUTION_AREAS.map(a => ({
  value: a.title,
  label: a.title
}));

export const WHY_JOIN_HIGHLIGHTS = [
  {
    id: "community",
    iconType: "users",
    title: "Community Member",
    description: "Join our WhatsApp Community to participate in coding workshops, hackathons, and study groups."
  },
  {
    id: "organizer",
    iconType: "terminal",
    title: "Volunteer & Organize",
    description: "Help run hackathons, manage registrations, prepare problem sets, and build club activities."
  },
  {
    id: "hackathons",
    iconType: "sparkles",
    title: "Hackathon Execution",
    description: "Gain hands-on experience coordinating events like the Smart India Hackathon internal rounds."
  }
];

export const ALTERNATE_CHANNELS_CALLOUT = {
  badge: STAY_CONNECTED_CALLOUT.badge,
  title: STAY_CONNECTED_CALLOUT.title,
  description: STAY_CONNECTED_CALLOUT.description,
  channels: STAY_CONNECTED_CALLOUT.channels
};
