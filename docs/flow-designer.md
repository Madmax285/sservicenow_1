# Flow Designer Automation

## Flow Name

**Automated Network Request Fulfillment**

## Trigger

Network Request is submitted/created with the required request information.

## Flow

```text
Trigger
  |
  v
Validate request
  |
  v
Determine approval requirement
  |
  +------ No approval ------> Create fulfillment task
  |
  v
Ask for approval
  |
  +------ Rejected ------> Set Rejected + Notify requester
  |
  v
Approved
  |
  v
Set state = In Fulfillment
  |
  v
Create fulfillment task
  |
  v
Assign to Network Team
  |
  v
Wait for task completion
  |
  v
Set request = Completed
  |
  v
Notify requester
```

## Approval Routing

Approval can be determined from business rules such as:

- Administrative or elevated access requires approval.
- Critical/high-priority changes may require additional review.
- Standard low-risk requests may use a simplified approval path.

The exact routing rules should be configured consistently in the target ServiceNow instance.

## Fulfillment

The flow should create or route a fulfillment task containing:

- Short description
- Request reference
- Requested for
- Request type
- Device/CI when applicable
- Priority
- Business justification
- Assignment group

## Rejection Path

When approval is rejected:

1. Update request approval outcome.
2. Set request state to **Rejected**.
3. Record an appropriate work note where required.
4. Notify the requester.
5. Do not create the normal fulfillment task.

## Completion Path

When the fulfillment task is completed:

1. Confirm the task has reached its completion state.
2. Update the parent request to **Completed**.
3. Record the completion timestamp.
4. Send the completion notification.

## Implementation Note

This document describes the intended build. Runtime trigger/action names and data pills must be confirmed after implementation in ServiceNow.
