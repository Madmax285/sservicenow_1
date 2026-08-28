/*
 * ServiceNow Script Include
 * Name: NetworkRequestUtils
 * Client callable: false
 * Purpose: Keep reusable approval and fulfillment helpers in one place.
 */
var NetworkRequestUtils = Class.create();
NetworkRequestUtils.prototype = {
    initialize: function() {},

    getNetworkTeam: function() {
        var group = new GlideRecord('sys_user_group');
        group.addQuery('name', 'Network Team');
        group.setLimit(1);
        group.query();
        return group.next() ? group.getUniqueValue() : '';
    },

    requiresApproval: function(requestGr) {
        var accessLevel = requestGr.getValue('access_level');
        var priority = requestGr.getValue('priority');
        var requestType = requestGr.getValue('request_type');

        return accessLevel === 'elevated' ||
            accessLevel === 'administrative' ||
            requestType === 'firewall_change' ||
            priority === 'critical';
    },

    isHighRisk: function(requestGr) {
        return requestGr.getValue('priority') === 'critical' ||
            requestGr.getValue('access_level') === 'administrative';
    },

    type: 'NetworkRequestUtils'
};
