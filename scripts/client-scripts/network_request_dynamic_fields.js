/*
 * ServiceNow record type: Catalog Client Script
 * Name: Network Request - Dynamic Device Field
 * Type: onChange
 * Variable: request_type
 * Purpose: Show the Device variable only when the request type requires a device/CI.
 *
 * Adjust choice values and variable names to the final catalog configuration.
 */
function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }

    var requiresDevice = [
        'device_configuration',
        'firewall_change',
        'network_connection'
    ].indexOf(newValue) !== -1;

    g_form.setDisplay('device', requiresDevice);

    if (!requiresDevice) {
        g_form.clearValue('device');
    }
}
