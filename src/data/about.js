import { CLUB_INFO } from './clubInfo.js';

export const ABOUT_PAGE_HEADER = {
  badge: "ABOUT BBS CODING CLUB",
  title: "BUILT BY STUDENTS.\nBACKED BY CODE.",
  description: "The official student engineering collective and digital innovation society of BBS College of Engineering & Technology. We turn technical curiosity into deployed software, national hackathon finalists, and lifelong peer networks."
};

export const ORIGIN_ETHOS = {
  badge: "ORIGIN & ETHOS",
  title: "WHY BBS CODING CLUB EXISTS",
  paragraphs: [
    "Most college engineering curricula focus heavily on theoretical examinations and outdated slide presentations. Students graduate without ever deploying code to a live cloud server, resolving a multi-branch Git merge conflict, or building a software prototype under a 36-hour hackathon deadline.",
    `BBS Coding Club was established in ${CLUB_INFO.estYear} to change that reality permanently. We created a student-governed engineering ecosystem where peers teach peers, code reviews happen over Discord, and juniors are mentored from their first \`git commit\` to national competition stages.`
  ],
  quote: "No corporate jargon, no gatekeeping—just genuine student builders learning in public.",
  ethosCards: [
    {
      id: "mission",
      iconType: "terminal",
      title: "Our Mission",
      description: CLUB_INFO.missionStatement
    },
    {
      id: "vision",
      iconType: "award",
      title: "Our Vision",
      description: `To establish ${CLUB_INFO.institution} as a recognized hub of competitive programming excellence, open-source contributors, and hackathon champions.`
    },
    {
      id: "governance",
      iconType: "users",
      title: "Student Governed",
      description: "Every workshop, competition track, and review sprint is led by undergraduate students volunteering to elevate their peers."
    },
    {
      id: "affiliation",
      iconType: "shield",
      title: "Institutional Alignment",
      description: `Affiliated with ${CLUB_INFO.institution}, bridging academic resources with modern software development practices.`
    }
  ]
};

export const PILLARS_SECTION_HEADER = {
  badge: "OPERATIONAL PILLARS",
  title: "HOW WE OPERATE EVERY SEMESTER"
};

export const STUDENT_OUTCOMES = {
  badge: "STUDENT OUTCOMES",
  title: "WHAT YOU GAIN AS A MEMBER",
  outcomes: [
    "Deploy production-quality code to public repositories rather than solo academic exercises",
    "Form validated squads for Smart India Hackathon (SIH) and regional collegiate hackathons",
    "Learn modern collaborative Git workflows, code reviews, and CI/CD pipelines",
    "Speed-coding contest practice with algorithmic problem-solving ladders",
    "Direct mentorship from senior students who have cracked internships and national competitions",
    "A tight-knit community of developers, designers, and systems enthusiasts on campus"
  ]
};

export const COMMUNITY_GUIDELINES = {
  badge: "CLUB CULTURE & CONDUCT",
  title: "OUR COMMUNITY GUIDELINES",
  description: "We cultivate a culture of curiosity and intellectual generosity. There is zero tolerance for condescension, gatekeeping, or harassment in our labs, workshops, or online Discord channels.",
  rules: [
    {
      tag: "LEARN IN PUBLIC",
      text: "Share your work-in-progress code, ask questions early, and help others when they are stuck."
    },
    {
      tag: "MERIT & CODE",
      text: "Ideas are evaluated on architectural soundness and working demos, regardless of student year or branch."
    },
    {
      tag: "RESPECT & INCLUSION",
      text: "We welcome beginners from every engineering department. Curiosity is the only prerequisite."
    }
  ]
};

export const ABOUT_CTA = {
  title: "WANT TO BUILD WITH BBS CODING CLUB?",
  description: "Explore the areas we build in, meet the student core team, or join our community network on campus.",
  primaryBtn: {
    label: "JOIN COMMUNITY",
    path: "/join"
  },
  secondaryBtn: {
    label: "EXPLORE AREAS",
    path: "/explore"
  }
};
