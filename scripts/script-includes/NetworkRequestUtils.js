var NetworkRequestUtils = Class.create();
NetworkRequestUtils.prototype = {
    initialize: function() {},

    requiresApproval: function(request) {
        if (!request)
            return false;

        var access = String(request.access_level);
        var priority = String(request.priority);

        return access === 'elevated' ||
               access === 'administrative' ||
               priority === 'high' ||
               priority === 'critical';
    },

    isNetworkEngineerAssigned: function(request) {
        return !!request && !gs.nil(request.assigned_to);
    },

    type: 'NetworkRequestUtils'
};
