/*
 * ServiceNow record type: Catalog Client Script
 * Name: Network Request - Validate Business Justification
 * Type: onSubmit
 * Purpose: Prevent submission when the business justification is empty.
 *
 * Configure the field name to match the actual catalog variable name.
 */
function onSubmit() {
    var justification = g_form.getValue('business_justification');

    if (!justification || justification.trim() === '') {
        g_form.addErrorMessage('Business justification is required for a network request.');
        return false;
    }

    return true;
}
