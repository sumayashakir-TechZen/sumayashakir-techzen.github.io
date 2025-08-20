---
title: "Foundations: The Resilience Orbit Model (21-Day Loop)"
date: 2025-08-20
summary: "One deliberate loop to make resilience measurable, sustainable, and fast."
tags: ["foundations","operating-model","sre","leadership"]
layout: "_includes/post.njk"
---

**Why this exists:** Most teams talk about resilience after an incident. Orbit moves it **before** the incident with a tight, repeatable loop.

## The 21‑Day Loop
1. **Anticipate** — pick _one_ service + _one_ failure mode. Define the desired outcome and metric.
2. **Fortify** — ship a **self‑healing** safeguard (flag/rollback/circuit breaker/retry with backoff).
3. **Validate** — run a targeted **chaos check** in prod‑like. Prove detection, mitigation, recovery.
4. **Evolve** — publish a one‑page **executive scorecard** and queue the next two actions.

## Minimal Artifacts (copy these into your system)
- **PR checks:** runbook link • SLO impact • alert maps to a human • rollback/flag path.
- **DoD add‑ons:** runbook updated • alert owner set • SLO tile visible • probe passes.
- **Scorecard:** Availability • MTTR • Automations shipped • Tested failure modes.

## What “good” looks like
- Small, boring improvements every cycle.
- Visible SLO impact within 1–2 loops.
- Execs see **risk down / speed up** on one page.

> Start tiny. A 2% recovery improvement every loop beats a once‑a‑year rewrite.
