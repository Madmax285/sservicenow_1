# Approval Routing Matrix

The approval model uses request characteristics to determine whether approval is required and who should approve.

| Condition | Approval | Suggested approver |
|---|---|---|
| Standard network access + Low/Moderate priority | Required | Requester's manager |
| Elevated access | Required | Requester's manager + Network Approver |
| Administrative access | Required | Network Approver + Security/authorized owner |
| Firewall change | Required | Network Approver / service owner |
| Critical production-impacting change | Required | Network Approver + designated change authority |

## Design Principles

- Approval should be determined by business rules, not by client-side logic alone.
- The requester must not approve their own request.
- Rejection should stop fulfillment and notify the requester.
- Approval records should remain auditable.
- Exact approver groups and conditions should be finalized in the ServiceNow instance.

## Flow Pattern

```text
Request submitted
      |
      v
Determine request type + access level + priority
      |
      v
Determine approver(s)
      |
      v
Ask for Approval
   /          \
Approve      Reject
  |             |
  v             v
Fulfillment   Notify requester
  |
  v
Network Team
```
