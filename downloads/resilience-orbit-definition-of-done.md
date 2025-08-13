# Definition of Done — Resilience Orbit

A change is "Done" only when the following are true:
- Code merged, deployed, and verified in production
- Runbook updated with symptom → first action → owner → escalation → rollback
- Alerts cover the primary symptoms (error budget burn, saturation, timeouts)
- Rollback is practiced or trivially executable (one-click / feature flag)
- SLO impact measured; scorecard updated if relevant
- Logging/metrics/traces confirm steady-state after deployment
