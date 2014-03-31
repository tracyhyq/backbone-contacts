define([
	'backbone',
	'localStorage',
	'models/Contact'
], function(Backbone, Store, Contact){
	var Contacts = Backbone.Collection.extend({
	    model: Contact,
	    localStorage: new Store('my-contacts')
	});

	return Contacts;
});