define([
	'backbone',
	'jquery'
], function(Backbone, $){
	// 显示选择的联系人详细信息
	var ShowView = Backbone.View.extend({
	    className: 'show',
	    template: _.template($('#tpl-show').html()),

	    events: {
	    	'click .edit': 'edit'
	    },

	    initialize: function() {
	    	this.appRouter = Backbone.history;
	   		_.bindAll(this, 'edit');
	    },

	    render: function() {
		    if (this.item) this.$el.html(this.template(this.item.toJSON()));
		    return this;
	    },

	    change: function(item) {
		    this.item = item;
		    this.render();
	    },

	    edit: function() {
		    if (this.item) this.appRouter.navigate('contacts/' + this.item.cid + '/edit', {
		      trigger: true
		    });
	    }
	});

	return ShowView;
});