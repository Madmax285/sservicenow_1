# Notification Design

## Notification Matrix

| Event | Recipient | Purpose |
|---|---|---|
| Request submitted | Requester | Confirm request creation |
| Approval requested | Approver | Request review/action |
| Request approved | Requester | Confirm approval |
| Request rejected | Requester | Explain that fulfillment will not proceed |
| Fulfillment assigned | Network Team / assignee | Signal work is ready |
| Fulfillment completed | Requester | Confirm completion |

## Design Principles

- Keep subjects concise and include the request number.
- Include only information necessary for the recipient to act.
- Avoid exposing secrets or unnecessary personal information.
- Use the request record as the source for current state rather than duplicating state in notification content.
- Test each notification independently in the target ServiceNow instance.

## Example Subject Patterns

```text
Network Request ${number} submitted
Approval required: Network Request ${number}
Network Request ${number} approved
Network Request ${number} rejected
Network Request ${number} completed
```

Exact notification record configuration should be documented after implementation.
