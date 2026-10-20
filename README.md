# Lewis Lab

**A sharper layer between vendor reports and real business performance.**

Live site: [https://www.lewislab.io](https://www.lewislab.io)

Lewis Lab is a business performance consulting practice for established businesses. Vendors report on what they control. Lewis Lab looks at the whole operation, separates performance from noise, and turns the findings into focused action across marketing, operations, reporting, and execution.

## What Lewis Lab does

- **Diagnostic.** A clear read on where things stand, what is creating friction, and what to address first.
- **Strategy.** Leverage points built for your specific market, team, and execution capacity. No generic playbooks.
- **Execution support.** Staying close to the work, tracking progress, and keeping decisions tied to measurable outcomes.

Primary focus is established businesses and multi-location operators with a performance question to resolve. Keep the home and services pages focused on business performance across industries. Automotive is one industry example; dealership-specific detail belongs on the dedicated dealership consulting page.

## About this repository

This repo holds the source for the Lewis Lab website: a static site built with vanilla HTML and CSS, deployed on Vercel. No framework, no build step.

```
index.html          Home
services.html       Services
dealership-consulting.html  Dealership consulting engagement
dealership.css      Styles scoped to the dealership page
diagnostic.html     Clarity Diagnostic tool
blog.html           Field Notes index
posts/              Field Notes articles
styles.css          Shared stylesheet
sitemap.xml         XML sitemap
robots.txt          Crawler directives
vercel.json         Redirect configuration
```

## Fonts and loading

Host Grotesk and Exo 2 are served from `assets/fonts/` as Latin variable WOFF2 files. The font licenses are included alongside them. Each page preloads Host Grotesk, the font used for the main content, and `styles.css` declares both families. Keep the pages free of Google Fonts stylesheet links so text does not wait for a separate font service.

Vercel caches the versioned font files for one year. If a font file changes, give it a new filename and update its CSS URL and any preload links together. The Services hero is intentionally visible immediately rather than waiting for a scroll animation.

## Field Notes

Site writing rule: do not use em dashes anywhere in site copy, metadata, generated text, or comments. Use periods, commas, colons, or parentheses as appropriate.

Short reads on the gaps between strategy, reporting, marketing, operations, and execution. Published at [www.lewislab.io/blog.html](https://www.lewislab.io/blog.html).

The Speed to Lead article includes a dealership lead management diagnostic and links to the dealership engagement. The floorplan and marketing-reporting articles also link to that page. Keep response attempts, two-way contact, appointments, and sales distinct; any invented funnel figures must be labeled illustrative, with clear denominators.

## Dealership page

The dealership consulting page leads with the path from inquiry to sale and scopes the 30-day diagnostic around one agreed performance question. The process follows the site's Examine / Isolate / Apply approach; deliverables describe the findings, actions, proposed owners, and follow-up measures for a lead-handling engagement. Inventory and store comparisons remain available scopes. The page distinguishes this engagement from the free Clarity Diagnostic.

Its experience section presents Michael's prior General Motors work: Denver GMC pickup performance, lead handling, and the regional 3 Truck Strategy planning tool, with the national district manager ranking as supporting context. These are career examples from 2015–2024, not Lewis Lab client results. Copy was checked against the supplied 2026 resume and supporting career conversations. No testimonials or dealership client names are included.

The page uses the existing contact form provider and tags inquiries with their page source. `dealership_review_click` records clicks to the inquiry section; `lead_submit_dealership` records a form submission attempt, not confirmed delivery.

## Contact

Lewis Lab is operated by Michael Lewis. Reach out through [www.lewislab.io](https://www.lewislab.io).

## Shared page standards

Keep the approved home and services copy and existing palette intact during technical maintenance. Every page uses the shared skip link, a focusable main landmark, one visible page heading, and reduced motion support. Each indexable page needs a unique title and description, its production canonical URL, social metadata, and structured data that matches the visible content. Utility pages remain out of the sitemap and use noindex. The static 404.html page uses root-relative links so it works for missing nested paths on Vercel.

The Clarity Diagnostic is a self-assessment. It does not inspect company records. Preserve its questions and scoring when changing its interface, and preserve the contact provider, field names, and submission settings. Test the full questionnaire and optional review form without sending a submission. Update sitemap dates and article modification dates only when the corresponding content or structured data has materially changed.
