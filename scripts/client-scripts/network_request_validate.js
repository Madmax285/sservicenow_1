/*
 * ServiceNow Catalog Client Script
 * Name: Network Request - Validate Form
 * Type: onSubmit
 * Applies to: Network Request catalog item
 */
function onSubmit() {
    var requestType = g_form.getValue('request_type');
    var justification = g_form.getValue('business_justification');
    var priority = g_form.getValue('priority');

    if (!requestType) {
        g_form.addErrorMessage('Select a request type.');
        return false;
    }

    if (!justification || justification.trim() === '') {
        g_form.addErrorMessage('Enter a business justification.');
        return false;
    }

    if (!priority) {
        g_form.addErrorMessage('Select a priority.');
        return false;
    }

    return true;
}
