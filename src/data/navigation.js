import { CLUB_INFO } from './clubInfo.js';

export const HEADER_NAV_LINKS = [
  { label: 'ABOUT', path: '/about' },
  { label: 'EXPLORE', path: '/explore' },
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
  { path: '/explore', label: 'Explore', iconType: 'layers' },
  { path: '/events', label: 'Events', iconType: 'calendar' },
  { path: '/team', label: 'Team', iconType: 'users' },
];

export const MENU_OVERLAY_ITEMS = [
  { label: "ABOUT US", id: "about", path: "/about" },
  { label: "AREAS WE EXPLORE", id: "areas", path: "/explore" },
  { label: "EVENTS & SESSIONS", id: "events", path: "/events" },
  { label: "COMMUNITY METRICS", id: "stats", path: "/#stats" },
  { label: "CORE TEAM", id: "team", path: "/team" },
  { label: "JOIN THE COMMUNITY", id: "join", path: "/join" },
];

export const FOOTER_NAV = {
  explore: [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Areas We Explore', path: '/explore' },
    { label: 'Events', path: '/events' },
  ],
  community: [
    { label: 'Core Team', path: '/team' },
    { label: 'Join Community', path: '/join' },
    { label: 'Workshops', path: '/events' },
  ],
  connect: [
    { label: 'GitHub', href: CLUB_INFO.socials.github, iconType: 'github' },
    { label: 'LinkedIn', href: CLUB_INFO.socials.linkedin, iconType: 'linkedin' },
    { label: 'Instagram', href: CLUB_INFO.socials.instagram, iconType: 'instagram' },
    { label: 'Email', href: `mailto:${CLUB_INFO.socials.email}`, iconType: 'email' },
  ],
  tagline: "BUILD. LEARN. SHIP.",
  description: "An authentic student developer community at BBS College of Engineering & Technology, where peers learn together, build projects, and experiment with technology."
};
