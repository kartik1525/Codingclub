import { CLUB_INFO } from './clubInfo.js';

export const HEADER_NAV_LINKS = [
  { label: 'ABOUT', path: '/about' },
  { label: 'DEPARTMENTS', path: '/departments' },
  { label: 'PROJECTS', path: '/projects' },
  { label: 'EVENTS', path: '/events' },
  { label: 'TEAM', path: '/team' },
];

export const HEADER_CTA = {
  label: 'JOIN ↗',
  path: '/join'
};

export const FLOATING_NAV_ITEMS = [
  { path: '/', label: 'Home', iconType: 'home' },
  { path: '/about', label: 'About', iconType: 'compass' },
  { path: '/departments', label: 'Depts', iconType: 'layers' },
  { path: '/projects', label: 'Projects', iconType: 'code' },
  { path: '/events', label: 'Events', iconType: 'calendar' },
  { path: '/team', label: 'Team', iconType: 'users' },
];

export const MENU_OVERLAY_ITEMS = [
  { label: "ABOUT US", id: "about" },
  { label: "WHAT WE ACTUALLY DO", id: "universe" },
  { label: "SELECTED BUILDS", id: "projects" },
  { label: "EVENTS & HACKATHONS", id: "events" },
  { label: "COMMUNITY COMMITMENTS", id: "stats" },
  { label: "CORE ROSTER", id: "team" },
  { label: "JOIN THE CLUB", id: "join" },
];

export const FOOTER_NAV = {
  explore: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Events', path: '/events' },
  ],
  community: [
    { label: 'Team', path: '/team' },
    { label: 'Join Us', path: '/join' },
    { label: 'Departments', path: '/departments' },
    { label: 'Workshops', path: '/events' },
  ],
  connect: [
    { label: 'GitHub', href: CLUB_INFO.socials.github, iconType: 'github' },
    { label: 'LinkedIn', href: CLUB_INFO.socials.linkedin, iconType: 'linkedin' },
    { label: 'Instagram', href: CLUB_INFO.socials.instagram, iconType: 'instagram' },
    { label: 'Email', href: `mailto:${CLUB_INFO.socials.email}`, iconType: 'email' },
  ],
  tagline: "BUILD. LEARN. SHIP.",
  description: "A student developer community at BBS, where we build projects, learn together, and experiment with technology."
};
