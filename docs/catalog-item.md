# Network Request Catalog Item

## Purpose

Provide a structured Service Catalog entry for employees who need network access, connectivity, firewall, VPN, or device-configuration services.

## Variables

| Variable | Type | Required | Notes |
|---|---|---:|---|
| Request Type | Choice | Yes | Controls the type of network service |
| Access Level | Choice | Yes | Standard, Elevated, or Administrative |
| Device | Reference | Conditional | Display when a device/CI is relevant |
| Priority | Choice | Yes | Critical, High, Moderate, Low |
| Business Justification | Multi-line text | Yes | Explain the business need |
| Requested For | Reference: User | Yes | Person receiving the service |

## Dynamic Behavior

Recommended behavior:

- Show **Device** when the selected request type requires a specific device or CI.
- Keep **Business Justification** mandatory for every request.
- Keep **Access Level** mandatory for access-related requests.
- Prevent submission when required information is missing.
- Use clear help text so requesters understand what information is expected.

## Validation

Client-side validation should provide immediate feedback, while server-side/business-rule validation should remain the authoritative control for critical data requirements.

## Catalog UX

The item should have:

- Clear title and description
- Logical variable order
- Helpful variable labels
- Appropriate default values where safe
- User-friendly error messages
- No secrets or sensitive credentials collected through the form

## Implementation Evidence

Runtime screenshots and exact ServiceNow record identifiers should be added only after the catalog item has been created and tested in a ServiceNow instance.
