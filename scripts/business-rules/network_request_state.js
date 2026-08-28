/*
 * ServiceNow record type: Business Rule
 * Name: Network Request - Required Data Validation
 * Timing: before insert/update
 * Purpose: Enforce critical request data on the server.
 *
 * Replace field names with the final dictionary names used by the instance.
 */
(function executeRule(current, previous /* null when async */) {
    if (gs.nil(current.request_type)) {
        gs.addErrorMessage('Request type is required.');
        current.setAbortAction(true);
        return;
    }

    if (gs.nil(current.business_justification)) {
        gs.addErrorMessage('Business justification is required.');
        current.setAbortAction(true);
        return;
    }

    if (gs.nil(current.priority)) {
        gs.addErrorMessage('Priority is required.');
        current.setAbortAction(true);
    }
})(current, previous);
