export const EVENTS = [
  {
    id: "sih-internal-2026",
    title: "SIH Internal Campus Hackathon 2026",
    tagline: "36 hours of real student engineering, late-night debugging, and prototype demos.",
    date: "2026-08-26",
    formattedDate: "26 AUG 2026",
    time: "09:00 AM IST",
    location: "Campus Computing Center & Hybrid",
    category: "hackathon",
    status: "upcoming",
    registrationOpen: true,
    registrationUrl: "#join",
    image: "/assets/hackathon.jpg",
    tracks: ["Smart Automation", "Campus Life & Student Tech", "Clean Tech", "Open Innovation"],
    description: "The official university internal selection rounds for Smart India Hackathon. Cross-year student squads prototype working software solutions with peer code reviews and live jury feedback.",
    note: "Open to all undergraduate students. Bring your laptops, power strips, and problem-solving drive."
  },
  {
    id: "git-open-source-lab",
    title: "Hands-on Workshop: Git, Pull Requests & First OSS Contributions",
    tagline: "Breaking down version control fear and making real PRs.",
    date: "2026-07-20",
    formattedDate: "20 JUL 2026",
    time: "04:30 PM IST",
    location: "CS Lab 02",
    category: "workshop",
    status: "completed",
    image: "/assets/workshop.jpg",
    registrationOpen: false,
    tracks: ["Git Fundamentals", "Branching Workflows", "Open Source PRs"],
    description: "An interactive code-along where students configured their SSH keys, cloned community repos, resolved real merge conflicts, and submitted their first GitHub pull requests."
  },
  {
    id: "hackathon-demo-day",
    title: "Weekend Project Showcase & Lightning Talks",
    tagline: "5-minute student demos of weekend prototypes and terminal tools.",
    date: "2026-05-12",
    formattedDate: "12 MAY 2026",
    time: "03:00 PM IST",
    location: "Seminar Room B",
    category: "community",
    status: "completed",
    registrationOpen: false,
    tracks: ["Live Demos", "Architecture Teardowns", "Peer Feedback"],
    description: "Informal, high-energy session where members showed off scripts, bots, web experiments, and got direct feedback from fellow builders over pizza."
  }
];

export const EVENTS_PAGE_HEADER = {
  badge: "EVENTS, WORKSHOPS & CONTESTS",
  title: "CAMPUS HACKATHONS,\nLAB SESSIONS & CONTESTS.",
  description: "The full archive and upcoming calendar of BBS Coding Club engineering events. We run overnight build sprints, interactive code-alongs, and technical lightning talk showcases."
};

export const EVENT_CATEGORIES = [
  { id: 'all', label: 'ALL EVENTS' },
  { id: 'hackathon', label: 'HACKATHONS' },
  { id: 'workshop', label: 'WORKSHOPS' },
  { id: 'community', label: 'COMMUNITY & DEMOS' },
];

export const EVENT_STATUSES = [
  { id: 'all', label: 'ALL STATUSES' },
  { id: 'upcoming', label: 'UPCOMING' },
  { id: 'completed', label: 'COMPLETED' },
];
