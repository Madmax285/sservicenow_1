# Reporting and Dashboard Design

## Operational Reports

### 1. Requests by State

Purpose: identify backlog and lifecycle distribution.

Suggested grouping: State

### 2. Requests by Priority

Purpose: highlight urgent network work.

Suggested grouping: Priority

### 3. Fulfillment by Assignment Group

Purpose: understand workload handled by the Network Team.

Suggested grouping: Assignment Group

### 4. Approval Outcomes

Purpose: measure approved versus rejected requests.

Suggested grouping: Approval outcome

### 5. Fulfillment Aging

Purpose: identify requests that remain in fulfillment for unusually long periods.

Suggested fields: Number, Priority, Assignment Group, Created, State.

## Dashboard

Recommended dashboard sections:

- Total open requests
- Requests awaiting approval
- High/Critical priority requests
- Requests in fulfillment
- Completed requests
- Rejected requests
- Average fulfillment duration
- SLA-related indicators where SLA configuration exists

## Implementation Boundary

Report names, filters, encoded queries, and dashboard widgets should be captured from the actual ServiceNow implementation after configuration and testing. This repository currently documents the design rather than claiming runtime evidence.
