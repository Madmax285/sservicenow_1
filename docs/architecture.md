# Solution Architecture

## Logical Architecture

```text
Requester
   |
   v
Service Catalog / Service Portal
   |
   v
Network Request
   |
   v
Validation + Dynamic Form Logic
   |
   v
Flow Designer
   |
   +----> Approval
   |        |
   |        +----> Rejected -> Notification
   |        |
   |        +----> Approved
   |
   v
Network Fulfillment Task
   |
   v
Network Team
   |
   v
Completion + Notifications
   |
   v
Reporting / Dashboard / SLA Tracking
```

## Security Model

The final implementation will use the appropriate ServiceNow users, groups, roles, ACLs, and catalog access controls required by the SkillWallet requirements.

## Source of Truth

The ServiceNow instance is the source of truth for runtime configuration. GitHub stores versioned documentation, verified scripts/configuration exports, and project evidence.

## Configuration Rule

No configuration in this repository should be represented as tested or production-ready until it has been implemented and verified in ServiceNow.
