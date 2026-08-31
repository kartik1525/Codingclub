# BBS Coding Club Website — Master Update Specification v2

## 1. Purpose

This document is the current source of truth for the next phase of the BBS Coding Club website.

The goal is to evolve the website from a visually strong but somewhat over-structured concept into an authentic, scalable representation of the actual BBS Coding Club.

The website should communicate:

> A small, ambitious, student-led engineering community that is actively learning, building, experimenting, and growing.

The website must feel:

- Professional
- Editorial
- Technical
- Modern
- Experimental
- Student-led
- Authentic
- Scalable

It must NOT feel:

- Corporate
- Artificially large
- Over-engineered
- Template-like
- "AI-generated"
- Like a fake organization with unnecessary hierarchy

---

# 2. Current Club Reality

The website must reflect the current stage of BBS Coding Club.

Current known structure:

- Approximately 10 core organizers/builders
- 250+ students in the broader WhatsApp/community network
- A growing student developer community
- Existing/past events and workshops
- A small number of actual projects/builds
- Student-led organization
- No need for a large formal departmental hierarchy yet

## Critical Rule

Do NOT fabricate organizational structure simply to make the website look larger.

Do not invent:

- Department heads
- Department leads
- Fake team members
- Fake projects
- Fake events
- Fake achievements
- Fake partnerships
- Fake statistics
- Fake testimonials
- Fake social profiles
- Fake activities

If real information is unavailable, leave the data configurable rather than inventing it.

---

# 3. Core Information Architecture

The website should use the following structure:

```text
HOME
│
├── About
│
├── Areas We Explore
│
├── Projects
│
├── Events
│
├── Team
│
└── Join Us

Primary routes:

/
 /about
 /explore
 /projects
 /events
 /team
 /join

Legacy compatibility:

/departments

should redirect to:

/explore

or render the Explore page without exposing "Departments" as the primary user-facing terminology.

4. Remove the Formal Department Concept

The website should no longer present BBS Coding Club as having formal departments.

Remove/replace user-facing terminology such as:

Departments
Department Leads
Department Heads
Track Leads
Specialized Departments
Specialized Tracks
Department Directory

Use:

AREAS

The preferred section terminology is:

AREAS WE EXPLORE

The Areas represent things the community learns, builds, experiments with, and participates in.

They are NOT formal organizational divisions.

5. Areas We Explore

Create five scalable interest areas.

5.1 Web & Software Development

Focus:

Frontend development
Backend development
Full-stack systems
APIs
Databases
Software architecture
Developer tooling

Description should communicate that members learn by building real software rather than simply attending lectures.

5.2 AI & Machine Learning

Focus:

Machine learning
Generative AI
Computer vision
Applied AI
Model experimentation
AI-powered applications
Research-oriented experimentation

Avoid making unsupported claims about research output.

5.3 Competitive Programming

Focus:

Data structures
Algorithms
Problem solving
Codeforces
Competitive programming practice
Interview preparation
ICPC-style problem solving

Only mention competitions/preparation that the club actually supports.

5.4 Open Source & Developer Tools

Focus:

Git and GitHub workflows
Open-source contribution
Developer tooling
Collaboration
Documentation
Upstream contributions

Do not claim existing open-source contributions unless actual projects/data exist.

5.5 Hackathons & Innovation

Focus:

Hackathons
Smart India Hackathon preparation where applicable
Rapid prototyping
Product ideas
MVP development
System architecture
Team collaboration

Do not claim specific hackathon results unless supported by real data.

6. Areas Explorer Interaction

The existing interactive expandable-row/detail-panel concept should be retained.

The interaction is good and should remain a major visual feature.

However, its content must change.

Desktop

Use an expandable/interactive row layout:

WEB & SOFTWARE DEVELOPMENT                         +
────────────────────────────────────────────────────

AI & MACHINE LEARNING                              +
────────────────────────────────────────────────────

COMPETITIVE PROGRAMMING                             +
────────────────────────────────────────────────────

OPEN SOURCE & DEVELOPER TOOLS                       +
────────────────────────────────────────────────────

HACKATHONS & INNOVATION                             +
────────────────────────────────────────────────────

When an area is selected, display a right-side detail panel.

Detail Panel

The panel should contain:

Area Title

Large editorial heading.

Overview

Short, meaningful description.

WHAT WE EXPLORE

A list of relevant technologies/topics.

TYPICAL ACTIVITIES

Examples:

Hands-on Workshops
Code Teardowns
Build Sessions
Async Builds
Hackathon Sprints
Peer Learning

IMPORTANT:

These are examples of activity types.

Do not present an activity as something the club definitely conducts unless supported by actual club data.

TECHNOLOGIES / TOPICS

Display the relevant technologies/topics for the selected area.

Actions

Possible actions:

EXPLORE AREA →
JOIN THE COMMUNITY →

Use:

/explore?area=<area-id>

and:

/join?area=<area-id>

where appropriate.

Do not route users to a fake department page.

7. Explore Page

Create or refactor the current Departments page into:

/explore

Page title:

AREAS WE EXPLORE.

Supporting subtitle:

FIVE FOCUS AREAS. ONE STUDENT DEVELOPER COMMUNITY.

Supporting description:

We're building a community around the technologies, problems, and opportunities that excite us. Explore what members learn, build, and experiment with.

The page should include:

Area selector
Area detail
Technologies/topics
Activities
Relevant real projects where available
Relevant real events where available
Community-oriented CTA

Do NOT include:

Department heads
Department leads
Fake organizational hierarchy
8. Homepage

The homepage should remain the primary overview of the club.

Do NOT turn the homepage into a complete database of everything the club has.

The landing page should provide previews and direct users to dedicated pages.

Desired flow
Hero
↓
About / Club Introduction
↓
What We Learn / Build / Explore
↓
Areas We Explore
↓
Selected Projects
↓
Selected / Recent Events
↓
Community Metrics
↓
Core Team Preview
↓
Join Us CTA
↓
Footer

The homepage should NOT showcase every:

Event
Project
Team member
Area detail
Workshop
Activity

Instead, show a curated preview.

9. Hero Section

Preserve the existing hero design and animations.

The hero should continue to use the established visual language:

Large typography
Typewriter animation
"WE" remaining permanently visible
Dynamic text such as:
Learn
Build
Experiment
Grid/checkered background
College imagery where appropriate
Coding Club logo
College logo

Do not introduce unnecessary additional badges, dots, or decorative indicators.

The green dot beside the BBS Coding Club branding should remain removed.

10. Typewriter / Hero Animation

The existing typewriter concept should remain.

Required behavior:

WE Learn
WE Build
WE Experiment

"WE" remains permanently visible.

The dynamic word should change without causing layout shift.

Critical requirement

Changing the typewriter word must NOT:

Change section height
Shrink the page
Expand the page unexpectedly
Cause content below the hero to jump
Cause noticeable layout shift

Reserve a stable width/height for the dynamic text.

Use CSS/layout techniques rather than JavaScript hacks where possible.

11. Scroll Text Animation

The website uses a React Bits-style scroll text animation.

The intended behavior:

Each word/character can appear progressively
Content should appear as it enters the viewport
Content should not be permanently visible before entering the viewport where the design calls for reveal behavior
Animation should feel smooth and intentional
Do not allow the animation to cause layout shifts

GSAP + ScrollTrigger may be used where already present.

Do not introduce duplicate animation libraries unnecessarily.

12. Lenis Smooth Scrolling

Continue using Lenis for smooth scrolling.

Requirements:

Smooth desktop scrolling
Appropriate touch/mobile behavior
No scroll-lock issues
No conflict with GSAP ScrollTrigger
Proper ScrollTrigger synchronization
No excessive smoothing that makes navigation feel delayed
13. Background Grid Pattern

The existing checkered/grid background should be used as a recurring visual motif.

It should NOT appear continuously behind the entire page.

The pattern should appear in alternating sections.

Desired rhythm:

Hero
GRID BACKGROUND

About
PLAIN

Areas We Explore
GRID BACKGROUND

Projects
PLAIN

Schedule & Activities / Events
GRID BACKGROUND

Community / Stats
PLAIN

Core Leadership
GRID BACKGROUND

Join
PLAIN

Footer
GRID BACKGROUND

Apply the same visual rhythm across other page routes where appropriate.

The background system should be implemented as a reusable pattern/component rather than duplicated manually.

14. Navigation System

There are two navigation states.

Hero / Top Navigation

The top navigation is visible while the hero is occupying the primary viewport.

It should NOT be permanently sticky across the entire website.

Once the hero crosses approximately the configured visibility threshold, the top navigation should transition away.

Floating Bottom Navigation

The floating bottom navigation should then appear with a smooth upward slide animation.

Conceptually:

Hero in primary viewport
        ↓
Top navigation visible
        ↓
Hero crosses threshold
        ↓
Top navigation hides
        ↓
Floating navigation slides upward

The transition should feel intentional and polished.

Do not remove the top navigation entirely.

15. Floating Navigation

Primary links:

Home
About
Explore
Projects
Events
Team

Use:

Explore

instead of:

Departments
Depts

The floating dock should retain the established visual identity.

Mobile

Ensure:

No viewport overflow
Safe-area bottom padding
Comfortable touch targets
No cramped labels
No accidental persistent hover state
Proper spacing on small devices
16. Typography

Remove the excessive "vibe-coded" technical prefixes.

Do NOT use section headings such as:

01 / ABOUT
02 / DEPARTMENTS
03 / PROJECTS
// EVENTS
// TEAM

Remove unnecessary:

01
02
03
04
05
06
//
/

from section labels and metadata.

Technical styling should come from:

Typography
Grid
Spacing
Borders
Monospace accents
Interaction
Motion

rather than excessive code-like symbols.

The website should look technically sophisticated, not artificially "AI coded."

17. Section Headers

Use a consistent editorial hierarchy.

Recommended structure:

AREAS WE EXPLORE

WHAT WE BUILD & LEARN.

or equivalent.

Avoid inconsistent typography between sections.

Maintain:

Strong hierarchy
Fluid responsive sizing
Tight tracking
Controlled line-height
Consistent spacing

Mobile headers should not create awkward wrapping.

18. Bento Cards

The current Bento-card direction should remain.

Bento cards should be used for sections where multiple related pieces of information need to be displayed.

They should NOT become generic:

icon
title
paragraph
button

cards.

Use:

Different card sizes
Asymmetric composition
Strong hierarchy
Image/text combinations
Interactive states
Large typography
Data-driven content

Avoid making every card visually identical.

19. Expandable Rows

The section immediately following the Bento content should NOT simply repeat the same Bento-card visual language.

Keep the previously selected:

Expandable Rows

pattern.

This creates visual contrast.

Use:

Horizontal rows
Large type
Thin separators
Expand/collapse motion
Right-side detail panel
Strong hover state

This pattern is now primarily used for:

AREAS WE EXPLORE

20. Team Section

The team is one of the most important authentic elements of the website.

Do not present fake departments.

Homepage

Show approximately 3–4 featured core members.

Current confirmed featured members:

President — Kartikeya Singh
Vice President — Mohd. Shariq Irshad
Tech Lead — Adarsh Pandey
Outreach Lead — Sakshi Pandey

Only use these exact roles if they are confirmed by the current project data.

The homepage should communicate:

THE PEOPLE BUILDING THE COMMUNITY.

Supporting copy:

Run by students, for students. Meet the core members who organize events, build projects, coordinate activities, and support the community.

Use a visually rich editorial composition inspired by the provided team reference.

Do NOT simply display one generic profile card.

21. Team Page

Route:

/team

Page heading:

THE PEOPLE BUILDING THE COMMUNITY.

Supporting subtitle:

100% STUDENT ORGANIZED.

Supporting description:

BBS Coding Club is organized and maintained by undergraduate students who volunteer their time to build projects, organize events, support their peers, and grow the community.

Show the actual core members.

Avoid fake department categorization.

If grouping is useful, use functional groupings such as:

Core Organizers
Technical & Projects
Community & Outreach

Only assign members to these groups where the actual data supports it.

22. Team Visual Direction

Do not use generic circular-avatar layouts as the primary visual language.

Prefer:

Rectangular photographs
Editorial image ratios
Thin borders
Large names
Role metadata
Short descriptions
Social links
Hover interactions
Strong composition

Use the previously established technical/editorial aesthetic.

23. Projects

The homepage should show a curated selection of real projects.

Do NOT attempt to fill the section with fabricated projects.

If only 1–3 real projects exist:

Show 1–3 excellent projects.

Do not create fake cards to make a grid appear full.

Projects page:

/projects

should contain the complete collection of verified projects.

24. Events

The homepage should show only selected/recent/past highlights.

Do NOT show every event on the landing page.

Dedicated route:

/events

should contain the complete verified event history.

Each event can contain:

Name
Date
Description
Type
Images
Links
Outcomes

Only show information supported by actual data.

If there are currently no upcoming events, do not fabricate upcoming events.

Use a graceful empty state.

25. Community Statistics

The distinction between community and core team must remain clear.

The website may use:

250+
COMMUNITY MEMBERS

to represent the broader student community if this figure is currently verified.

Core team:

~10
CORE BUILDERS

should represent the active organizers/builders if verified.

Other statistics such as:

2025
FOUNDATION

or:

100%
STUDENT LED

must only be displayed if they accurately represent the club.

Do not use inflated metrics.

26. About Section

The About section should explain:

What BBS Coding Club is
Why it exists
What members do
How students participate
The student-led nature of the club
The community philosophy

Keep the current editorial/Bento visual language.

The About section should remain concise on the homepage.

Full information can live on:

/about
27. Join Us

Join Us should have its own dedicated route:

/join

The homepage should only provide a strong CTA/preview.

Do not overload the landing page with the entire joining process.

The Join page can contain:

Why join
How participation works
Areas of interest
Community information
Registration/join form
Relevant links

Replace any "choose department" wording with:

CHOOSE AREAS OF INTEREST

The 5 Areas should be selectable.

28. Footer

The footer should be visually significant.

The primary BBS Coding Club text should have an oversized editorial treatment.

Use the previously selected React Bits-style:

StrokeText

concept for:

BBS CODING CLUB

The implementation should work without requiring React Bits Pro.

The StrokeText animation should:

Draw the outline
Reveal/fill the text
Respect the current theme
Work responsively
Avoid layout shifts
Respect reduced-motion preferences

The footer may include:

Navigation
Social links
Contact
College identity
Community CTA

Do not make it visually overcrowded.

29. Footer Background

The grid/checkered pattern should appear at the bottom/footer as part of the alternating background rhythm.

The footer should feel like the visual closing statement of the website.

30. Light & Dark Themes

The website must support both:

Dark Theme
Light Theme

All components must be tested in both modes.

Pay particular attention to:

Grid background
Borders
Text contrast
Buttons
Images
StrokeText
Floating navigation
Hover states
Form controls
Cards

Do not hardcode colors that break one theme.

Use the existing design tokens/Tailwind theme system.

31. Design System

Preserve the current visual language.

Core principles:

Typography

Large editorial headings + restrained monospace metadata.

Color

High-contrast neutral foundation with the existing BBS accent.

Layout

Strong whitespace, grids, asymmetric compositions.

Borders

Thin, intentional borders.

Motion

Smooth but restrained.

Interaction

Motion should communicate state, not exist simply for decoration.

32. React Requirement

The project must continue using:

React with JavaScript

Do NOT migrate to TypeScript.

Do NOT introduce:

.ts
.tsx

unless there is an unavoidable dependency requirement.

Prefer:

.jsx
.js
33. Tailwind CSS Requirement

Use:

Tailwind CSS

for styling.

Do NOT introduce large amounts of traditional standalone CSS for new UI.

Avoid creating unnecessary:

.css

files.

Existing CSS can remain where already required, but new styling should primarily use Tailwind utilities/design tokens.

34. Data Architecture

The website should have a centralized content/data layer.

Expected structure:

src/
└── data/
    ├── clubInfo.js
    ├── areas.js
    ├── team.js
    ├── projects.js
    ├── events.js
    ├── stats.js
    ├── navigation.js
    ├── home.js
    ├── about.js
    ├── join.js
    └── ...

Do NOT create duplicate sources of truth.

Before creating a new file:

Inspect existing data files.
Determine whether the information already has a data source.
Reuse/refactor where possible.
35. Areas Data

Create:

src/data/areas.js

This should contain the five Areas.

Each Area should have a structure capable of supporting:

{
  id,
  title,
  shortTitle,
  description,
  overview,
  topics,
  technologies,
  activities,
  relatedProjects,
  relatedEvents
}

Only populate fields with verified/appropriate content.

Do not fabricate related projects/events.

Export useful collections such as:

AREAS
AREAS_PREVIEW
AREAS_PAGE_HEADER
36. Legacy departments.js

If:

src/data/departments.js

already exists and is imported throughout the project:

Do NOT delete it blindly.

Either:

Refactor it to re-export Areas
Or maintain a compatibility alias

Example conceptual approach:

export { AREAS as DEPARTMENTS } from './areas';

This allows the codebase to migrate safely.

However, user-facing terminology must still be:

Areas

37. Navigation Data

Update centralized navigation data.

Replace:

Departments
Depts

with:

Explore

Primary route:

/explore

Footer should use:

Areas We Explore

where appropriate.

38. Routing

Add:

/explore

The old:

/departments

must remain compatible.

Preferred behavior:

/departments → /explore

Do not leave broken links.

Audit every internal link.

39. Real Data Policy

This is one of the most important rules in this document.

The website must NEVER fabricate real-world club information.

If data is unavailable:

GOOD
data field exists but is empty

or:

TODO: add verified event information
BAD

Inventing:

12 successful workshops
5 department heads
32 projects
1000 members
20 hackathon wins

just because the UI looks better.

Authenticity is more important than visual fullness.

40. Existing Visual Decisions to Preserve

The following decisions are already intentional and should NOT be casually removed:

React + JavaScript
Tailwind CSS
Lenis smooth scrolling
GSAP animations
ScrollTrigger
Scroll reveal text
Typewriter hero
Stable typewriter layout
Light/dark themes
Alternating grid backgrounds
Top navigation during hero
Floating bottom navigation after hero transition
Bento card section
Expandable row section
Editorial team presentation
StrokeText footer
College + Coding Club logos
Strong whitespace
High-contrast typography

Do not redesign these systems unless there is a concrete bug or UX problem.

41. Logo Placement

The website has two important identities:

BBS Coding Club logo
College logo

Both should remain visible where appropriate.

Recommended usage:

Header / Navigation

Coding Club identity should remain primary.

College logo can appear as secondary institutional identity.

Hero

Both logos can be used where visually appropriate.

Avoid making either logo too small to recognize.

Do not overcrowd the hero.

42. Avoid "AI Website" Visual Cues

The website should avoid generic visual patterns that make it immediately look AI-generated.

Avoid excessive:

Green status dots
Random glowing circles
Excessive gradients
Unnecessary glassmorphism
Generic floating blobs
Repetitive rounded cards
Overused neon effects
Excessive code symbols
Arbitrary technical labels

Technical aesthetics should be intentional.

43. Responsive Design

Every page must be tested at:

Mobile

Approximately:

320px
375px
430px
Tablet

Approximately:

768px
1024px
Desktop

Approximately:

1280px
1440px
1920px

Pay particular attention to:

Hero
Typewriter
Navigation transition
Floating dock
Bento grid
Expandable rows
Detail panel
Team section
Footer
StrokeText
44. Accessibility

Maintain:

Semantic HTML
Keyboard accessibility
Visible focus states
Appropriate aria labels
Accessible buttons
Accessible navigation
Reduced motion support

Interactive rows must be keyboard accessible.

Do not make an interaction dependent exclusively on hover.

45. Performance

Do not sacrifice performance for animation.

Avoid:

Unnecessary re-renders
DOM teardown during rapid hover
Repeated GSAP initialization
Unoptimized images
Layout shifts
Excessive animation
Large unnecessary dependencies

The Areas detail panel should preferably use stable DOM and transition content rather than completely destroying/recreating the entire panel on every hover.

46. Department/Area Interaction Performance

If the existing detail panel currently uses:

key={activeDept.id}

to force complete DOM recreation:

Review whether this is necessary.

Prefer:

Stable container
Content transitions
Opacity transitions
Transform transitions
Controlled state updates

If hover interactions are causing thrashing, consider a small pointer-intent delay.

Do not over-engineer this.

47. Content Management

All content that is likely to change should live in data files.

Examples:

Team members
Roles
Events
Projects
Areas
Navigation labels
Club description
Statistics
Social links
Contact information

Pages/components should primarily be responsible for presentation.

This allows future club administrators to update content without editing component logic.

48. Homepage Content Philosophy

The homepage is a:

CURATED INTRODUCTION

not:

COMPLETE DATABASE

It should answer:

Who are we?
What do we care about?
What do we build/learn?
What have we actually done?
Who runs the community?
How can I join?

Then send users to dedicated pages for deeper information.

49. Page Responsibilities
Home

Overview.

About

Club story, philosophy, identity.

Explore

Areas and technical interests.

Projects

Complete project showcase.

Events

Complete event archive.

Team

Complete core team.

Join

Joining and participation.

50. Verification Checklist

Before considering this update complete:

Architecture
 /explore exists
 /departments redirects/aliases correctly
 No broken internal routes
 Areas are centralized in data
 Existing data files are reused appropriately
 No duplicate sources of truth
Terminology

Search the entire src/ directory.

There should be no inappropriate user-facing instances of:

Departments
Depts
Department Lead
Department Head
Track Lead
Specialized Tracks

unless they are explicitly retained for backwards compatibility in code.

User-facing terminology should use:

Areas
Explore
Areas We Explore
Visual
 Hero preserved
 Typewriter stable
 Lenis working
 Scroll animations working
 Bento section preserved
 Expandable rows preserved
 Team presentation improved
 Footer StrokeText working
 Grid backgrounds alternate correctly
 Light theme works
 Dark theme works
 Floating navigation works
Content
 No fake team members
 No fake department heads
 No fake events
 No fake projects
 No fake achievements
 No fake statistics
 Actual team data used
 Actual event data used
 Actual project data used
Responsive
 320px
 375px
 430px
 768px
 1024px
 1280px+
 Mobile navigation
 Mobile Areas interaction
 Mobile footer
 Mobile team layout
Code Quality

Run:

npm run build

Requirements:

 Build succeeds
 No broken imports
 No console errors
 No unused critical components
 No accidental TypeScript migration
 New styling uses Tailwind
 No unnecessary dependencies
51. Final Design Principle

The website should not try to make BBS Coding Club look bigger than it is.

It should make the club look:

REAL.

A focused core team of around 10 students supporting a 250+ student community is already a meaningful foundation.

The website should make that foundation feel intentional.

The story is not:

"We already have everything."

The story is:

"We're building something."

That distinction should guide every content, UX, and design decision going forward.


### One thing I'd change from the previous version

I deliberately **didn't hard-code "2025 FOUNDATION", "100% STUDENT RUN", exact activity cadences, or claims like "SIH squads / 36h MVPs" as unquestionable facts**. Those should come from your real data.

That gives you a much cleaner workflow:

**`UPDATE.md` = what the website should be**  
**`src/data/*.js` = what BBS Coding Club actually is**

That's the separation I'd want Antigravity to follow.