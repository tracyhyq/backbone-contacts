define([
	'backbone',
	'jquery'
], function(Backbone, $){
	// 编辑选择的联系人
	var EditView = Backbone.View.extend({
	    className: 'edit',
	    template: _.template($('#tpl-edit').html()),

	    events: {
		    'submit form': 'submit',
		    'click .save': 'submit',
		    'click .delete': 'remove'
	    },

	    initialize: function() {
	    	this.appRouter = Backbone.history;
	    	_.bindAll(this, 'submit', 'remove');
	    },

	    render: function() {
		    if (this.item) this.$el.html(this.template(this.item.toJSON()));
		    return this;
	    },

	    change: function(item) {
		    this.item = item;
		    this.render();
	    },

	    submit: function() {
		    this.item.set(this.form());
		    this.item.save();
		    this.appRouter.navigate('contacts/' + this.item.cid, {
		      trigger: true
		    });
		    return false;
	    },

	    form: function() {
		    return {
		      name: this.$('form [name="name"]').val(),
		      email: this.$('form [name="email"]').val()
		    };
	    },

	    remove: function() {
		    this.item.destroy();
		    this.item = null;
		    this.appRouter.navigate('', {
		      trigger: true
		    });
	    }
	});

	return EditView;
});