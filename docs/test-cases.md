# Test Cases

Runtime status remains **Not Run** until the cases are executed in the target ServiceNow instance.

| ID | Scenario | Expected Result | Status |
|---|---|---|---|
| TC-01 | Submit valid network request | Request is created successfully | Not Run |
| TC-02 | Submit without business justification | Submission is blocked with clear validation | Not Run |
| TC-03 | Select request type requiring device | Device field becomes visible | Not Run |
| TC-04 | Select request type not requiring device | Device field is hidden/cleared | Not Run |
| TC-05 | High/elevated request | Approval path is initiated | Not Run |
| TC-06 | Approve request | Fulfillment work is created/routed | Not Run |
| TC-07 | Reject request | Request is rejected and requester notified | Not Run |
| TC-08 | Network engineer processes task | Work notes/state can be updated as permitted | Not Run |
| TC-09 | Complete fulfillment | Parent request reaches Completed | Not Run |
| TC-10 | Notification lifecycle | Required recipients receive notifications | Not Run |
| TC-11 | Unauthorized access | Restricted operation is denied | Not Run |
| TC-12 | Reporting | Request/task data appears in required reports | Not Run |
| TC-13 | Critical/high priority request | Priority is retained and routed according to configuration | Not Run |
| TC-14 | Cancelled request | Cancellation follows configured lifecycle | Not Run |

## Evidence

For every executed test, record:

- Test case ID
- Date/time
- Test user/persona
- Request number or task number where appropriate
- Expected result
- Actual result
- Pass/Fail
- Screenshot or other evidence
- Notes on defects and retesting
