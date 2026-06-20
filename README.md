# Cold Outreach Pipeline for B2B SaaS — Research Project

A research base for a future cold outreach playbook, built around 10 practitioners who actively run B2B SaaS outbound campaigns — not just write about it.

## Why this topic

Cold outreach (email + LinkedIn) is the area I work in daily as an Enterprise Sales Manager, handling cold outreach and business development across healthcare, e-commerce, and real estate verticals. This made it the most natural starting point for building a research base I can genuinely use and extend.

## How I chose these 10 experts

I avoided the first page of Google results and agency listicles, since those tend to surface marketing pages rather than people who actually run campaigns. Instead I looked for individuals who:

- Run or have run real outbound campaigns themselves (not just sell outbound services)
- Publish specific tactics, frameworks, or data, not generic "10 tips" content
- Are currently active (posting within the last several months)
- Cover a mix of formats: LinkedIn, YouTube, podcasts, so the research is not single-channel

Full list with sourcing rationale for each person: research/sources.md

| # | Expert | Why included |
|---|---|---|
| 1 | Florin Tatulea | GTM Engineer, 9 years in outbound, built a cold email course from his own track record |
| 2 | Jack Reamer | CEO of SalesBread, active YouTube channel + podcast on LinkedIn outreach |
| 3 | Jeremy Chatelaine | Founder of QuickMail.io, does live cold email teardowns on his podcast |
| 4 | Jason Bay | Founder of Outbound Squad, data-backed cold call/email frameworks, tests his own advice live |
| 5 | Conrad Niedzielski | Posts real operational data on running cold email infrastructure at scale |
| 6 | Alex Vacca (ColdIQ) | Builds B2B outbound systems for $1M+ companies, publishes the actual process |
| 7 | Will Allred | Co-founder of Lavender, near-daily tactical breakdowns of real cold emails |
| 8 | Josh Braun | Independent sales trainer, psychology-first breakdowns of real cold outreach |
| 9 | Kyle Coleman | VP Revenue Growth and Enablement at Clari, breaks down cold emails he has received as a buyer |
| 10 | Sam Nelson | Creator of the Agoge Sequence, taught outbound prospecting at Harvard Business School |

## What I collected

- research/sources.md: all 10 experts with links, dates checked, and why each one was selected
- research/linkedin-posts/: 28 posts across all 10 experts (2-4 posts each), collected manually and saved as individual markdown files per post
- research/youtube-transcripts/: 4 full video transcripts (Jack Reamer x1, Jason Bay x3), fetched via the Supadata API using a custom Node.js script (fetch-transcripts.js)
- research/other/pattern-observations.md: cross-cutting patterns noticed across the 10 experts while collecting this research

## Tools and methodology

- YouTube transcripts: Built a Node.js script (fetch-transcripts.js) that calls the Supadata API to fetch transcripts and save them as organized markdown files. API key stored locally in .env, excluded from version control via .gitignore.
- LinkedIn posts: Collected manually, since no compliant free API exists for scraping other users' posts, with full post text, date, and direct URL preserved for each.
- Verification: Every expert was checked for current activity before inclusion; where a name collision existed on LinkedIn (e.g., a different "Josh Braun"), I verified the correct profile before collecting.

## Honest notes for whoever uses this next

- A few posts (Conrad Niedzielski, Alex Vacca) end with engagement-bait CTAs ("comment X to get the guide," "repost this"). I kept them because the surrounding content was still substantive, but flagged this pattern directly in the post files, since it is worth distinguishing genuine teaching content from audience-growth tactics when building the eventual playbook.
- Sam Nelson's recent LinkedIn activity is mostly conference and community posts rather than fresh tactical content, so one of his two posts is an older (2018) foundational article that better represents his actual methodology (the Agoge Referral Request sequence).
- Florin Tatulea's posts lean toward AI and GTM strategy more than pure cold-email tactics, still relevant and current, but worth noting his content has shifted somewhat from his original "why included" reasoning.
- Full pattern analysis in research/other/pattern-observations.md.

## Repo structure

research/
- sources.md
- linkedin-posts/ (will-allred, josh-braun, florin-tatulea, jeremy-chatelaine, jason-bay, conrad-niedzielski, jack-reamer, alex-vacca, kyle-coleman, sam-nelson)
- youtube-transcripts/ (jack-reamer, jason-bay)
- other/ (pattern-observations.md)

fetch-transcripts.js
package.json
.env (not committed)
