export const EVENTS = [
  {
    id: "sih-internal-2026",
    title: "SIH Internal Campus Hackathon 2026",
    tagline:
      "36 hours of building, debugging, teamwork, and turning ideas into working prototypes.",
    date: "2026-09-07",
    formattedDate: "07 SEP 2026",
    time: "09:00 AM IST",
    location: "To be announced",
    category: "hackathon",
    status: "upcoming",
    registrationOpen: true,
    registrationUrl:
      "https://docs.google.com/forms/d/e/1FAIpQLSd2_-dfx9lbQSIlMVlhPMpjfnGBCYRNTGD_8eSj9lMAQ83wOQ/viewform",
    image: "/assets/events/sih-2026/cover.jpg",
    gallery: [
      "/assets/events/sih-2026/01.jpg",
      "/assets/events/sih-2026/02.jpg",
      "/assets/events/sih-2026/03.jpg",
      "/assets/events/sih-2026/04.jpg",
    ],
    tracks: [
      "Smart Automation",
      "Campus Life & Student Tech",
      "Clean Tech",
      "Open Innovation",
    ],
    description:
      "Our internal selection round for the Smart India Hackathon. Students will form teams, work on real problem statements, build prototypes, and present their solutions to a jury.",
    note:
      "Open to undergraduate students. Bring your laptop, your team, and a willingness to spend the day building.",
  },

  {
    id: "yukti-1.0",
    title: "Yukti 1.0",
    tagline:
      "A hands-on session focused on getting students comfortable with Git, GitHub, and open-source workflows.",
    date: "2025-11-23",
    formattedDate: "23 NOV 2025",
    time: "10:00 AM IST",
    location: "CS Lab 02, Library",
    category: "hackathon",
    status: "completed",
    image: "/assets/events/yukti1.0/cover.jpg",
    gallery: [
      "/assets/events/yukti1.0/IMG_5166.JPG",
      "/assets/events/yukti1.0/IMG_5417.JPG",
      "/assets/events/yukti1.0/IMG_5430.JPG",
      "/assets/events/yukti1.0/IMG_5444.JPG",
      "/assets/events/yukti1.0/IMG_5452.JPG",
      "/assets/events/yukti1.0/IMG_6792.JPG",
      "/assets/events/yukti1.0/IMG_6918.JPG",
    ],
    registrationOpen: false,
    tracks: [
      "Git Fundamentals",
      "Branching & Merging",
      "GitHub Workflows",
      "Open Source",
    ],
    description:
      "Yukti 1.0 was a practical session where students got familiar with Git and GitHub by actually using them. From setting up repositories and branches to making changes and working with pull requests, the focus was on learning by doing.",
  },

  {
    id: "github-workshop",
    title: "Hands-on Workshop: Git & GitHub",
    tagline:
      "Breaking down version control and helping students get comfortable with real Git workflows.",
    date: "2025-08-29",
    formattedDate: "29 AUG 2025",
    time: "05:00 PM IST",
    location: "CS Lab 01",
    category: "workshop",
    status: "completed",
    image: "/assets/events/github2025/cover.jpg",
    gallery: [
      "/assets/events/github2025/01.jpg",
      "/assets/events/github2025/02.jpg",
      "/assets/events/github2025/03.jpg",
      "/assets/events/github2025/04.jpg",
    ],
    registrationOpen: false,
    tracks: [
      "Git & GitHub",
      "Branches",
      "Pull Requests",
      "Code Reviews",
      "Live Practice",
    ],
    description:
      "A beginner-friendly workshop where students learned the basics of Git and GitHub through hands-on practice. We covered repositories, commits, branches, pull requests, and the basic workflow used when working on projects with other developers.",
  },

  {
    id: "ML-STUDY-JAM",
    title: "ML STUDY JAM",
    tagline:
      "A 6 hour long hands-on workshop covering Machine Learning and an introduction to Agentic AI.",
    date: "2025-09-13",
    formattedDate: "13 SEP 2025",
    time: "10:00 AM IST",
    location: "Seminar Room B",
    category: "workshop",
    status: "completed",
    image: "/assets/events/mljam2025/cover.jpg",
    gallery: [
      "/assets/events/mljam2025/01.jpg",
      "/assets/events/mljam2025/02.jpg",
      "/assets/events/mljam2025/03.jpg",
      "/assets/events/mljam2025/04.jpg",
    ],
    registrationOpen: false,
    tracks: [
      "Introduction to Machine Learning",
      "Introduction to Agentic AI",
      "Practical Examples",
      "Live Demos",
      "Discussion & Q&A",
    ],
    description:
      "A six-hour learning session covering the basics of Machine Learning along with an introduction to Agentic AI. The session combined explanations, practical examples, live demos, and discussions to help students understand how these technologies are actually used.",
  },
];

export const EVENTS_PAGE_HEADER = {
  badge: "EVENTS, WORKSHOPS & CONTESTS",
  title: "CAMPUS HACKATHONS,\nLAB SESSIONS & CONTESTS.",
  description:
    "A look at the hackathons, workshops, and technical sessions we've organised or taken part in as a student community. From getting started with Git to building for hackathons, these are the spaces where we learn by doing.",
};

export const EVENT_CATEGORIES = [
  { id: "all", label: "ALL EVENTS" },
  { id: "hackathon", label: "HACKATHONS" },
  { id: "workshop", label: "WORKSHOPS" },
  { id: "community", label: "COMMUNITY & DEMOS" },
];

export const EVENT_STATUSES = [
  { id: "all", label: "ALL STATUSES" },
  { id: "upcoming", label: "UPCOMING" },
  { id: "completed", label: "COMPLETED" },
];