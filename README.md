# Automated Network Request Management in ServiceNow

An end-to-end ServiceNow project for automating network-related service requests, approvals, fulfillment, notifications, and operational tracking.

> **Project status:** In progress. This repository is being built alongside the SkillWallet project and will contain only configuration, scripts, documentation, and evidence that are actually implemented and tested in ServiceNow.

## Project Objective

Streamline the lifecycle of network-related service requests by reducing manual effort, standardizing approval and fulfillment workflows, improving visibility, and maintaining audit-ready records.

## Target Workflow

```text
Requester
   |
   v
Network Request Catalog Item
   |
   v
Request Validation
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
Reports / Dashboards / SLA Tracking
```

## Planned ServiceNow Components

- Service Catalog / Network Request catalog item
- Catalog variables and form configuration
- Dynamic client-side behavior
- User, group, and role configuration
- Access controls (ACLs)
- Approval routing
- Flow Designer automation
- Fulfillment task assignment
- Email notifications
- Request and task lifecycle tracking
- Reports and dashboards
- Testing and security validation
- Update Set export for deployment

## Repository Structure

```text
.
├── README.md
├── docs/
│   ├── project-overview.md
│   ├── requirements.md
│   ├── architecture.md
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

## Implementation Notes

This repository intentionally does **not** contain invented ServiceNow configuration. Configuration files and scripts will be added after the corresponding SkillWallet requirement has been completed and verified in the ServiceNow instance.

## Testing Goal

The completed implementation should demonstrate:

1. A requester can submit a network request.
2. The form validates the required information.
3. The appropriate approval is requested.
4. Approvers can approve or reject the request.
5. An approved request creates/initiates fulfillment for the Network Team.
6. Engineers can process the fulfillment task and add work notes.
7. Request state progresses correctly.
8. Requesters receive notifications at important lifecycle stages.
9. Access is restricted according to the configured roles and ACLs.
10. Reports/dashboards provide operational visibility.

## SkillWallet Project

This repository supports the **Automated Network Request Management in ServiceNow** project in SkillWallet. The ServiceNow implementation remains the source of truth; GitHub is used for versioned project documentation, scripts/configuration exports, and implementation evidence.

## Author

**Madmax285**
