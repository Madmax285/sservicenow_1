# ServiceNow Notifications

Create these Email Notification records in the ServiceNow instance.

## 1. Network Request Submitted

**When:** request is created/submitted

**Recipients:** Requested for / requester

**Subject:** Network request ${number} submitted

## 2. Approval Requested

**When:** approval record is created or approval state changes to requested

**Recipients:** approver

**Subject:** Approval required for network request ${number}

## 3. Request Approved

**When:** approval outcome becomes approved

**Recipients:** requester

**Subject:** Network request ${number} approved

## 4. Request Rejected

**When:** approval outcome becomes rejected

**Recipients:** requester

**Subject:** Network request ${number} rejected

## 5. Fulfillment Assigned

**When:** assignment group / assignee is set for fulfillment

**Recipients:** Network Team / assigned engineer

**Subject:** Network request ${number} assigned for fulfillment

## 6. Fulfillment Completed

**When:** fulfillment task completes

**Recipients:** requester

**Subject:** Network request ${number} completed

Avoid credentials, tokens, secrets, or unnecessary sensitive information in notification content.
