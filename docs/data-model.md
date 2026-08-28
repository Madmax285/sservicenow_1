# Network Request Data Model

## Purpose

Define the logical data structure for the Automated Network Request Management application before implementing it in ServiceNow.

## Network Request

| Field | Suggested Type | Required | Purpose |
|---|---|---:|---|
| Number | Auto-number | Yes | Unique request identifier |
| Requested for | Reference: User | Yes | User receiving the requested service |
| Request type | Choice | Yes | Network service being requested |
| Access level | Choice | Yes | Requested level of access |
| Device | Reference: Configuration Item | No | Device or CI affected by the request |
| Priority | Choice | Yes | Business/operational urgency |
| Business justification | String / HTML | Yes | Reason for the request |
| State | Choice | Yes | Current lifecycle state |
| Approval | Choice | Yes | Approval outcome |
| Assignment group | Reference: Group | No | Team responsible for fulfillment |
| Assigned to | Reference: User | No | Engineer handling fulfillment |
| Work notes | Journal | No | Operational fulfillment notes |
| Closed at | Date/Time | No | Completion timestamp |

## Lifecycle States

Recommended logical states:

1. Draft
2. Submitted
3. Awaiting Approval
4. Approved
5. In Fulfillment
6. Completed
7. Rejected
8. Cancelled

The exact choice values should be created consistently in the target ServiceNow instance.

## Relationships

```text
User
  |
  +---- Requested For ----> Network Request
                              |
                              +---- Device ----> Configuration Item
                              |
                              +---- Approval ----> Approval Record
                              |
                              +---- Fulfillment ----> Task
                              |
                              +---- Assignment Group ----> Group
```

## Design Notes

- Use references rather than free-text values where ServiceNow reference data already exists.
- Keep state and approval outcome separate so lifecycle status is not confused with approval status.
- Avoid storing credentials, secrets, or unnecessary personal data in the application table.
- Final field names and dictionary settings must be verified against the actual ServiceNow implementation before being presented as deployed configuration.
