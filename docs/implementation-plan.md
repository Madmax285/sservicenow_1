# Implementation Plan

## Objective
Build an end-to-end Network Request Management solution in ServiceNow.

## Core lifecycle

1. Requester submits a Network Request catalog item.
2. Catalog variables capture request type, access level, device, priority, and business justification.
3. Client-side validation and visibility rules keep the form consistent.
4. Flow Designer evaluates the request and determines approval routing.
5. Approver receives an approval request and notification.
6. Approved requests create fulfillment work for the Network Team.
7. Network engineers update the task, add work notes, and complete the work.
8. Request status reflects the fulfillment lifecycle.
9. Requester receives lifecycle notifications.
10. Administrators use reports and dashboards for operational visibility.

## Roles

- `x_netreq.requester` — submit and view permitted requests.
- `x_netreq.approver` — review approval records.
- `x_netreq.network_engineer` — work fulfillment tasks.
- `x_netreq.admin` — administer the application.

> Role names are proposed scoped names. Use the actual role names created in the target ServiceNow instance when implementing.

## Data model

### Network Request

Recommended fields:

| Field | Type | Purpose |
|---|---|---|
| Number | Auto-number | Unique request identifier |
| Requested for | Reference: User | Person receiving the service |
| Request type | Choice | Type of network service requested |
| Access level | Choice | Requested access level |
| Device | Reference: Configuration Item | Network device involved |
| Priority | Choice | Business/operational priority |
| Business justification | String/HTML | Reason for request |
| State | Choice | Request lifecycle |
| Approval | Choice | Approval outcome |
| Assignment group | Reference: Group | Fulfillment team |
| Work notes | Journal | Operational notes |
| Closed at | Date/Time | Completion timestamp |

## Flow design

**Trigger:** Network Request is submitted/created.

**Actions:**

- Validate required information.
- Set initial state to `Awaiting Approval` where approval is required.
- Determine approver from the configured routing rule.
- Ask for approval.
- If rejected: set request to `Rejected` and notify requester.
- If approved: create/route fulfillment task to Network Team.
- When fulfillment completes: set request to `Completed` and notify requester.

## Build order

1. Application/table foundation
2. Roles, groups, and access controls
3. Catalog item and variables
4. Catalog UI policies/client scripts
5. Flow Designer approval and fulfillment
6. Notifications
7. Portal/user experience
8. Reports and dashboard
9. Testing and security validation
10. Export/deployment artifacts

## Definition of done

The project is complete only when the happy path, rejection path, security checks, and notification checks have been tested successfully and the resulting artifacts match the implementation in the ServiceNow instance.
