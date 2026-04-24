---
title: "Pattern: Graceful Degradation > All‑or‑Nothing"
date: 2025-08-20
summary: "Keep core value flowing even when dependencies wobble."
tags: ["pattern","graceful-degradation","architecture","feature-flags"]
layout: post.njk
---

Most outages are **partial**. Design for partial value, not binary uptime.

## Where to apply
- **Payments:** allow cart creation and _delayed capture_ when gateway is flaky.
- **Search:** fallback to cached results if ranking model is down.
- **Notifications:** queue and **show status** instead of failing user actions.

## Implementation quickstart
- **Flag:** `degrade_mode` (on/off/percent rollout).
- **Fallbacks:** cache, read‑only mode, stale‑while‑revalidate, queue + later reconcile.
- **UX:** expose a **status chip** (“queued”, “limited mode”) + retry affordance.
- **Limits:** guardrails on retries, timeouts, max queue age.

```pseudo
if gateway.timeout():
  flag.on("degrade_mode")
  order.authorizeLater()   # queue
  ui.badge("Payment queued")
else:
  charge()
```

## Validate (chaos)
- Inject latency/5xx on the dependency.
- Verify: user can still complete the core flow; reconciliation succeeds; alerts fire once.

**KPI lift:** task completion rate during incidents, fewer hard failures, lower MTTR.
