/*
 * ServiceNow Business Rule
 * Name: Network Request - Required Data Validation
 * Table: Network Request
 * When: before
 * Insert: true
 * Update: true
 */
(function executeRule(current, previous) {
    var missing = [];

    if (gs.nil(current.request_type)) {
        missing.push('Request type');
    }
    if (gs.nil(current.requested_for)) {
        missing.push('Requested for');
    }
    if (gs.nil(current.business_justification)) {
        missing.push('Business justification');
    }
    if (gs.nil(current.priority)) {
        missing.push('Priority');
    }

    if (missing.length > 0) {
        gs.addErrorMessage('Missing required data: ' + missing.join(', ') + '.');
        current.setAbortAction(true);
    }
})(current, previous);
