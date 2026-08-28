# Stakeholders

| Persona | Responsibility | Main ServiceNow interaction |
|---|---|---|
| Requester | Submit and track a network request | Service Catalog / Service Portal |
| Approver | Review and approve or reject requests | Approval records / notifications |
| Network Engineer | Fulfill approved requests | Network fulfillment task |
| Network Team Lead | Monitor workload and assignment | Task lists / reports |
| ServiceNow Administrator | Configure users, groups, roles, ACLs, catalog, and platform settings | Administration |
| Developer | Implement client logic, server logic, flows, and notifications | Development/configuration |
| Service Owner | Own the service and approve higher-risk changes | Approvals / reporting |

## Responsibility Flow

```text
Requester -> submits request
Approver -> authorizes request
Network Engineer -> performs work
Team Lead -> monitors fulfillment
Administrator/Developer -> maintains platform solution
Service Owner -> governs service/risk decisions
```

This project keeps responsibilities separate so that request submission, approval, fulfillment, and administration can be controlled independently.
