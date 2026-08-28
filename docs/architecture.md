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
Reports / Dashboard / SLA Tracking
```

## Application Layers

### Experience Layer

- Service Catalog / Service Portal catalog item
- Clear request instructions
- Dynamic variables and validation feedback

### Data Layer

- Network Request record
- ServiceNow User references
- Configuration Item reference where applicable
- Approval records
- Fulfillment tasks

### Automation Layer

- Catalog Client Scripts / UI Policies
- Server-side validation
- Flow Designer approval and fulfillment lifecycle
- Notifications

### Security Layer

- Roles
- Groups
- ACLs
- Catalog access controls
- Least-privilege assignment

### Reporting Layer

- Request-state reporting
- Priority and workload reporting
- Approval outcomes
- Fulfillment aging
- Dashboard and SLA visibility

## Source of Truth

The ServiceNow instance is the runtime source of truth. GitHub stores versioned documentation, source-level scripts, deployment guidance, and verified configuration artifacts.

## Security Principle

Do not hard-code credentials, tokens, passwords, or production secrets into scripts or documentation. Avoid hard-coded instance-specific identifiers when a safer configuration-based lookup is practical.

## Verification Boundary

The architecture is the design baseline. Actual runtime behavior must be verified in ServiceNow before screenshots, test results, or exported Update Sets are marked as completed evidence.
