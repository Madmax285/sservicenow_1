# Reporting and Dashboard Specification

## Operational Reports

### 1. Network Requests by State

Shows request volume by lifecycle state. Suggested grouping: State.

### 2. Requests by Priority

Shows workload distribution across Critical, High, Moderate, and Low priorities. Suggested grouping: Priority.

### 3. Requests by Type

Shows demand by network service type. Suggested grouping: Request Type.

### 4. Fulfillment by Assignment Group

Shows workload handled by the Network Team. Suggested grouping: Assignment Group.

### 5. Approval Outcomes

Shows approved versus rejected requests. Suggested grouping: Approval outcome.

### 6. Approval Aging

Highlights requests waiting for approval beyond the target duration.

### 7. Fulfillment Aging

Identifies requests that remain in fulfillment unusually long. Suggested fields: Number, Priority, Assignment Group, Created, State.

## Dashboard

Recommended widgets:

- Total open requests
- Requests awaiting approval
- High/Critical priority requests
- Requests in fulfillment
- Completed requests
- Rejected requests
- Requests by type
- Requests by priority
- Fulfillment tasks by assignee
- Average fulfillment duration
- SLA indicators where SLA configuration exists

## Implementation Boundary

Report names, filters, encoded queries, and dashboard widgets should be captured from the actual ServiceNow implementation after configuration and testing. This repository documents the design and does not claim runtime evidence that has not been collected.
