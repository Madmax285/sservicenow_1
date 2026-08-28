# Testing Plan

## Test Strategy

Testing covers form validation, dynamic behavior, approval routing, fulfillment, notifications, security, reporting, and end-to-end lifecycle behavior.

## Functional Tests

### Catalog

- Verify the catalog item is visible to an authorized requester.
- Verify required variables cannot be submitted empty.
- Verify the Device variable appears only for applicable request types.
- Verify invalid input is rejected with clear feedback.
- Verify a valid request creates the expected record.

### Approval

- Verify requests requiring approval reach the correct approval path.
- Verify the approval notification is generated.
- Verify approval continues to fulfillment.
- Verify rejection stops normal fulfillment and notifies the requester.

### Fulfillment

- Verify the correct assignment group receives the task.
- Verify the engineer can update permitted fields and work notes.
- Verify task completion updates the parent request correctly.

### Notifications

- Verify submission confirmation.
- Verify approval request.
- Verify approval outcome.
- Verify rejection.
- Verify fulfillment assignment where configured.
- Verify completion.

### Reporting

- Verify request records appear in operational reports.
- Verify filtering/grouping by state and priority.
- Verify fulfillment workload visibility.

## Security Tests

- Requester permissions
- Approver permissions
- Network Engineer permissions
- Administrator permissions
- Unauthorized access attempts
- Restricted field/action access

## End-to-End Test

```text
Submit -> Validate -> Approve -> Fulfill -> Complete -> Notify -> Report
```

Also execute:

```text
Submit -> Validate -> Reject -> Notify -> End
```

## Evidence Rules

Each passed runtime test should have an evidence record such as a screenshot, test result, or configuration reference. Do not mark a test as passed in GitHub until it has actually been executed in ServiceNow.
