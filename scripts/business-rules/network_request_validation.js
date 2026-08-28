/*
 * Network Request server-side validation reference.
 * Configure as a Business Rule on the Network Request table.
 * Adapt field names only if the final table differs from the documented schema.
 */
(function executeRule(current, previous) {
    if (current.business_justification.nil()) {
        gs.addErrorMessage('Business justification is required.');
        current.setAbortAction(true);
        return;
    }

    if (current.request_type.nil()) {
        gs.addErrorMessage('Request type is required.');
        current.setAbortAction(true);
        return;
    }

    if (current.access_level.nil()) {
        gs.addErrorMessage('Access level is required.');
        current.setAbortAction(true);
        return;
    }
})(current, previous);
