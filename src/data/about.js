import { CLUB_INFO } from './clubInfo.js';

export const ABOUT_PAGE_HEADER = {
  badge: "ABOUT BBS CODING CLUB",
  title: "BUILT BY STUDENTS.\nBACKED BY CODE.",
  description: "BBS Coding Club is a student-led community for people who enjoy coding, building, and figuring things out together. From projects and workshops to hackathons and late-night debugging, we’re here to learn by doing and grow together.",
  image: {
    src: "/assets/bbs-students-campus.jpg",
    alt: "BBS College students holding INNOVATION in front of the campus building",
    title: "BBS COLLEGE OF ENGINEERING AND TECHNOLOGY",
    subtitle: "OUR CAMPUS · WHERE THE COMMUNITY STARTED"
  }
};

export const ORIGIN_ETHOS = {
  badge: "ORIGIN & ETHOS",
  title: "WHY WE STARTED",
  paragraphs: [
    "College teaches us a lot of theory, but some of the most important things in tech are learned by actually doing. Writing code that works, fixing bugs that make no sense, working with Git, building projects with friends, and figuring things out when there’s no step-by-step answer.",
    `BBS Coding Club was started in 2025 to create that kind of space at BBS. A place where students can learn from each other, work on things outside the classroom, take part in hackathons and competitions, and simply get better at building.`
  ],
  quote: "No pressure to know everything. Just a community where we learn, build, and help each other get better.",
  ethosCards: [
    {
      id: "mission",
      iconType: "terminal",
      title: "Our Mission",
      description: "Help students learn by doing — through projects, workshops, competitions, hackathons, and collaboration with peers."
    },
    {
      id: "vision",
      iconType: "award",
      title: "Our Vision",
      description: `Build a strong student developer community at BBS where people can find teammates, share ideas, build projects, and grow together.`
    },
    {
      id: "governance",
      iconType: "users",
      title: "Student Governed",
      description: "The club is run by students who volunteer their time to organize sessions, work on projects, participate in competitions, and help other members."
    },
    {
      id: "affiliation",
      iconType: "shield",
      title: "Institutional Alignment",
      description: `A growing community of students interested in coding, development, AI, open source, competitions, and building things together`
    }
  ]
};
export const PILLARS_SECTION_HEADER = {
  badge: "WHAT WE DO",
  title: "HOW WE LEARN, BUILD & COMPETE"
};

export const STUDENT_OUTCOMES = {
  badge: "WHY JOIN US",
  title: "WHAT YOU GET OUT OF IT",
  outcomes: [
    "Build real projects with other students instead of keeping everything limited to college assignments",
    "Find people to team up with for hackathons, competitions, and side projects",
    "Get comfortable with Git, GitHub, pull requests, and working on code with others",
    "Practice problem-solving and competitive programming through contests and regular practice",
    "Learn from seniors and other students who have already explored the things you're trying to learn",
    "Be part of a campus community where you can ask questions, share ideas, and find people who enjoy building things"
  ]
};

export const COMMUNITY_GUIDELINES = {
  badge: "OUR CULTURE",
  title: "HOW WE BUILD TOGETHER",
  description:
    "You don't need to be an expert to be part of the club. We want BBS Coding Club to be a place where people can ask questions without hesitation, share what they're working on, and learn from each other. Whether you're writing your first program or already building projects, there's room for you here.",
  rules: [
    {
      tag: "LEARN TOGETHER",
      text:
        "Ask questions, share what you're learning, and help someone out when you know the answer. Nobody starts out knowing everything."
    },
    {
      tag: "BUILD, DON'T JUST TALK",
      text:
        "Ideas are great, but we believe the best way to learn is to actually build something, break it, fix it, and keep going."
    },
    {
      tag: "RESPECT EVERYONE",
      text:
        "Everyone comes from a different background and skill level. Be respectful, give people space to learn, and never make someone feel bad for being a beginner."
    }
  ]
};

export const ABOUT_CTA = {
  title: "WANT TO BUILD SOMETHING WITH US?",
  description:
    "Whether you want to learn, work on projects, prepare for a hackathon, or just meet other people who enjoy coding, there's a place for you in the club.",
  primaryBtn: {
    label: "JOIN THE COMMUNITY",
    path: "/join"
  },
  secondaryBtn: {
    label: "EXPLORE WHAT WE DO",
    path: "/explore"
  }
};