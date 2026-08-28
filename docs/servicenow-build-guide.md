# ServiceNow Build Guide

This is the implementation sequence for the application.

## 1. Create application

Create a scoped application named **Network Request Management**.

Suggested scope prefix: `x_mad_netreq`.

## 2. Create groups

Create:

- Network Team
- Network Approvers

Add appropriate test users to each group.

## 3. Create roles

Suggested roles:

- `x_mad_netreq.requester`
- `x_mad_netreq.approver`
- `x_mad_netreq.network_engineer`
- `x_mad_netreq.admin`

Assign roles using least privilege.

## 4. Create Network Request table

Create the fields documented in `data-model.md`. Use references to existing User, Group, and Configuration Item data where appropriate.

## 5. Create catalog item

Create **Network Request** and its variables using `catalog-item.md`.

## 6. Add client logic

Create the Catalog Client Scripts from `scripts/client-scripts/` and update variable names to match the final catalog item.

## 7. Add server validation

Create the Business Rule from `scripts/business-rules/network_request_validation.js`.

## 8. Configure UI policies

Implement the policies documented in `scripts/ui-policies/README.md`.

## 9. Build Flow Designer automation

Follow `flow-designer.md`. Keep orchestration in Flow Designer and reusable logic in Script Includes.

## 10. Configure notifications

Create the notification records described in `scripts/notifications/README.md`.

## 11. Security

Create ACLs so users can access only the records/actions required by their role. Do not grant broad admin access as a shortcut.

## 12. Reporting

Build the reports and dashboard described in `reporting.md`.

## 13. Test

Run every case in `test-cases.md`. Record actual outcomes and screenshots.

## 14. Export

After all tests pass, capture the real Update Set from the ServiceNow instance and place the export in `update-set/`. Do not replace a real export with the example template.
