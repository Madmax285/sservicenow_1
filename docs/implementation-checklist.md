# Implementation Checklist

This checklist separates **repository preparation** from **ServiceNow runtime verification**.

## Phase 1 — Analysis & Design

- [x] Business objective defined
- [x] Functional scope defined
- [x] Data model documented
- [x] Solution architecture documented
- [x] End-to-end lifecycle defined

## Phase 2 — Repository Build

- [x] Professional README
- [x] Secure `.gitignore`
- [x] Catalog design
- [x] Flow Designer design
- [x] Security model
- [x] Notification design
- [x] Reporting design
- [x] Deployment guide
- [x] Testing plan
- [x] Acceptance test cases
- [x] Client-side source artifacts
- [x] Server-side validation source artifact
- [x] Reusable Script Include source artifact

## Phase 3 — ServiceNow Runtime Implementation

- [ ] Create application/table foundation
- [ ] Create fields and choices
- [ ] Create roles and groups
- [ ] Configure ACLs
- [ ] Create catalog item and variables
- [ ] Configure UI Policies
- [ ] Configure Catalog Client Scripts
- [ ] Configure server-side validation
- [ ] Configure approval routing
- [ ] Build Flow Designer automation
- [ ] Configure fulfillment task behavior
- [ ] Configure notifications
- [ ] Configure reports/dashboard

## Phase 4 — Runtime Testing

- [ ] Catalog happy path
- [ ] Required-field validation
- [ ] Dynamic field behavior
- [ ] Approval path
- [ ] Rejection path
- [ ] Fulfillment path
- [ ] Completion path
- [ ] Notification checks
- [ ] Security/ACL checks
- [ ] Reporting checks
- [ ] End-to-end test

## Phase 5 — Evidence & Deployment

- [ ] Add real ServiceNow screenshots
- [ ] Record actual test results
- [ ] Export tested Update Set
- [ ] Review Update Set for secrets/unrelated records
- [ ] Add deployment notes
- [ ] Prepare project demo
- [ ] Final GitHub review

> **Important:** Phase 3–5 items must not be marked complete merely because the source files exist. They require actual ServiceNow execution and verification.
