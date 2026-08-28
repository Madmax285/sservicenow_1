# Automated Network Request Management in ServiceNow

An end-to-end ServiceNow application project that automates network-related service requests, approvals, fulfillment, notifications, and operational tracking.

> **Project status:** In progress. This is an independent project built by Madmax285 with ChatGPT. The repository will contain only artifacts that are actually implemented, tested, and documented in ServiceNow.

## Objective

Build a reliable network-request lifecycle that reduces manual effort, standardizes approvals and fulfillment, improves visibility, and maintains audit-ready records.

## Target Workflow

```text
Requester
   |
   v
Network Request Catalog Item
   |
   v
Validation + Dynamic Form Logic
   |
   v
Approval Routing
   |---------------------> Rejected -> Requester Notification
   |
   v
Approved
   |
   v
Network Fulfillment Task
   |
   v
Network Team / Engineer
   |
   v
Work Notes + Configuration
   |
   v
Completed
   |
   v
Requester Notification
   |
   v
Reports / Dashboard / SLA Tracking
```

## Planned ServiceNow Components

- Service Catalog / Network Request catalog item
- Catalog variables and form configuration
- Dynamic client-side behavior
- Users, groups, and roles
- ACL/security controls
- Approval routing
- Flow Designer automation
- Fulfillment task assignment
- Email notifications
- Request and task lifecycle tracking
- Reports and dashboards
- Testing and security validation
- Update Set deployment artifact

## Repository Structure

```text
.
├── README.md
├── docs/
│   ├── project-overview.md
│   ├── requirements.md
│   ├── architecture.md
│   ├── implementation-plan.md
│   ├── catalog-item.md
│   ├── flow-designer.md
│   ├── security.md
│   └── testing.md
├── scripts/
│   ├── business-rules/
│   ├── client-scripts/
│   ├── ui-policies/
│   └── notifications/
├── update-set/
├── screenshots/
│   ├── catalog/
│   ├── flows/
│   ├── approvals/
│   ├── portal/
│   └── testing/
└── sample-data/
```

## Implementation Rule

No fabricated ServiceNow configuration will be committed. Scripts, update sets, screenshots, and configuration details will be added only after they exist and have been verified in the ServiceNow instance.

## Definition of Done

- Requester can submit a Network Request.
- Required data is validated.
- Dynamic form behavior works as intended.
- Correct approval routing occurs.
- Approvers can approve/reject.
- Approved requests generate fulfillment work for the Network Team.
- Engineers can update work notes and complete tasks.
- Request state transitions correctly.
- Requesters receive lifecycle notifications.
- ACLs/roles enforce the intended access model.
- Reports/dashboard provide useful operational visibility.
- End-to-end tests pass.
- A deployable Update Set is exported and documented.

## Author

**Madmax285**
