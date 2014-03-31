define([
	'underscore',
	'backbone',
	'jquery',
	'views/SidebarView',
	'views/MainView'
], function(_, Backbone, $ ,SidebarView, MainView){
	// 整个页面的视图，管理SiderbarView和MainView两个子视图
	var AppView = Backbone.View.extend({

		className: 'contacts',

		initialize: function() {
		    this.sidebar = new SidebarView({
		        model: this.model
		    });
		    this.main = new MainView();
		    this.vdiv = $('<div />').addClass('vdivide');
		    this.model.fetch();
		    this.render();
		},

		render: function() {
		    this.$el.append(this.sidebar.render().el);
		    this.$el.append(this.vdiv);
		    this.$el.append(this.main.render().el);
		    $('#article').append(this.el);
		    return this;
		},

		show: function(item) {
		    this.sidebar.active(item);
		    this.main.show(item);
		},

		edit: function(item) {
		    this.sidebar.active(item);
		    this.main.edit(item);
		}
	});

	return AppView;
});