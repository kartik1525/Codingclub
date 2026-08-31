/**
 * departments.js - Backwards compatibility bridge
 * 
 * Re-exports the new Areas data from areas.js mapped to the legacy DEPARTMENTS structure
 * to prevent broken imports while components transition to the new Areas architecture.
 */

import { AREAS, AREAS_PAGE_HEADER, AREAS_CATALOGUE_HEADER, AREAS_PREVIEW } from './areas.js';

export const DEPARTMENTS = AREAS.map((area) => ({
  ...area,
  name: area.title,
  shortName: area.shortTitle,
  skills: area.technologies,
  tools: area.technologies,
  responsibilities: area.activities,
  purpose: area.overview,
  code: area.shortTitle.toUpperCase(),
  currentOpenings: "Open for all enthusiastic students",
  featuredProject: area.relatedProjects[0] || null
}));

export const DEPARTMENTS_PAGE_HEADER = AREAS_PAGE_HEADER;
export const DEPARTMENTS_CATALOGUE_HEADER = AREAS_CATALOGUE_HEADER;
export const DEPARTMENTS_PREVIEW = AREAS_PREVIEW;

export { AREAS, AREAS_PAGE_HEADER, AREAS_CATALOGUE_HEADER, AREAS_PREVIEW };
