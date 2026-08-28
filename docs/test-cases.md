# Test Cases

These test cases will be executed against the implemented ServiceNow instance.

| ID | Scenario | Expected Result | Status |
|---|---|---|---|
| TC-01 | Submit a valid network request | Request is created successfully | Not Run |
| TC-02 | Submit with required information missing | Validation prevents invalid submission | Not Run |
| TC-03 | Approval required | Correct approver receives approval | Not Run |
| TC-04 | Approve request | Fulfillment is initiated for Network Team | Not Run |
| TC-05 | Reject request | Requester is notified and fulfillment is not created | Not Run |
| TC-06 | Network engineer processes task | Work notes and state are updated | Not Run |
| TC-07 | Fulfillment completed | Request lifecycle reaches the required completed state | Not Run |
| TC-08 | Notification lifecycle | Requester receives required notifications | Not Run |
| TC-09 | Unauthorized access | Access is denied according to configured security | Not Run |
| TC-10 | Reporting | Requests/tasks are visible in required reports or dashboards | Not Run |

Test results and screenshots will be added after execution.
