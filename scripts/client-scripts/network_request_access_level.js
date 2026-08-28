/*
 * ServiceNow Catalog Client Script
 * Name: Network Request - Access Level Visibility
 * Type: onChange
 * Variable: request_type
 */
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }

    var accessRequired = ['network_access', 'vpn_access'].indexOf(newValue) !== -1;
    g_form.setDisplay('access_level', accessRequired);

    if (!accessRequired) {
        g_form.clearValue('access_level');
    }
}
