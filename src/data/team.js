/**
 * team.js - Official Leadership Structure of BBS Coding Club
 * 
 * 10 Official Positions and Core Members:
 * 1. President / Club Head — Kartikeya Singh
 * 2. Vice President — Adarsh Pandey
 * 3. General Secretary — Mohd. Shariq Irshad
 * 4. Technical Lead — Aditya Raj Chowdhary
 * 5. Event & Hackathon Lead — Raj Upadhyaya
 * 6. Community & Outreach Lead — Sakshi Pandey
 * 7. Content & Design Lead — Umamani Singh
 * 8. Technical Coordinator — Krishna Chandra Upadhyaya
 * 9. Event & Operations Coordinator — Akarshit Singh
 * 10. Media & Documentation Coordinator — Aditya Singh
 */

export const TEAM_MEMBERS = [
  // ─── PRESIDENT / CLUB HEAD ─────────────────────────────────────────
  {
    id: "kartikeya-singh",
    name: "Kartikeya Singh",
    designation: "President / Club Head",
    primaryRole: "Overall leadership",
    shortDescription: "Provides overall direction and vision for the club, coordinates the team, and keeps everyone moving together.",
    image: "/assets/team/kartikeya.jpeg",
    imagePosition: "center 35%",
    initials: "KS",
    branch: "B.Tech CSE",
    responsibilities: [
      "Provide overall direction and vision for the club",
      "Coordinate with the Faculty Coordinator and college administration",
      "Approve major activities and initiatives",
      "Lead committee meetings and decision-making",
      "Delegate responsibilities and monitor progress",
      "Represent the Coding Club in official meetings and institutional events",
      "Ensure the club remains focused on its objectives"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },

  // ─── EXECUTIVE TEAM ───────────────────────────────────────────────
  {
    id: "adarsh-pandey",
    name: "Adarsh Pandey",
    designation: "Vice President",
    primaryRole: "Execution & coordination",
    shortDescription: "Coordinates teams across club initiatives, keeps tasks moving, and helps turn committee decisions into action.",
    image: "/assets/team/adarsh.jpeg",
    imagePosition: "center 20%",
    initials: "AP",
    branch: "MCA",
    responsibilities: [
      "Assist the President in managing club activities",
      "Coordinate between committee members and teams",
      "Monitor assigned tasks",
      "Take charge in the absence of the President",
      "Help resolve operational issues during events",
      "Ensure committee decisions are implemented"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "shariq-irshad",
    name: "Mohd. Shariq Irshad",
    designation: "General Secretary",
    primaryRole: "Administration & documentation",
    shortDescription: "Maintains official records, meeting documentation, communications, and important club activity reports.",
    image: "/assets/team/shariq.jpeg",
    imagePosition: "center 60%",
    initials: "SI",
    branch: "MCA",
    responsibilities: [
      "Maintain official club records",
      "Prepare meeting agendas, minutes, and reports",
      "Handle official notices and internal communication",
      "Maintain membership and participation records",
      "Prepare event documentation",
      "Coordinate reports, proposals, and permission requests"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },

  // ─── CORE FUNCTIONAL LEADS ─────────────────────────────────────────
  {
    id: "aditya-raj-chowdhary",
    name: "Aditya Raj Chowdhary",
    designation: "Technical Lead",
    primaryRole: "Technical direction",
    shortDescription: "Guides technical direction, organizes coding activities, and helps members improve their programming skills.",
    image: "/assets/team/adi.jpeg",
    imagePosition: "center 30%",
    initials: "AC",
    branch: "B.Tech CSE",
    responsibilities: [
      "Plan and supervise coding-related activities",
      "Organize coding workshops and DSA sessions",
      "Identify suitable technologies and topics",
      "Guide technical activities and coding competitions",
      "Support students in improving programming skills",
      "Maintain technical quality",
      "Coordinate with the Technical Coordinator"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "raj-upadhyaya",
    name: "Raj Upadhyaya",
    designation: "Event & Hackathon Lead",
    primaryRole: "Event planning & execution",
    shortDescription: "Plans hackathons, coding competitions, workshops, and manages technical events from preparation to execution.",
    image: "/assets/team/raj.jpeg",
    imagePosition: "center 40%",
    initials: "RU",
    branch: "B.Tech CSE",
    responsibilities: [
      "Plan coding competitions, hackathons, workshops, and technical events",
      "Prepare schedules and activity plans",
      "Coordinate with participants, judges, mentors, and volunteers",
      "Manage event execution",
      "Ensure events follow approved rules",
      "Coordinate with Operations for logistics and venues"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "sakshi-pandey",
    name: "Sakshi Pandey",
    designation: "Community & Outreach Lead",
    primaryRole: "Student engagement",
    shortDescription: "Builds the student community, coordinates with classes, welcomes new members, and keeps the club connected with students.",
    image: "/assets/team/sakshi.jpeg",
    imagePosition: "center 35%",
    initials: "SP",
    branch: "B.Tech CSE",
    responsibilities: [
      "Promote the Coding Club among students",
      "Encourage participation",
      "Coordinate with classes and student groups",
      "Recruit and onboard members",
      "Collect student feedback",
      "Build an active and inclusive coding community",
      "Maintain communication with members"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "umamani-singh",
    name: "Umamani Singh",
    designation: "Content & Design Lead",
    primaryRole: "Branding & communication",
    shortDescription: "Shapes the club's visual identity, creates promotional designs, and helps communicate events and activities clearly.",
    image: "/assets/team/uma.jpeg",
    imagePosition: "62% 25%",
    initials: "US",
    branch: "B.Tech CSE",
    responsibilities: [
      "Design posters, banners, and promotional materials",
      "Prepare content for announcements and social media",
      "Maintain visual identity consistency",
      "Create promotional material for events",
      "Coordinate with Community & Outreach",
      "Assist with presentations and visual materials"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },

  // ─── COORDINATORS ───────────────────────────────────────────────────
  {
    id: "krishna-chandra-upadhyaya",
    name: "Krishna Chandra Upadhyaya",
    designation: "Technical Coordinator",
    primaryRole: "Technical support",
    shortDescription: "Supports technical sessions, prepares coding exercises, helps participants during technical activities, and assists hackathon teams.",
    image: "/assets/team/krishna.jpeg",
    imagePosition: "center 25%",
    initials: "KU",
    branch: "B.Tech CSE",
    responsibilities: [
      "Assist the Technical Lead",
      "Prepare coding problems and workshop material",
      "Provide technical support during events",
      "Help participants with technical queries",
      "Support hackathon teams",
      "Help evaluate and improve technical activities"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "akarshit-singh",
    name: "Akarshit Singh",
    designation: "Event & Operations Coordinator",
    primaryRole: "Logistics & event support",
    shortDescription: "Handles venues, registrations, equipment, event logistics, and on-ground coordination.",
    image: "/assets/team/akarshit.jpeg",
    imagePosition: "center top",
    initials: "AS",
    branch: "B.Tech CSE",
    responsibilities: [
      "Arrange venues and equipment",
      "Manage registrations and attendance",
      "Coordinate seating and infrastructure",
      "Assist with event schedules",
      "Coordinate certificates and event materials",
      "Support the Event & Hackathon Lead"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  },
  {
    id: "aditya-singh",
    name: "Aditya Singh",
    designation: "Media & Documentation Coordinator",
    primaryRole: "Media & records",
    shortDescription: "Captures club activities, maintains the media archive, and helps document events, achievements, and important club moments.",
    image: "/assets/team/aditya.jpeg",
    imagePosition: "center 56%",
    initials: "AS",
    branch: "B.Tech CSE",
    responsibilities: [
      "Capture photographs and videos",
      "Maintain the media archive",
      "Prepare event highlights",
      "Coordinate with Content & Design",
      "Collect event information",
      "Maintain records of achievements and activities"
    ],
    socials: {
      github: "https://github.com/bbs-coding-club",
      linkedin: "https://linkedin.com/company/bbs-coding-club",
      email: "contact@bbscodingclub.org"
    }
  }
];

export const CORE_MEMBERS = TEAM_MEMBERS;

export const FEATURED_LEADS = [
  TEAM_MEMBERS[0], // Kartikeya Singh (President / Club Head)
  TEAM_MEMBERS[1], // Adarsh Pandey (Vice President)
  TEAM_MEMBERS[2], // Mohd. Shariq Irshad (General Secretary)
  TEAM_MEMBERS[3], // Aditya Raj Chowdhary (Technical Lead)
];

export const TEAM_PAGE_HEADER = {
  badge: "TEAM",
  title: "MEET THE PEOPLE BEHIND THE CODE.",
  description: "We're a student-run club, which means the people learning, building, organizing, and competing are the same people making the club happen."
};

export const ROSTER_SECTION_HEADER = {
  badge: "CORE LEADERSHIP",
  title: "THE PEOPLE BEHIND THE CODE.",
  description: "Run by students, for students. Meet the core leadership team organizing activities, guiding technical sessions, and building the community.",
  cta: {
    label: "MEET THE FULL TEAM",
    path: "/team"
  }
};

export const LEADERSHIP_NOMINATIONS_CALLOUT = {
  badge: "STUDENT INVOLVEMENT",
  title: "WANT TO HELP BUILD THE COMMUNITY?",
  description: "We are always looking for curious, active students to help organize workshops, coordinate hackathon squads, and support their peers.",
  cta: {
    label: "JOIN THE COMMUNITY",
    path: "/join"
  }
};
