define([
	'backbone',
	'jquery'
], function(Backbone, $){
	// 单个联系人视图
	var ContactItemView = Backbone.View.extend({
	    className: 'item',
	    template: _.template($('#tpl-item').html()),
	    events: {
	    	'click': 'select'
	    },

	    initialize: function() {
	    	this.appRouter = Backbone.history;
		    _.bindAll(this, 'select');
		    this.model.bind('reset', this.render, this);
		    this.model.bind('change', this.render, this);
		    this.model.bind('destroy', this.remove, this);
		    if (this.model.view) this.model.view.remove();
		    this.model.view = this;
	    },

	    // 渲染联系人
	    render: function() {
		    this.$el.html(this.template(this.model.toJSON()));
		    return this;
	    },

	    select: function() {
		    this.appRouter.navigate('contacts/' + this.model.cid, {
		        trigger: true
		    });
	    },

	    active: function() {
	    	this.$el.addClass('active');
	    },
	  
	    deactive: function() {
	    	this.$el.removeClass('active');
	    }
	});

	return ContactItemView;
})