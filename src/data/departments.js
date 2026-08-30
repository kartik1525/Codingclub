export const DEPARTMENTS = [
  {
    id: "systems-web",
    code: "SYSTEMS",
    name: "Web & Systems Engineering",
    shortName: "Systems & Web",
    leadName: "Priya Patel",
    leadRole: "Technical Lead (Systems & Web)",
    leadYear: "B.Tech IT '26",
    leadImage: "/assets/team/priya.jpg",
    tagline: "Architecting reliable web platforms, internal tooling, and cloud pipelines.",
    description: "The backbone of BBS Coding Club digital infrastructure. We design and maintain our web platforms, developer CLI utilities, containerized services, and review pull requests submitted by members across all tracks.",
    purpose: "Turn theoretical web development knowledge into production engineering competence with real codebases and CI/CD pipelines.",
    responsibilities: [
      "Maintain the official BBS Coding Club web platform and open source starter kits",
      "Conduct bi-weekly architectural deep dives and pull request code reviews",
      "Set up automated testing, Docker containers, and CI/CD deployments",
      "Mentor freshman developers transitioning from basic HTML/JS to full-stack systems"
    ],
    skills: ["React & Vite", "Node.js", "Go & Systems", "Docker", "PostgreSQL", "CI/CD & Git"],
    tools: ["Vite", "Tailwind CSS", "Docker", "GitHub Actions", "PostgreSQL", "Linux"],
    currentOpenings: "Open for 2nd & 3rd Year Core Developers & Junior Reviewers",
    featuredProject: {
      title: "BBS Coding Club Digital Platform",
      category: "Production Web Engineering",
      url: "/projects"
    }
  },
  {
    id: "competitive-programming",
    code: "ALGORITHMS",
    name: "Algorithms & Competitive Programming",
    shortName: "Competitive Programming",
    leadName: "Rohan Verma",
    leadRole: "Competitive Programming Lead",
    leadYear: "B.Tech CSE '27",
    leadImage: "/assets/team/rohan.jpg",
    tagline: "Sharpening mathematical rigor, speed-coding intuition, and contest problem solving.",
    description: "Dedicated to algorithmic problem solving, contest preparation, and mathematical problem sets. We coach collegiate teams for ICPC, host campus speed-coding tournaments, and run weekly practice ladders on Codeforces and LeetCode.",
    purpose: "Demystify complex data structures and algorithms through peer practice, friendly campus contests, and rigorous interview prep.",
    responsibilities: [
      "Host weekly campus problem-solving ladders and algorithmic breakdown sessions",
      "Organize internal college coding duels and speed-coding tournaments",
      "Coach and curate teams for ACM ICPC regional qualifiers",
      "Prepare curated interview question guides on Dynamic Programming and Graph Theory"
    ],
    skills: ["C++ STL", "Data Structures", "Dynamic Programming", "Graph Theory", "Number Theory"],
    tools: ["Codeforces", "LeetCode", "AtCoder", "CSES Problem Set", "GCC"],
    currentOpenings: "Open for Contest Problem Setters & Practice Ladder Mentors",
    featuredProject: {
      title: "Campus Speed-Coding Duel System",
      category: "Contest Platform",
      url: "/projects"
    }
  },
  {
    id: "hackathons-product",
    code: "PRODUCT",
    name: "Hackathons & Product Innovation",
    shortName: "Hackathons & Product",
    leadName: "Vikram Joshi",
    leadRole: "Hackathons & Product Lead",
    leadYear: "B.Tech ECE '26",
    leadImage: "/assets/team/vikram.jpg",
    tagline: "Rapid 36-hour build cycles, SIH mentorship, and prototype validation.",
    description: "Specializes in building functional MVPs under tight deadlines. We prepare student squads for Smart India Hackathon (SIH) and national build sprints, teaching rapid API scaffolding, pitch decks, and technical demonstration strategies.",
    purpose: "Bridge the gap between raw student ideas and working software that solves genuine campus and community problems.",
    responsibilities: [
      "Organize the annual SIH Internal Selection rounds and overnight hackathons",
      "Run rapid MVP scaffolding bootcamps covering state management and backend APIs",
      "Provide hardware IoT and API integration support for multidisciplinary teams",
      "Coach teams on product presentation, technical teardowns, and live demos"
    ],
    skills: ["Rapid Prototyping", "Full-Stack MVPs", "Hardware/IoT", "Product Strategy", "API Integration"],
    tools: ["Next.js", "FastAPI", "ESP32 / Arduino", "Supabase", "Figma", "Tailwind"],
    currentOpenings: "Open for Hackathon Sprint Mentors & Product Designers",
    featuredProject: {
      title: "SIH Campus Evaluation Hub",
      category: "Hackathon Scoring Tool",
      url: "/projects"
    }
  },
  {
    id: "open-source",
    code: "OPEN SOURCE",
    name: "Open Source & Tooling",
    shortName: "Open Source",
    leadName: "Ananya Singh",
    leadRole: "Open Source & Community Lead",
    leadYear: "B.Tech CSE '27",
    leadImage: "/assets/team/ananya.jpg",
    tagline: "Helping students make their first pull requests and maintain community packages.",
    description: "Focused on open collaboration, upstream contributions, and community toolkits. We help first-years conquer Git intimidation, curate starter templates for college hackathons, and contribute to public open-source software.",
    purpose: "Instill modern collaborative engineering practices: branch hygiene, documentation, peer reviews, and open-source ethics.",
    responsibilities: [
      "Maintain BBS Coding Club starter boilerplates, documentation, and repositories",
      "Conduct hands-on Git & GitHub workshops for freshman engineering students",
      "Identify beginner-friendly Good First Issues in prominent open-source projects",
      "Curate student developer setup guides for Linux, VS Code, and terminal workflows"
    ],
    skills: ["Git Workflows", "Open Source PRs", "Linux Tooling", "Python", "Technical Documentation"],
    tools: ["Git", "GitHub", "Linux / Bash", "Markdown", "Zsh", "Python"],
    currentOpenings: "Open for Documentation Leads & Open-Source Sprint Guides",
    featuredProject: {
      title: "Student Hackathon Starter Kits",
      category: "Open Source Repository",
      url: "/projects"
    }
  },
  {
    id: "core-operations",
    code: "OPERATIONS",
    name: "Core Leadership & Community Operations",
    shortName: "Core & Operations",
    leadName: "Aarav Sharma",
    leadRole: "Club President & Community Lead",
    leadYear: "B.Tech CSE '26",
    leadImage: "/assets/team/aarav.jpg",
    tagline: "Guiding club vision, inter-branch collaboration, and institutional partnerships.",
    description: "Oversees cross-track synchronization, faculty advisor relations, external hackathon sponsorships, and community event scheduling. Ensures BBS Coding Club remains an inclusive, transparent space for every builder on campus.",
    purpose: "Provide leadership, resources, and institutional backing so every student engineer can focus on building great software.",
    responsibilities: [
      "Coordinate club strategy and semester-long track roadmaps",
      "Bridge student organizers with BBS College faculty and campus leadership",
      "Manage community spaces on Discord, campus lab schedules, and guest sessions",
      "Oversee transparent annual student lead elections and cohort nominations"
    ],
    skills: ["Community Management", "Event Operations", "Public Speaking", "Cross-Branch Mentorship"],
    tools: ["Discord", "Google Workspace", "Notion", "GitHub Projects"],
    currentOpenings: "Open for Cohort 2026 Student Track Co-Leads",
    featuredProject: {
      title: "BBS Student Developer Collective",
      category: "Community Initiative",
      url: "/about"
    }
  }
];

export const DEPARTMENTS_PAGE_HEADER = {
  badge: "SPECIALIZED TRACKS & SQUADS",
  title: "FIVE FOCUSED TRACKS.\nONE ENGINEERING COLLECTIVE.",
  description: "BBS Coding Club operates through 5 specialized engineering departments. Every track is led by senior student builders, runs dedicated weekly sprints, and contributes to club projects and hackathon victories."
};

export const DEPARTMENTS_CATALOGUE_HEADER = {
  badge: "COMPLETE TRACK CATALOGUE",
  title: "ALL 5 DEPARTMENTS AT A GLANCE",
  description: "Explore prerequisites, leadership, core skills, and dedicated channels for every engineering branch."
};
