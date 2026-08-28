# Catalog UI Behavior

## Dynamic Field Rules

| Condition | Action |
|---|---|
| Request type requires a device/CI | Show Device and make it required when appropriate |
| Request type does not require a device/CI | Hide Device and clear its value |
| Access level is Elevated or Administrative | Keep approval requirement active |
| Priority is Critical or High | Apply the configured approval route |

## Client-Side Responsibilities

Use Catalog Client Scripts and UI Policies for immediate user experience improvements such as visibility, mandatory state, and helpful validation.

## Server-Side Responsibilities

Do not rely exclusively on client-side controls for security or critical data integrity. Server-side validation remains authoritative.

## Naming Guidance

Use predictable names such as:

- `Network Request - Device Visibility`
- `Network Request - Required Justification`
- `Network Request - Access Level Rules`

Exact record names should match the final implementation.
