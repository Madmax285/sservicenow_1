# Security Model

## Personas

| Persona | Intended Access |
|---|---|
| Requester | Submit and view permitted network requests |
| Approver | Review and approve/reject assigned requests |
| Network Engineer | Work assigned fulfillment tasks |
| Administrator | Configure and administer the application |

## Security Controls

- Use roles to separate requester, approval, fulfillment, and administrative capabilities.
- Use groups to control assignment and operational ownership.
- Use ACLs for server-side record/field access where required.
- Use catalog access controls/user criteria to control who can request the service.
- Keep administrative permissions separate from normal fulfillment permissions.
- Do not expose credentials, tokens, passwords, or unnecessary personal data.

## Least Privilege

Users should receive only the permissions required for their persona. Network engineers should not automatically receive administrative configuration privileges, and requesters should not be able to modify approval or fulfillment controls.

## Security Test Scenarios

1. Requester can submit a request.
2. Requester cannot approve their own request unless explicitly permitted by the designed business rule.
3. Approver can act on assigned approval records.
4. Network Engineer can update permitted fulfillment fields.
5. Network Engineer cannot modify restricted application configuration.
6. Unauthorized users cannot access restricted records/actions.
7. Administrative functions remain restricted to administrators.

## Verification Boundary

These are the security design requirements. Actual ACL names, roles, groups, user criteria, and test outcomes must be captured from the target ServiceNow instance after implementation.
