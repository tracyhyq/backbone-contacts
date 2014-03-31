define([
	'backbone',
	'underscore',
	'jquery',
	'views/ContactItemView',
	'models/Contact'
], function(Backbone, _, $, ContactItemView, Contact){
	// 左边的侧边条视图
	var SidebarView = Backbone.View.extend({
	    className: 'sidebar',
	    template: _.template($('#tpl-sidebar').html()),
	    events: {
		    'click footer button': 'create',
		    'click input': 'filter',
		    'keyup input': 'filter'
	    },

	    initialize: function() {
		    _.bindAll(this, 'create', 'filter');
		    this.model.bind('reset', this.renderAll, this);
		    this.model.bind('add', this.add, this);
		    this.model.bind('remove', this.remove, this);
	    },

	    // 渲染联系人列表
	    render: function() {
		    $(this.el).html(this.template());
		    this.renderAll();
		    return this;
	    },

	    renderAll: function() {
		    this.$(".items").empty();
		    this.model.each(this.renderOne, this);
		    this.filter();
	    },

	    renderOne: function(contact) {
		    var view = new ContactItemView({
		        model: contact
		    });
		    this.$(".items").append(view.render().el);
	    },

	    create: function() {
		    var contact = new Contact();
		    this.model.add(contact);
		    Backbone.history.navigate('contacts/' + contact.cid + '/edit', {
		        trigger: true
		    });
	    },

	    filter: function() {
		    var query = $('input', this.el).val();
		    this.model.each(function(contact, element, index, list) {
		      contact.view.$el.toggle(contact.filter(query));
		    });
	    },

	    active: function(item) {
		    if (this.activeItem) this.activeItem.view.deactive();
		    this.activeItem = item;
		    if (this.activeItem) this.activeItem.view.active();
	    },

	    add: function(contact) {
	    	this.renderOne(contact);
	    },

	    remove: function(contact) {
	    	console.log(contact);
	    }
	});

	return SidebarView;
});