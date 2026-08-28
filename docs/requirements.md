# Project Requirements

## Functional Requirements

The Automated Network Request Management application should:

1. Provide a Network Request catalog item.
2. Capture request type, access level, device/CI when applicable, priority, requested-for user, and business justification.
3. Dynamically display fields based on the selected request type.
4. Validate required request information before submission.
5. Route requests through an appropriate approval process.
6. Send approval and rejection notifications.
7. Create fulfillment work after approval when fulfillment is required.
8. Assign fulfillment work to the Network Team.
9. Allow network engineers to update work notes and task state.
10. Keep the parent request lifecycle synchronized with fulfillment progress.
11. Notify requesters at important lifecycle stages.
12. Provide reports/dashboard views for request volume, state, priority, fulfillment performance, and SLA-related visibility.
13. Apply an access model appropriate for requesters, approvers, network engineers, and administrators.
14. Maintain deployment documentation and tested configuration artifacts.

## Non-Functional Requirements

- No credentials or secrets stored in GitHub.
- Validation should fail safely and provide useful user feedback.
- Configuration should be maintainable and clearly documented.
- Runtime configuration should be verified in ServiceNow before being labeled tested.
- The project should support repeatable testing and deployment.

## Acceptance Criteria

A runtime implementation is considered complete when the following have been demonstrated in ServiceNow:

- Valid requests can be submitted.
- Invalid requests are prevented or corrected with clear feedback.
- Approval routing works for applicable requests.
- Both approval and rejection paths behave correctly.
- Fulfillment tasks are created and assigned correctly.
- Engineers can complete fulfillment work.
- Parent request state reaches the correct final state.
- Required notifications are delivered.
- Unauthorized actions are denied according to the configured security model.
- Reports/dashboard provide useful operational visibility.
- End-to-end tests pass.

## Verification Boundary

This repository contains the project design and source artifacts. Runtime claims, screenshots, and exported Update Sets must be based on actual execution in a ServiceNow instance.
