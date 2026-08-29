# BBS Coding Club Website --- Theme & Design System

**Document:** theme.md\
**Version:** 1.0\
**Status:** Draft / Implementation Ready

------------------------------------------------------------------------

# 1. Design Direction

## Core Concept

The BBS Coding Club website should combine:

> **Premium editorial design × creative technology × engineering
> culture**

Reference principles are inspired by the visual qualities of: -
Thibaut's experimental web experiences. - Digital Saints' creative-tech
presentation. - Perplexity Comet's product polish. - tinyPod's playful
product personality. - La Experiencia's immersive storytelling. - IEEE
CS SRM's technical-club information architecture.

These are **references for principles, not templates to copy**.

The final website must have its own BBS Coding Club identity.

------------------------------------------------------------------------

# 2. Brand Personality

The interface should feel:

-   Confident
-   Technical
-   Curious
-   Experimental
-   Intelligent
-   Young
-   Professional
-   Human
-   Slightly rebellious
-   Forward-looking

It should NOT feel:

-   Corporate
-   Bureaucratic
-   Childish
-   Gamer-themed
-   Generic SaaS
-   Overly futuristic
-   AI-template-like
-   Visually noisy

------------------------------------------------------------------------

# 3. Visual Philosophy

## Rule 01 --- Typography Is the Hero

Large type should do most of the visual work.

Do not depend on: - Neon gradients. - Glowing borders. - Particle
backgrounds. - Glassmorphism.

Use: - Scale. - Weight. - Contrast. - Whitespace. - Alignment. - Rhythm.

------------------------------------------------------------------------

## Rule 02 --- One Strong Accent

Use a restrained palette.

Recommended default:

``` text
Background:
#0A0A0A

Primary Text:
#F5F5F0

Muted Text:
#A0A0A0

Border:
#262626

Accent:
Electric Blue / BBS brand accent
```

The exact accent color should be finalized against the club's existing
identity.

Do not use multiple competing neon colors.

------------------------------------------------------------------------

# 4. Color System

## Dark Theme

### Background

`#0A0A0A`

Used for: - Main page. - Hero. - Navigation overlay. - Dark sections.

### Surface

`#111111`

Used for: - Elevated areas. - Interactive surfaces. - Secondary
containers.

### Border

`#262626`

Used for: - Dividers. - Technical grids. - Input boundaries.

### Primary

`#F5F5F0`

Used for: - Main headings. - Important UI. - High-priority content.

### Secondary

`#A0A0A0`

Used for: - Descriptions. - Metadata. - Supporting text.

### Accent

A single recognizable BBS accent.

Possible direction: - Electric blue.

The accent should be used for: - CTAs. - Links. - Active states. - Small
highlights. - Selected categories.

It should not cover the interface.

------------------------------------------------------------------------

# 5. Optional Light Sections

A small number of sections may invert the palette to create rhythm.

Example:

``` text
Dark
↓
Light
↓
Dark
↓
Dark
```

Do not alternate every section mechanically.

Light theme:

``` text
Background: #F1F0EA
Text:       #111111
Muted:      #666666
Border:     #D6D4CC
Accent:     BBS accent
```

Use light sections primarily for: - Editorial storytelling. - Project
showcases. - Major transitions.

------------------------------------------------------------------------

# 6. Typography

## Display Font

Preferred candidates:

1.  Geist
2.  Space Grotesk
3.  Satoshi
4.  General Sans
5.  Instrument Sans

Choose **one**.

The display font should have: - Strong large-scale readability. - Modern
geometric characteristics. - Distinctive but restrained personality.

## Monospace Font

Preferred:

-   Geist Mono
-   IBM Plex Mono
-   JetBrains Mono

Use for: - Labels. - Dates. - Categories. - Coordinates. - Technical
metadata. - Section numbers. - Small UI text.

------------------------------------------------------------------------

# 7. Type Scale

Desktop starting point:

``` text
Display XL      96–160px
Display L       64–96px
Display M       48–64px
Heading L       40–56px
Heading M       32–40px
Heading S       24–32px
Body L          20–24px
Body            16–18px
Small           13–15px
Micro           10–12px
```

These are starting ranges, not rigid values.

Hero typography should be responsive using fluid sizing.

Example conceptual scale:

``` css
clamp(4rem, 11vw, 10rem)
```

Avoid arbitrary typography jumps between breakpoints.

------------------------------------------------------------------------

# 8. Typography Rules

### Headlines

-   Short.
-   Bold.
-   High contrast.
-   Usually sentence case or uppercase depending on context.

### Body

-   Comfortable line height.
-   Maximum readable width.
-   Avoid giant paragraphs.

### Metadata

Use monospace.

Example:

``` text
/ PROJECT / AI / 2026
```

### Labels

Use:

``` text
01 / ABOUT
02 / PROJECTS
03 / EVENTS
```

This creates a visual navigation system throughout the page.

------------------------------------------------------------------------

# 9. Layout System

Use an editorial grid.

Desktop:

``` text
12-column grid
```

Tablet:

``` text
8-column grid
```

Mobile:

``` text
4-column grid
```

Recommended horizontal margins:

Desktop: `5vw–7vw`

Tablet: `4vw–6vw`

Mobile: `5vw`

The grid should be visible only where it adds value.

------------------------------------------------------------------------

# 10. Whitespace

Whitespace is a major design element.

Use generous vertical spacing between major sections.

Suggested section rhythm:

``` text
Small section:
80–120px

Standard section:
140–220px

Major visual transition:
220–320px
```

Do not fill empty space simply because it exists.

------------------------------------------------------------------------

# 11. Borders and Dividers

Use thin, subtle borders.

Preferred:

`1px solid var(--border)`

Avoid: - Thick card borders. - Glowing outlines. - Decorative boxes
around every element.

Borders should help structure the page, not decorate it.

------------------------------------------------------------------------

# 12. Cards

Cards should be used selectively.

### Avoid

A page filled with:

``` text
┌─────────┐
│ IMAGE   │
│ TITLE   │
│ TEXT    │
│ BUTTON  │
└─────────┘
```

repeated 12 times.

### Prefer

Editorial compositions:

``` text
PROJECT 01

Large visual

Project title
Description

Technology
Year
↗
```

Cards should feel like content modules, not template components.

------------------------------------------------------------------------

# 13. Buttons

Buttons should be confident and simple.

### Primary

``` text
JOIN THE CLUB ↗
```

### Secondary

``` text
EXPLORE PROJECTS →
```

Interaction: - Slight translation. - Accent transition. - Arrow
movement. - No exaggerated bounce.

Avoid pill buttons everywhere.

Use rounded corners only when they support the visual language.

------------------------------------------------------------------------

# 14. Navigation Theme

Default navigation:

``` text
BBS CODING CLUB                         MENU ↗
```

Keep it minimal.

Menu overlay:

``` text
01  ABOUT
02  EVENTS
03  PROJECTS
04  TEAM
05  JOIN
```

Additional links:

``` text
INSTAGRAM ↗
GITHUB ↗
LINKEDIN ↗
```

The menu should feel like a **designed state**, not a standard dropdown.

------------------------------------------------------------------------

# 15. Hero Theme

The hero is the most visually important section.

### Preferred structure

``` text
BBS CODING CLUB

WE
BUILD.

Short supporting statement...

JOIN THE CLUB →
EXPLORE WHAT WE BUILD →

EST. 2025 — BBS — INDIA
```

Use huge typography.

Keep supporting elements intentionally small.

The contrast between massive headline and tiny metadata is important.

------------------------------------------------------------------------

# 16. Marquee Theme

Example:

``` text
BUILD • LEARN • COMPETE • CREATE • COLLABORATE • SHIP
```

Style: - Monospace or bold display type. - Large enough to be noticed. -
Low visual complexity. - Continuous movement.

Speed should be slow enough to read.

Pause or reduce motion when `prefers-reduced-motion` is enabled.

------------------------------------------------------------------------

# 17. About Theme

Use a strong editorial statement.

Example:

> **We are not just a coding club.**

Then supporting content can sit beside or below it.

Use asymmetric alignment.

Possible composition:

``` text
01 / ABOUT

WE ARE
NOT JUST
A CODING
CLUB.

                    A student-led...
                    community...
```

Do not center-align the entire section.

------------------------------------------------------------------------

# 18. Activity Universe Theme

This is one of the site's signature interactions.

Use typography as the interface.

Example:

``` text
HACKATHONS

PROJECTS

          BUILD

WORKSHOPS

          COMPETE

OPEN SOURCE
```

Hover/tap should alter: - Scale. - Position. - Opacity. - Supporting
information.

The interaction should remain understandable without animation.

------------------------------------------------------------------------

# 19. Project Theme

Projects should feel like **case studies**, not portfolio cards.

Each project can have:

``` text
01

PROJECT NAME

AI / WEB / ML
2026

Short description.

Large project visual.

VIEW PROJECT ↗
SOURCE ↗
```

Use large imagery.

Allow different projects to have slightly different compositions while
maintaining system consistency.

------------------------------------------------------------------------

# 20. Event Theme

Events should feel current.

Upcoming event:

``` text
UPCOMING

01

SIH INTERNAL HACKATHON

BUILD SOMETHING
THAT MATTERS.

26 AUG — 2026
ONLINE / BBS

REGISTER →
```

Use oversized titles and small metadata.

Past events can become a timeline or archive.

------------------------------------------------------------------------

# 21. Statistics Theme

Statistics should use oversized numerals.

Example:

``` text
500+
STUDENTS REACHED

25+
EVENTS

15+
PROJECTS

10+
HACKATHONS
```

Numbers: - Very large. - High contrast.

Labels: - Small monospace.

Do not animate numbers unless the animation adds value.

Never fabricate metrics.

------------------------------------------------------------------------

# 22. Team Theme

Use a human visual system.

Preferred: - Large portraits. - Variable image sizes. - Editorial
collage. - Minimal metadata.

Example:

``` text
THE PEOPLE
BEHIND THE CODE

NAME
ROLE

NAME
ROLE

NAME
ROLE
```

Avoid identical profile-card grids unless the number of people requires
them.

------------------------------------------------------------------------

# 23. Terminal Theme

A single terminal-inspired component can act as an Easter egg.

Visual:

``` text
┌───────────────────────────────────┐
│ $ whoami                          │
│                                   │
│ bbs_coding_club                   │
│                                   │
│ $ cat mission.txt                 │
│                                   │
│ build things.                     │
│ learn together.                   │
│ ship relentlessly.                │
│                                   │
│ $ ./join-community                │
│ > ACCESS GRANTED_                │
└───────────────────────────────────┘
```

Keep it understated.

No full-page terminal aesthetic.

------------------------------------------------------------------------

# 24. Image Direction

Photography should feel:

-   Real.
-   Human.
-   Slightly documentary.
-   High contrast where appropriate.
-   Consistent in treatment.

Preferred subjects: - Students building. - Hackathon environments. -
Screens / prototypes. - Team collaboration. - Workshops. - Events.

Avoid excessive generic stock photography.

For project imagery: - Prefer real screenshots. - Product mockups. -
Diagrams. - Generated visual systems only where appropriate.

------------------------------------------------------------------------

# 25. Texture

A subtle grain/noise layer may be used.

Opacity should be extremely low.

Purpose: - Prevent sterile digital flatness. - Add tactile quality.

Never let texture reduce readability.

------------------------------------------------------------------------

# 26. Motion System

## Entrance

Elements may reveal using:

-   Opacity.
-   Translate.
-   Clip-path.
-   Mask reveal.

## Scroll

Use: - Sticky sections. - Image scaling. - Text movement. - Horizontal
movement.

## Hover

Use: - Small translation. - Image scale. - Arrow movement. - Metadata
reveal.

### Motion principle

``` text
FAST → UI feedback
MEDIUM → transitions
SLOW → atmosphere
```

Avoid long animations that make the interface feel slow.

------------------------------------------------------------------------

# 27. Reduced Motion

When:

``` css
@media (prefers-reduced-motion: reduce)
```

The website should: - Remove non-essential movement. - Disable
continuous marquee motion where necessary. - Replace scroll choreography
with simple reveals. - Keep all information accessible.

------------------------------------------------------------------------

# 28. Cursor Interactions

Desktop-only custom cursor behavior may be used sparingly.

Examples: - Project hover. - Image preview. - Navigation interaction.

Do not permanently replace the normal cursor with an unreadable custom
shape.

Touch devices should receive equivalent functionality without cursor
dependencies.

------------------------------------------------------------------------

# 29. Iconography

Use a consistent minimal icon system.

Preferred: - Thin line icons. - Simple arrows. - Minimal geometric
symbols.

Avoid: - Emoji as UI icons. - Excessive decorative symbols. - Mixed icon
styles.

The arrow `↗` can become a recurring brand motif for external links and
CTAs.

------------------------------------------------------------------------

# 30. Microcopy

Microcopy should sound like builders, not bureaucracy.

Good:

``` text
SELECTED BUILDS
THE PEOPLE BEHIND THE CODE
READY TO BUILD?
EXPLORE WHAT WE BUILD
```

Avoid:

``` text
Welcome to our prestigious organization.
We strive to empower students through excellence.
Click below to learn more about our initiatives.
```

Keep language direct.

------------------------------------------------------------------------

# 31. Technical Aesthetic

Use subtle engineering references:

-   Section numbering.
-   Monospace metadata.
-   Grid lines.
-   Coordinates.
-   Version labels.
-   Dates.
-   Git-like terminology.
-   Terminal snippets.

Example:

``` text
v1.0 / BBS / 2026
```

These should function as visual texture, not as fake technical
complexity.

------------------------------------------------------------------------

# 32. Responsive Theme

## Desktop

The design can be dramatic.

Use: - Oversized typography. - Asymmetry. - Horizontal movement. - Large
images. - Sticky storytelling.

## Mobile

Become more editorial and vertical.

Prioritize: - Readability. - Tap interactions. - Clear hierarchy. -
Reduced animation.

Never attempt to preserve every desktop animation on mobile.

------------------------------------------------------------------------

# 33. Design Anti-Patterns

Do NOT use these as defaults:

-   Neon green-on-black developer template.
-   Full-page particle background.
-   Excessive glassmorphism.
-   Every section as a card grid.
-   Giant glowing gradients.
-   Excessive rounded pills.
-   Random floating 3D objects.
-   Fake code everywhere.
-   Excessive border-radius.
-   Huge logo animations that delay content.
-   Scroll-jacking.
-   Auto-playing sound.
-   Hover-only critical information.
-   Overloaded dashboards.

------------------------------------------------------------------------

# 34. Component Naming Direction

Suggested component system:

``` text
SiteHeader
MenuOverlay
Hero
Marquee
SectionLabel
AboutSection
ActivityUniverse
ProjectShowcase
ProjectItem
EventFeature
EventArchive
Stats
TeamGrid
TeamMember
JoinSection
TerminalBlock
SiteFooter
```

Components should represent meaningful interface concepts rather than
tiny decorative fragments.

------------------------------------------------------------------------

# 35. Design Tokens

Conceptual CSS variables:

``` css
:root {
  --bg: #0A0A0A;
  --surface: #111111;
  --text: #F5F5F0;
  --muted: #A0A0A0;
  --border: #262626;

  --accent: /* BBS brand accent */;

  --font-display: "Geist", sans-serif;
  --font-mono: "Geist Mono", monospace;

  --radius-sm: 4px;
  --radius-md: 8px;

  --container: 1400px;

  --ease-standard: cubic-bezier(.2,.8,.2,1);
  --ease-smooth: cubic-bezier(.16,1,.3,1);
}
```

Exact values may evolve during implementation.

------------------------------------------------------------------------

# 36. Visual QA Checklist

Before approving a page, ask:

### Identity

-   Does this feel like BBS Coding Club?
-   Is the visual language consistent?

### Hierarchy

-   Can I tell what matters in 2--3 seconds?
-   Are headings clearly more important than metadata?

### Restraint

-   Is there too much animation?
-   Is there too much color?
-   Is there too much decoration?

### Usability

-   Can I navigate without hover?
-   Can I use it on mobile?
-   Is text readable?

### Technical Quality

-   Are images optimized?
-   Is motion performant?
-   Does reduced motion work?
-   Is keyboard navigation functional?

### Originality

-   Does this look like a custom brand?
-   Or could an AI website generator have produced it from one generic
    prompt?

------------------------------------------------------------------------

# 37. Final Design Mantra

> **Make it feel engineered, not generated.**

The website should look like people who care deeply about: -
technology, - design, - craft, - experimentation, - and community

built it themselves.

**Less decoration.\
More intention.\
Less template.\
More identity.\
Less noise.\
More signal.**
