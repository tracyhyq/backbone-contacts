define([
	'backbone'
], function(Backbone){
	var Contact = Backbone.Model.extend({
	    defaults: {
	    	name: '',
	    	email: ''
	    },

	    validate: function(attrs, options) {
	    	if (attrs.name == "") {
	        	return "用户名不能为空！";
	    	};
	    },

	    // 用户搜索的辅助方法
	    filter: function(query) {
	        if (typeof(query) === 'undefined' || query === null || query === '') return true;
	        query = query.toLowerCase();
	        return this.get('name').toLowerCase().indexOf(query) != -1 || this.get('email').toLowerCase().indexOf(query) != -1;
	    }
	});

	return Contact;
});