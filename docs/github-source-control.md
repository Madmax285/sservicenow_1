# GitHub Source-Control Procedure

## Repository

`Madmax285/sservicenow_1`

## ServiceNow application

- Name: Automated Network Request Management
- Scope: `x_2088382_automa_0`

## Safe synchronization sequence

1. Verify the ServiceNow application builds without diagnostics.
2. Create/verify a GitHub credential in ServiceNow using a personal access token stored only in the credential record.
3. Link the ServiceNow application to the intended GitHub repository using the ServiceNow source-control feature.
4. Pull/clone only when the repository does not contain conflicting application source.
5. Commit the ServiceNow application from ServiceNow Studio.
6. Push the commit to the selected branch.
7. Verify the resulting commit and file tree on GitHub.

## Important

Do not paste a GitHub token into README files, scripts, screenshots, chat messages, or source files. Do not use a personal token as application data. If the repository already contains unrelated documentation, use a dedicated repository for the ServiceNow application source rather than overwriting unrelated content.
