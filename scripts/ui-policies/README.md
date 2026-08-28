# Catalog UI Policies

## Network Request - Dynamic Fields

Create Catalog UI Policies on the Network Request catalog item to control field visibility and mandatory state.

### Recommended policies

1. **Access request fields**
   - Condition: Request Type is Network Access or VPN Access
   - Actions: show Access Level; make Access Level mandatory

2. **Device-related request fields**
   - Condition: Request Type is Device Configuration, Firewall Change, or Network Connection
   - Actions: show Device; make Device mandatory where a CI is required

3. **Business justification**
   - Condition: always applicable
   - Action: make Business Justification mandatory

Use Catalog UI Policies for declarative UI behavior. Keep critical server-side validation in a Business Rule.
