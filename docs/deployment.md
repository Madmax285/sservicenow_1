# Deployment Guide

## Deployment Strategy

Use a dedicated ServiceNow Update Set for the application configuration.

## Recommended Build Sequence

1. Create application scope/table and dictionary fields.
2. Create roles and groups.
3. Configure ACLs and catalog access.
4. Create the Network Request catalog item and variables.
5. Add UI Policies and Catalog Client Scripts.
6. Configure approval routing.
7. Build the Flow Designer automation.
8. Configure fulfillment task behavior.
9. Configure notifications.
10. Configure reports/dashboard.
11. Execute the test suite.
12. Review the Update Set for completeness.
13. Export the tested Update Set XML.
14. Store the exported artifact in `update-set/` only after reviewing it for secrets or unrelated instance data.

## Deployment Checklist

- [ ] Update Set contains only project configuration
- [ ] No credentials/secrets are present
- [ ] Application scope is correct
- [ ] Roles/groups are included
- [ ] Catalog item and variables are included
- [ ] Client scripts/UI policies are included
- [ ] Flow configuration is included
- [ ] Notifications are included
- [ ] ACLs/security configuration is included
- [ ] Reports/dashboard configuration is included
- [ ] Test cases pass
- [ ] Update Set is exported and reviewed

## Rollback

Before production deployment, retain a known-good baseline and document the Update Set identifier. If a deployment introduces unexpected behavior, follow the organization's approved ServiceNow rollback/recovery process rather than deleting records manually.

## Important

This repository does not contain a fabricated Update Set. The actual XML should come from the ServiceNow instance after the configuration has been implemented and tested.
