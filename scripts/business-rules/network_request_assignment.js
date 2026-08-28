/*
 * ServiceNow Business Rule
 * Name: Network Request - Assign Network Team
 * Table: Network Request
 * When: after
 * Insert: true
 * Update: true
 *
 * Assigns approved requests to the configured Network Team group.
 */
(function executeRule(current, previous) {
    if (current.approval.toString() !== 'approved') {
        return;
    }

    var group = new GlideRecord('sys_user_group');
    group.addQuery('name', 'Network Team');
    group.setLimit(1);
    group.query();

    if (group.next() && current.assignment_group != group.sys_id) {
        current.assignment_group = group.sys_id;
        current.state = 'in_fulfillment';
        current.update();
    }
})(current, previous);
