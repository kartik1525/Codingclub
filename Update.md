# BBS Coding Club Website --- Update Plan

**Project:** BBS Coding Club Website\
**Document:** `Update.md`\
**Purpose:** Master implementation checklist for the upcoming website
refactor.\
**Reference landing page:** https://bbscodingclubb.netlify.app/

------------------------------------------------------------------------

## 1. Core Objective

Refactor the current BBS Coding Club website into a **multi-page club
website** while preserving the visual identity and overall structure of
the current landing page.

The most important principle is:

> **Do not redesign the landing page from scratch. Evolve the current
> design into a concise, high-quality Home page and move detailed
> information into dedicated pages.**

The current visual language --- grid background, typography, blue
accent, technical/editorial aesthetic, hero composition, cards,
animations, and navigation behavior --- should remain the foundation.

------------------------------------------------------------------------

# 2. Information Architecture

Create the following primary routes/pages:

  Route            Page          Purpose
  ---------------- ------------- ---------------------------------------
  `/`              Home          Concise introduction and overview
  `/about`         About         Detailed information about the club
  `/departments`   Departments   Explain all club departments/tracks
  `/projects`      Projects      Showcase projects in detail
  `/events`        Events        Complete events/workshops archive
  `/team`          Team          All members categorized by department
  `/join`          Join Us       Membership/application flow

If the existing project already has equivalent routes/components, reuse
them instead of duplicating functionality.

------------------------------------------------------------------------

# 3. Home / Landing Page

## 3.1 Preserve the Current Structure

The existing landing page structure should remain the visual foundation.

Do **not** replace the current Hero with a completely different design.

Keep the overall flow and visual rhythm of the current page, including:

-   Header/top navigation
-   Hero section
-   Hero typography
-   Campus image/card
-   Introductory content
-   Marquee/technical strip if already present
-   Section-based layout
-   Grid background
-   Blue accent color
-   Existing typography system
-   Existing animation language
-   Existing buttons
-   Footer

The Home page should feel like the **same website**, just more focused.

------------------------------------------------------------------------

## 3.2 Reduce Information Density

The Home page should NOT contain every detail about the club.

It should work as an overview that makes visitors want to explore the
dedicated pages.

Each major topic should have:

1.  A short introduction
2.  A few key facts/items
3.  A clear CTA to the dedicated page

For example:

### About preview

Show:

-   Short 2--4 line description
-   A few key facts
-   `READ MORE →` / `ABOUT THE CLUB →`

Do not place the complete About content on Home.

------------------------------------------------------------------------

### Departments preview

Show:

-   A short explanation
-   A small selection or summary of departments
-   Department count or another useful statistic
-   CTA: `VIEW DEPARTMENTS →`

Full department descriptions belong on `/departments`.

------------------------------------------------------------------------

### Projects preview

Show:

-   2--4 featured projects
-   Project title
-   Short one-line description
-   Technology/category tags where appropriate
-   CTA: `VIEW ALL PROJECTS →`

Do not turn Home into the complete project portfolio.

------------------------------------------------------------------------

### Events preview

Show only a few highlighted/upcoming events.

For example:

-   Next/upcoming event
-   2--3 recent or featured events
-   Date
-   Event type
-   Short description

CTA:

`VIEW ALL EVENTS →`

The complete archive belongs on `/events`.

------------------------------------------------------------------------

### Team preview

Show a compact representation of the team.

For example:

-   Core leadership highlights
-   Department count
-   A few featured members

CTA:

`MEET THE TEAM →`

Do not display the entire team roster on Home.

------------------------------------------------------------------------

### Join preview

Keep the Join section concise.

Explain why students should join and show a strong CTA:

`JOIN BBS CODING CLUB →`

The actual joining/application experience should happen on `/join`.

------------------------------------------------------------------------

# 4. Join Us Page

## Route

`/join`

## Purpose

Create a dedicated page where students can understand the joining
process and select the department they want to join.

The page should feel like an **application/onboarding experience**, not
just a contact page.

------------------------------------------------------------------------

## 4.1 Suggested Flow

### Step 1 --- Introduction

Headline such as:

> BUILD WITH US.

or another phrase consistent with the existing design.

Briefly explain:

-   Who can join
-   What students can learn
-   What they can contribute
-   What being part of the club means

------------------------------------------------------------------------

### Step 2 --- Department Selection

Present the club departments as interactive cards.

Each card should contain:

-   Department name
-   Short description
-   What the department works on
-   Relevant skills
-   Small visual/icon treatment
-   `SELECT →`

Example categories can be populated from the actual club structure
rather than hardcoded assumptions.

------------------------------------------------------------------------

### Step 3 --- Department Details

After selecting a department, show:

-   Department description
-   Responsibilities
-   Skills useful for the department
-   What a student can expect
-   Current openings/status if applicable

------------------------------------------------------------------------

### Step 4 --- Application CTA

Provide a clear application button.

The application destination should be configurable, for example:

-   Google Form
-   Existing application system
-   Internal form

Do not invent a backend/application system if one does not already
exist.

------------------------------------------------------------------------

# 5. Team Page

## Route

`/team`

## Purpose

Create a dedicated page containing the **complete BBS Coding Club
team**, categorized by department.

The Team page should NOT simply be a long grid of identical profile
cards.

It should feel like a designed organizational directory.

------------------------------------------------------------------------

## 5.1 Team Page Structure

### Header

Use a strong editorial heading.

Example:

> RUN BY STUDENTS.\
> BUILT FOR BUILDERS.

Follow it with a short explanation of how the club is organized.

------------------------------------------------------------------------

### Department Navigation

Provide a way to navigate between departments.

Possible UI:

-   Horizontal department tabs
-   Filter buttons
-   Sticky category navigation
-   Department selector

Keep the interaction visually consistent with the current website.

------------------------------------------------------------------------

### Department Sections

For every department, show:

-   Department name
-   Short department description
-   Department lead/head if applicable
-   Members
-   Roles
-   Optional social/profile links

------------------------------------------------------------------------

## 5.2 Member Card Design

Create a visually distinctive member card system.

Cards may include:

-   Member photograph/avatar
-   Name
-   Role
-   Department
-   Short descriptor
-   LinkedIn/GitHub where available
-   Hover interaction

Avoid making every card excessively large.

The goal is to make the roster **easy to scan** while still feeling
premium.

------------------------------------------------------------------------

## 5.3 Featured Leadership

The top/core leadership can receive stronger visual treatment than
ordinary members.

Possible structure:

**CORE**

Large featured leadership cards

↓

**DEPARTMENTS**

Department-specific member groups

This creates hierarchy instead of treating every member identically.

------------------------------------------------------------------------

# 6. Events Page

## Route

`/events`

## Purpose

Move the complete event/workshop information away from the landing page.

The Events page becomes the central archive.

------------------------------------------------------------------------

## 6.1 Event Categories

Support categories such as:

-   Hackathons
-   Workshops
-   Coding competitions
-   Seminars
-   Technical sessions
-   Community events
-   Other club activities

Use the actual event categories present in the project.

------------------------------------------------------------------------

## 6.2 Event Layout

Each event should have:

-   Event name
-   Date
-   Category
-   Short description
-   Event image if available
-   Status
-   CTA/details

Possible statuses:

-   UPCOMING
-   REGISTRATION OPEN
-   COMPLETED
-   ARCHIVED

Do not fabricate event data.

------------------------------------------------------------------------

## 6.3 Event Filtering

If the number of events is large, provide filtering/sorting by:

-   Category
-   Year
-   Upcoming/Completed

Keep the filtering simple and fast.

------------------------------------------------------------------------

# 7. About Page

## Route

`/about`

The About page should contain the detailed version of the club
information that currently does not need to occupy the Home page.

Possible sections:

1.  Who we are
2.  Why the club exists
3.  Mission
4.  Vision
5.  What we do
6.  What students gain
7.  Club culture
8.  Faculty/institutional connection if applicable
9.  Key statistics
10. CTA to Join

Use real information from the project/content source.

Do not create exaggerated claims.

------------------------------------------------------------------------

# 8. Departments Page

## Route

`/departments`

This page should provide the detailed view of every department.

Each department can contain:

-   Name
-   Purpose
-   Responsibilities
-   Typical projects/work
-   Skills
-   Tools/technologies
-   Current lead
-   Link to relevant projects
-   Link to join that department

This page should connect naturally to both `/team` and `/join`.

------------------------------------------------------------------------

# 9. Projects Page

## Route

`/projects`

Create the complete project showcase here.

The Home page should only show selected/featured projects.

Project cards can include:

-   Project title
-   Description
-   Category
-   Technologies
-   Team
-   Status
-   GitHub/demo link
-   Project image

Possible filtering:

-   Web
-   AI/ML
-   App
-   Hardware
-   Open source
-   Other actual project categories

Do not invent projects or statistics.

------------------------------------------------------------------------

# 10. Navigation System

The website should have **two navigation states**.

## 10.1 Top Navbar

Keep the current top navbar.

It should:

-   Appear normally while the visitor is at/near the top of the Home
    page
-   NOT remain permanently fixed across the entire website
-   Be part of the normal page flow or hero experience

The top navbar should contain the primary navigation and theme control.

------------------------------------------------------------------------

## 10.2 Floating Bottom Navbar

Keep the floating bottom navigation concept inspired by the reference
website.

The floating navbar should:

-   Have a permanent/opaque background
-   NOT be transparent
-   Be clearly separated from page content
-   Have rounded/pill styling
-   Stay above the page content
-   Appear with a smooth slide-up animation
-   Be used as the compact navigation after the hero transitions out

### Visibility behavior

At the beginning of the Home page:

**Top navbar = visible**\
**Floating navbar = hidden**

When the Hero section passes approximately **50% of the viewport
height**:

**Top navbar = hidden**\
**Floating navbar = visible**

The floating navbar should animate upward smoothly.

When the user scrolls back to the Hero/top:

**Top navbar = visible**\
**Floating navbar = hidden**

Avoid abrupt display toggles.

Use the existing animation stack if already present.

------------------------------------------------------------------------

# 11. Theme System

Maintain both:

-   Dark theme
-   Light theme

The theme switch must work consistently across every page.

Do not create separate visual systems for different pages.

------------------------------------------------------------------------

## 11.1 Light Theme

Light mode should maintain the existing editorial/technical aesthetic.

Use:

-   Light page background
-   Dark typography
-   Existing blue accent
-   Subtle borders
-   Subtle grid background
-   White/light cards
-   Strong contrast

Avoid making Light Mode look like a completely different website.

------------------------------------------------------------------------

## 11.2 Dark Theme

Dark mode should retain the current:

-   Black/dark background
-   White typography
-   Blue accent
-   Dark cards
-   Subtle grid
-   Technical aesthetic

------------------------------------------------------------------------

## 11.3 Theme Persistence

The selected theme should persist across navigation.

For example:

1.  User selects Dark
2.  User opens Team
3.  Team remains Dark
4.  User opens Events
5.  Events remains Dark

Use the existing theme implementation if one already exists.

------------------------------------------------------------------------

# 12. Visual Identity

Preserve the current BBS Coding Club identity.

### Keep

-   Current hero concept
-   Current typography hierarchy
-   Blue accent
-   Technical/editorial style
-   Grid background
-   Sharp borders
-   Monospace labels
-   Large headings
-   Structured cards
-   Subtle animations
-   Minimal but expressive UI

### Avoid

-   Generic SaaS dashboard aesthetics
-   Excessive gradients
-   Excessive glassmorphism
-   Random neon colors
-   Overuse of rounded cards
-   Stock-template appearance
-   Unnecessary animations
-   AI-generated-looking decorative elements

The site should feel like a **real student developer organization**, not
an AI website template.

------------------------------------------------------------------------

# 13. Green Dot / AI-Looking Indicator

Remove the unnecessary green status dot that appears beside:

> BBS CODING CLUB

The dot currently makes the interface look AI-generated/template-like.

Do not replace it with another decorative status indicator.

If an actual status indicator is required elsewhere, it should have a
clear semantic purpose.

------------------------------------------------------------------------

# 14. Logo/Header

The header currently contains:

-   BBS Coding Club logo
-   College logo
-   Club name
-   Established year/community label

The two logos should be visually balanced and large enough to read
clearly.

Recommended hierarchy:

**College logo + Coding Club logo**\
→ Club name\
→ `EST. 2025 — STUDENT COMMUNITY`

Do not make the logos so small that they become decorative pixels.

Maintain adequate spacing between the two logos.

The header should remain compact and professional rather than oversized.

------------------------------------------------------------------------

# 15. Shared Components

Avoid duplicating UI between pages.

Create/reuse shared components such as:

-   `Navbar`
-   `FloatingNavbar`
-   `ThemeToggle`
-   `Footer`
-   `SectionHeader`
-   `Button`
-   `PageHeader`
-   `DepartmentCard`
-   `MemberCard`
-   `EventCard`
-   `ProjectCard`
-   `StatCard`

Use a shared data source for:

-   Departments
-   Team members
-   Events
-   Projects
-   Navigation items

This will make future updates much easier.

------------------------------------------------------------------------

# 16. Routing

Use proper client-side routing.

Recommended routes:

``` text
/
 /about
 /departments
 /projects
 /events
 /team
 /join
```

Navigation should work without full-page reloads.

Make sure direct navigation to routes also works after deployment on
Netlify.

Configure SPA fallback/redirect behavior if required by the current
deployment setup.

------------------------------------------------------------------------

# 17. Responsive Design

The new pages must work on:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

Pay particular attention to:

### Mobile navbar

The floating navbar should not become too wide.

Possible behavior:

-   Compact navigation
-   Horizontal scroll
-   Menu trigger
-   Reduced labels

### Team

Do not simply shrink desktop cards.

Create a sensible mobile layout.

### Events

Cards should stack cleanly.

### Join

Department selection should become a vertically stacked, touch-friendly
interface.

------------------------------------------------------------------------

# 18. Animation Guidelines

Animations should enhance the website, not distract from it.

Keep the current animation language where possible.

Use:

-   Smooth section reveals
-   Hover states
-   Slide transitions
-   Floating navbar slide-up
-   Page transitions if already supported
-   Existing GSAP/Lenis setup if present

Avoid:

-   Constant motion
-   Excessive parallax
-   Long loading animations
-   Bouncy UI everywhere

------------------------------------------------------------------------

# 19. Landing Page Content Philosophy

The Home page should answer these questions quickly:

### Who are we?

Short answer.

### What do we do?

Short answer.

### What can I explore?

Departments / Projects / Events / Team.

### Why should I care?

Short value proposition.

### How do I join?

Clear Join CTA.

Everything else belongs on the dedicated pages.

------------------------------------------------------------------------

# 20. Recommended Home Flow

Keep the current landing-page structure but simplify the content to
something close to:

``` text
HEADER
   ↓
HERO
   ↓
MARQUEE / TECH STRIP
   ↓
ABOUT PREVIEW
   ↓
DEPARTMENTS PREVIEW
   ↓
FEATURED PROJECTS
   ↓
EVENTS PREVIEW
   ↓
STATS
   ↓
TEAM PREVIEW
   ↓
JOIN CTA
   ↓
FOOTER
```

The exact existing section order can be retained where it already works
well.

The goal is **not** to force a new structure, but to reduce the amount
of information shown in each section.

------------------------------------------------------------------------

# 21. Data Architecture

Keep content separate from presentation where practical.

For example:

``` js
departments
teamMembers
events
projects
```

should ideally be maintained as structured data.

Example:

``` js
{
  name: "Department Name",
  description: "Short description",
  lead: "...",
  members: [...]
}
```

This allows the same data to power:

-   Home previews
-   Departments page
-   Team page
-   Join page

without duplicating content.

------------------------------------------------------------------------

# 22. Do Not Fabricate Data

This is important.

Do NOT invent:

-   Team members
-   Roles
-   Events
-   Project statistics
-   Hackathon wins
-   Member counts
-   Department heads
-   Social links
-   Application information

If information does not exist in the current project, leave it
configurable or mark it clearly for later content insertion.

------------------------------------------------------------------------

# 23. Accessibility

Ensure:

-   Buttons are keyboard accessible
-   Navigation links have meaningful labels
-   Images have alt text
-   Theme toggle is accessible
-   Focus states are visible
-   Text contrast is sufficient
-   Interactive cards have appropriate semantics

Do not sacrifice accessibility for visual effects.

------------------------------------------------------------------------

# 24. Performance

Avoid unnecessary performance regressions.

Check:

-   Image sizes
-   Lazy loading for non-critical images
-   Animation performance
-   Excessive JavaScript
-   Layout shifts
-   Font loading
-   Mobile performance

The existing Hero must not jump/shrink when the typewriter text changes.

Reserve a stable area for the changing typewriter text so that different
words do not change the Hero's height.

------------------------------------------------------------------------

# 25. Typewriter Layout Stability

Existing issue:

When the typewriter begins a new word, the Hero height changes slightly
and the entire page appears to shrink and then return to normal height.

Fix this.

The typewriter container must have a stable height/min-height based on
the largest expected text.

The animation should change the text without changing the Hero's overall
layout height.

Acceptance condition:

> Changing from one typewriter word to another must NOT cause visible
> page height jumps.

------------------------------------------------------------------------

# 26. Quality Bar

The final website should feel:

-   Premium
-   Technical
-   Student-built
-   Modern
-   Editorial
-   Confident
-   Minimal
-   Authentic

It should NOT feel:

-   Like a generic React template
-   Like an AI-generated landing page
-   Like a corporate SaaS dashboard
-   Over-designed
-   Cluttered

------------------------------------------------------------------------

# 27. Implementation Order

Use this order to minimize breakage:

### Phase 1 --- Audit

-   Inspect current components
-   Inspect current routes
-   Inspect theme system
-   Inspect animation system
-   Inspect existing data
-   Identify reusable components

### Phase 2 --- Navigation

-   Implement shared routing
-   Preserve current top navbar
-   Implement floating bottom navbar
-   Implement Hero 50% visibility transition
-   Add slide-up animation

### Phase 3 --- Home Cleanup

-   Preserve current Hero
-   Reduce section content
-   Convert detailed sections into previews
-   Add links to dedicated pages
-   Fix typewriter layout shift

### Phase 4 --- Dedicated Pages

Implement:

1.  About
2.  Departments
3.  Projects
4.  Events
5.  Team
6.  Join Us

### Phase 5 --- Theme

-   Verify Light Mode
-   Verify Dark Mode
-   Verify persistence across routes
-   Check every component in both themes

### Phase 6 --- Responsive

Test:

-   Desktop
-   Tablet
-   Mobile

### Phase 7 --- Polish

-   Typography
-   Spacing
-   Borders
-   Hover states
-   Animations
-   Image treatment
-   Loading behavior

### Phase 8 --- Production Test

Verify:

-   `npm run build`
-   All routes
-   Direct URL navigation
-   Netlify deployment
-   Theme persistence
-   Navbar transitions
-   Mobile navigation
-   No console errors

------------------------------------------------------------------------

# 28. Final Acceptance Checklist

## Home

-   [x] Current Hero structure preserved
-   [x] Hero remains visually recognizable
-   [x] Landing page contains summaries, not full content
-   [x] About preview exists
-   [x] Departments preview exists
-   [x] Projects preview exists
-   [x] Events preview exists
-   [x] Team preview exists
-   [x] Join CTA exists
-   [x] Footer exists
-   [x] Typewriter causes no layout shift

## Navigation

-   [x] Top navbar exists
-   [x] Top navbar is not permanently sticky across the entire website
-   [x] Top navbar is visible at the top/Hero
-   [x] Floating navbar is initially hidden
-   [x] Floating navbar appears around 50% Hero viewport threshold
-   [x] Floating navbar slides upward
-   [x] Floating navbar has opaque/permanent background
-   [x] Floating navbar works on all relevant pages
-   [x] Navigation routes work

## Theme

-   [x] Light Mode works
-   [x] Dark Mode works
-   [x] Theme persists between pages
-   [x] Both themes have good contrast
-   [x] No broken component styles

## Branding

-   [x] Coding Club logo is clearly visible
-   [x] College logo is clearly visible
-   [x] Logos are visually balanced
-   [x] Header spacing looks intentional
-   [x] Unnecessary green dot beside BBS Coding Club removed

## Team

-   [x] Dedicated Team page exists
-   [x] Members categorized by department
-   [x] Leadership has clear hierarchy
-   [x] Member cards are readable
-   [x] Social/profile links work where available

## Events

-   [x] Dedicated Events page exists
-   [x] Full event information moved here
-   [x] Events are categorized
-   [x] Event cards are responsive
-   [x] No fabricated event information

## Join

-   [x] Dedicated Join Us page exists
-   [x] Department selection exists
-   [x] Department information is shown
-   [x] Application CTA exists
-   [x] No fabricated application system

## Projects

-   [x] Dedicated Projects page exists
-   [x] Featured projects can appear on Home
-   [x] Complete project information exists on Projects page
-   [x] Project links work

## Technical

-   [x] No unnecessary duplicated components
-   [x] Shared data is reused
-   [x] No console errors
-   [x] Production build succeeds
-   [x] Netlify direct routes work
-   [x] Responsive layout works
-   [x] Images have appropriate alt text
-   [x] Animations do not cause layout shifts

------------------------------------------------------------------------

# 29. Most Important Design Rule

When implementing this update, always prioritize:

> **Current BBS Coding Club identity \> reference website imitation.**

The reference website is inspiration for interaction patterns and
information hierarchy only.

Do not copy its exact layout, colors, cards, team design, or visual
structure.

The BBS Coding Club website should remain recognizably its own product.

------------------------------------------------------------------------

# 30. Antigravity Implementation Instruction

When giving this document to Antigravity, instruct it to:

1.  Read and inspect the existing codebase first.
2.  Compare the current implementation against this document.
3.  Create an implementation plan before making changes.
4.  Identify which existing components can be reused.
5.  Do not rewrite working components unnecessarily.
6.  Implement changes incrementally.
7.  Preserve the current landing-page visual identity.
8.  Avoid fabricating content.
9.  Test both Light and Dark themes.
10. Test the top-navbar → floating-navbar transition.
11. Test all routes.
12. Test responsive layouts.
13. Run the production build before considering the implementation
    complete.
14. Report which checklist items are completed, partially completed, or
    still pending.

------------------------------------------------------------------------

## Change Log

Use this section after each implementation session.

### Implementation 1

**Date:** 2026-08-29

**Implemented:**
- [x] Multi-page client-side routing via React Router (`/`, `/about`, `/departments`, `/projects`, `/events`, `/team`, `/join`)
- [x] Dual-state navigation: Top navbar in normal document flow and floating bottom dock past 50% Hero threshold with 100% solid opaque background
- [x] Zero-layout-shift typewriter fix in HeroHeadline using CSS Grid cell overlap and fluid responsive typography
- [x] Centralized departments data model (`src/data/departments.js`) shared across Home, Departments, Team, and Join
- [x] Dedicated `/about` page with history, mission, vision, 4 operational pillars, and community guidelines
- [x] Dedicated `/departments` page with 5 specialized tracks, deep-dive cards, tools, leads, and direct join links
- [x] Dedicated `/projects` page with category filtering (All, Web, Hackathons, Member Repos), architecture context, and source code links
- [x] Dedicated `/events` page with category/status filters (Hackathons, Workshops, Community; Upcoming vs Completed) and registration flow
- [x] Dedicated `/team` page with department filter tabs, dominant Core President feature, and asymmetric track leads bento
- [x] Dedicated `/join` page with interactive department selector, track details reveal, and membership application form
- [x] Netlify SPA route fallback via `public/_redirects`
- [x] Theme persistence across all routes in both Dark and Light modes

**Pending:**
- None. All specification items from `Update.md` are implemented and verified.

**Issues found & resolved:**
- Fixed Vite Windows file-watcher EBUSY lock on root markdown files by adding watch ignore patterns.
- Replaced missing `Github` and `Linkedin` named exports in `lucide-react` with optimized inline SVG components.
- Eliminated typewriter baseline height jump on short words.

**Notes:**
- Production build succeeds cleanly in 1.77s with 0 errors.

------------------------------------------------------------------------

### Implementation 2

**Date:** __________

**Implemented:** - [ ]
____________________________ - [ ]
____________________________ - [ ]
____________________________

**Pending:** - [ ]
____________________________ - [ ]
____________________________

**Issues found:** -
____________________________

**Notes:** -
____________________________

------------------------------------------------------------------------

# Status

**Overall:** ✅ Production Ready

Update this status as the project progresses:

-   ⬜ Not Started
-   🟨 In Progress
-   🟩 Implemented
-   🟦 Tested
-   ✅ Production Ready

