# Notification Matrix

| Event | Recipient | Purpose |
|---|---|---|
| Request submitted | Requester | Confirm submission |
| Approval requested | Approver | Request action |
| Request approved | Requester | Confirm authorization |
| Request rejected | Requester | Explain that fulfillment will not proceed |
| Fulfillment assigned | Network Team / Engineer | Start work |
| Fulfillment completed | Requester | Confirm completion |
| Request cancelled | Requester / relevant team | Confirm cancellation |

## Notification Rules

- Notifications should contain the request number and useful status information.
- Avoid including secrets or unnecessary sensitive data in email.
- Approval emails should provide enough context for an informed decision.
- Notification events should be tied to controlled state/approval transitions to avoid duplicates.
