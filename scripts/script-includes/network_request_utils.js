/*
 * ServiceNow record type: Script Include
 * Name: NetworkRequestUtils
 * Purpose: Centralize reusable routing decisions for network requests.
 *
 * Keep instance-specific group sys_ids out of source control. Resolve groups
 * by approved configuration rather than hard-coded credentials or secrets.
 */
var NetworkRequestUtils = Class.create();
NetworkRequestUtils.prototype = {
    initialize: function() {},

    requiresApproval: function(requestType, accessLevel, priority) {
        if (accessLevel === 'administrative' || accessLevel === 'elevated') {
            return true;
        }

        if (priority === 'critical' || priority === 'high') {
            return true;
        }

        return requestType === 'firewall_change';
    },

    type: 'NetworkRequestUtils'
};
