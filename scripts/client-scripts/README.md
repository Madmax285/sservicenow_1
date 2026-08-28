# Catalog Client Scripts

Recommended dynamic behavior for the Network Request catalog item:

- Show `device` when request type is `firewall_change` or `device_configuration`.
- Keep required fields enforced by the catalog configuration.
- Validate business justification before submission.
- Avoid trusting client-side validation as the only security control; repeat important validation server-side.

The final variable names must match the variables actually created in the ServiceNow catalog item.
