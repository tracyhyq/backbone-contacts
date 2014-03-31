define([
	'backbone',
	'jquery',
	'views/EditView',
	'views/ShowView'
], function(Backbone, $, EditView, ShowView){
	// 主视图，显示和编辑联系人
	var MainView = Backbone.View.extend({
	    className: 'main stack',
	    initialize: function() {
		    this.editView = new EditView();
		    this.showView = new ShowView();
	    },

	    render: function() {
		    this.$el.append(this.showView.render().el);
		    this.$el.append(this.editView.render().el);
		    return this;
	    },

	    edit: function(item) {
		    this.showView.$el.removeClass('active');
		    this.editView.$el.addClass('active');
		    this.editView.change(item);
	    },

	    show: function(item) {
		    this.editView.$el.removeClass('active');
		    this.showView.$el.addClass('active');
		    this.showView.change(item);
	    }
	});

	return MainView;
});