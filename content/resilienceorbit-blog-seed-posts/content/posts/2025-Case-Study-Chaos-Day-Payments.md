---
title: "Case Study: 90‑Minute Chaos Day for Payments"
date: 2025-08-20
summary: "A short, safe drill that raised auth‑success 1.6% and cut MTTR by 22%."
tags: ["case-study","chaos","payments","slo"]
layout: "_includes/post.njk"
---

**Context:** Checkout intermittently failed when the payment gateway spiked latency.

### Goal (Anticipate)
- Improve **checkout success** and reduce **MTTR** for gateway incidents.

### Fortify (Ship)
- Added **timeout + jittered retries**, **idempotent keys**, and a **degrade flag** to queue captures.
- Playbook: _“If gateway > p95 1.5s for 5m, flip to degrade; auto‑reconcile within 6h.”_

### Validate (Chaos)
- Fault: inject 30% 5xx + 1s latency to gateway sandbox.
- Expected: user completes checkout; capture is queued; ops alert fires once; dashboards show spike.

### Evolve (Scorecard)
- +1.6% **auth success** during stress windows.
- **MTTR −22%** (alert → action via one‑click flag in runbook).
- Next: automate traffic shift to secondary provider at 3× latency.

**Takeaway:** a 90‑minute, focused chaos day can move real business metrics without drama.
