# Lewis Lab

**A sharper layer between vendor reports and real business performance.**

Live site: [https://www.lewislab.io](https://www.lewislab.io)

Lewis Lab is a business performance consulting practice for established businesses. Vendors report on what they control. Lewis Lab looks at the whole operation, separates performance from noise, and turns the findings into focused action across marketing, operations, reporting, and execution.

## What Lewis Lab does

- **Diagnostic.** A clear read on where things stand, what is creating friction, and what to address first.
- **Strategy.** Leverage points built for your specific market, team, and execution capacity. No generic playbooks.
- **Execution support.** Staying close to the work, tracking progress, and keeping decisions tied to measurable outcomes.

Primary focus is established businesses and multi-location operators with performance priorities to address. Keep the home and services pages focused on business performance across industries. Automotive is one industry example; dealership-specific detail belongs on the dedicated dealership consulting page.

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

The homepage embeds the existing shared and consulting styles to avoid two render-blocking stylesheet requests. Other pages continue to use the shared files. After editing `styles.css` or `consulting.css`, run `node scripts/sync-home-styles.mjs` to refresh the generated block in `index.html`. `node scripts/sync-home-styles.mjs --check` verifies it is current. Edit the shared sources rather than the generated block; no build is needed to serve or deploy the site.

Section and card entrances use the shared `site-motion.js` script and `.reveal` class: one 10px rise and fade over 360ms, with no stagger inside cards. Keep hero content, navigation, forms, and article text immediately visible. Content is visible without JavaScript or IntersectionObserver, in print, and with reduced motion enabled. Keyboard focus and direct section links reveal their targets immediately; content already in the viewport does not animate on page load.

## Field Notes

Site writing rule: do not use em dashes anywhere in site copy, metadata, generated text, or comments. Use periods, commas, colons, or parentheses as appropriate.

Short reads on the gaps between strategy, reporting, marketing, operations, and execution. Published at [www.lewislab.io/blog.html](https://www.lewislab.io/blog.html).

Field Notes remains an editorial blog. Keep GM career evidence on the consulting pages; do not repurpose the articles as career examples or a portfolio.

The Speed to Lead article includes a dealership lead management diagnostic and links to the dealership engagement. The floorplan and marketing-reporting articles also link to that page. Keep response attempts, two-way contact, appointments, and sales distinct; any invented funnel figures must be labeled illustrative, with clear denominators.

## Dealership page

The dealership page presents performance consulting across sales, inventory management, marketing, CRM and customer development, process and accountability, and store and market planning. Lead handling is one area within the broader offer. Do not restrict the engagement to one question: agree the relevant business areas, stores, and depth of review around the client's priorities. The initial 30-day diagnostic follows Examine / Isolate / Apply and provides an assessment, prioritized recommendations, ownership, and measures. Further strategy and execution support is scoped to the work needed. The page distinguishes this engagement from the free Clarity Diagnostic.

Its experience section develops three examples from Michael's General Motors tenure: market strategy and growth planning, inventory performance, and sales execution. Each connects the actual work and outcome to a relevant consulting engagement. Do not add a fourth example to fill space or turn the section into a list of GM projects. Keep the 3 Truck Strategy, shared advertising funding decision, and standalone promotion example off this page. The national district manager ranking is supporting context.

These are career examples from 2015–2024, not Lewis Lab client results. The aged-inventory result is the share of inventory over 90 days old, reduced from 43% to under 20% in one quarter. The approximately 140 prospects were identified in existing records; the documented outcome is weekly process adoption, not 140 new leads or sales. The Denver growth figures cover combined GMC light- and heavy-duty pickup registrations, 2018–2023. They are market outcomes, not an isolated causal measurement of the product proposals or training. Copy was checked against the supplied resume, evaluations, and Michael's direct accounts. Keep private source documents outside the public site repository. No testimonials or dealership client names are included.

Dealership formatting reuses the shared container, hero typography, consulting actions, and FAQ components. Match the Services page's section rhythm (4rem on desktop, 3rem on mobile), heading scale, 1.05rem body text with 1.75 line height, and existing palette. Keep dealership layout changes scoped to dealership.css.

The page uses the existing contact form provider and tags inquiries with their page source. `dealership_review_click` records clicks to the inquiry section; `lead_submit_dealership` records a form submission attempt, not confirmed delivery.

## Contact

Lewis Lab is operated by Michael Lewis. Reach out through [www.lewislab.io](https://www.lewislab.io).

## Shared page standards

Keep the approved home and services copy and existing palette intact during technical maintenance. Every page uses the shared skip link, a focusable main landmark, one visible page heading, and reduced motion support. Each indexable page needs a unique title and description, its production canonical URL, social metadata, and structured data that matches the visible content. Utility pages remain out of the sitemap and use noindex. The static 404.html page uses root-relative links so it works for missing nested paths on Vercel.

The Clarity Diagnostic is a self-assessment. It does not inspect company records. Preserve its questions and scoring when changing its interface, and preserve the contact provider, field names, and submission settings. Test the full questionnaire and optional review form without sending a submission. Update sitemap dates and article modification dates only when the corresponding content or structured data has materially changed.
