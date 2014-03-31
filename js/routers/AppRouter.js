define([
	'backbone',
	'views/AppView',
	'collection/Contacts'
], function(Backbone, AppView, Contacts){
	var AppRouter = Backbone.Router.extend({
		initialize: function(){
			var me = this;
			me.contacts = new Contacts();
			me.appView = new AppView({
				model: me.contacts
			});
			Backbone.history.start();
		},
		routes: {
			'': 'show',
			'contacts/:id': 'show',
			'contacts/:id/edit': 'edit'
		},

		show: function(id) {
			var me = this;
			if (id != undefined) {
				me.appView.show(me.getContact(id));
			} else {
				me.appView.show(me.contacts.first());
			}
		},

		edit: function(id) {
			var me = this;
			me.appView.edit(me.getContact(id));
		},

		getContact: function(id) {
			var me = this;
			return me.contacts.getByCid(id);
		}
	});

	return AppRouter;
});