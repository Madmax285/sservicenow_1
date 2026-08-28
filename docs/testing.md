# Testing Plan

## Requester Test

- Open the Network Request catalog item.
- Verify required fields and dynamic behavior.
- Submit a valid request.
- Confirm the request is created successfully.

## Approval Test

- Confirm the correct approver is selected according to the implemented rules.
- Confirm the approval notification is generated.
- Test both approval and rejection paths.

## Fulfillment Test

- Approve a request.
- Confirm the appropriate Network Team receives the fulfillment task.
- Update the task, add work notes, and complete it.
- Verify the parent request follows the configured lifecycle.

## Notification Test

Verify requester and approver notifications at the configured lifecycle stages.

## Security Test

Verify requester, approver, network engineer, and administrator permissions using the implemented roles, groups, ACLs, and catalog access controls.

## Evidence

Screenshots and exported configuration will be added under `screenshots/` and `update-set/` after each feature is implemented and tested.
