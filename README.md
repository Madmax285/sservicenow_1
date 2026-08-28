# Automated Network Request Management in ServiceNow

A portfolio-ready ServiceNow application design for automating network-related service requests from submission through approval, fulfillment, notification, and reporting.

## Project Status

**Repository build:** Complete

**ServiceNow runtime verification:** Pending execution in a ServiceNow instance

This repository intentionally separates **implemented source artifacts** from runtime evidence. Nothing is described as tested in ServiceNow until it has actually been executed and verified.

## Business Problem

Network access and infrastructure requests often require repetitive validation, approval, assignment, communication, and tracking. This project standardizes that lifecycle using ServiceNow Service Catalog, client-side validation, Flow Designer, approval routing, fulfillment tasks, notifications, security controls, and reporting.

## End-to-End Workflow

```text
Requester
   |
   v
Network Request Catalog Item
   |
   v
Client Validation + Dynamic Form Behavior
   |
   v
Network Request Record
   |
   v
Approval Routing
   |--------------------------+
   |                          |
   v                          v
Approved                  Rejected
   |                          |
   v                          v
Network Fulfillment       Requester Notification
Task                         |
   |                          v
   v                        End
Network Team
   |
   v
Work Notes / State Updates
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

## Functional Scope

- Network Request catalog item
- Request type, access level, device, priority, and business justification
- Dynamic field behavior
- Client-side validation
- Network Request application data model
- Requester, approver, network engineer, and administrator access model
- Approval routing
- Fulfillment task creation and assignment
- Lifecycle notifications
- Security and ACL design
- Reporting and dashboard design
- Test plan and acceptance criteria
- Update Set deployment guidance

## Suggested Request Types

| Request Type | Example Use |
|---|---|
| Network Access | Employee needs access to a network resource |
| Firewall Change | Rule/change request |
| VPN Access | Remote connectivity request |
| Device Configuration | Configuration change on a network device |
| New Network Connection | New connectivity requirement |

## Suggested Access Levels

- Standard
- Elevated
- Administrative

## Suggested Priorities

- Critical
- High
- Moderate
- Low

## Repository Structure

```text
.
├── README.md
├── .gitignore
├── docs/
│   ├── project-overview.md
│   ├── requirements.md
│   ├── architecture.md
│   ├── data-model.md
│   ├── implementation-plan.md
│   ├── implementation-checklist.md
│   ├── catalog-item.md
│   ├── flow-designer.md
│   ├── security.md
│   ├── notifications.md
│   ├── reporting.md
│   ├── deployment.md
│   ├── test-cases.md
│   └── testing.md
├── scripts/
│   ├── README.md
│   ├── client-scripts/
│   ├── business-rules/
│   ├── script-includes/
│   └── notifications/
├── update-set/
│   └── README.md
└── screenshots/
    ├── catalog/
    ├── flows/
    ├── approvals/
    ├── portal/
    └── testing/
```

## Security Rules

Never commit passwords, API tokens, OAuth secrets, ServiceNow credentials, personal data, or production-only configuration. Runtime secrets belong in the ServiceNow instance or approved secret-management tooling, not GitHub.

## Implementation Truth

GitHub is the version-control and documentation layer. The ServiceNow instance is the runtime source of truth. After implementation, export only the tested configuration and add real screenshots/evidence.

## Portfolio Value

This project demonstrates practical ServiceNow skills across Service Catalog, client-side scripting, Flow Designer, approvals, notifications, security, reporting, testing, and deployment documentation.

## Author

**Madmax285**
