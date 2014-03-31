require.config({
	paths: {
		'underscore': 'lib/underscore',
		'jquery': 'lib/jquery',
		'backbone': 'lib/backbone',
		'localStorage': 'lib/backbone-localstorage'
	},
	shim: {
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		},
		'localStorage': {
			deps: ['underscore', 'backbone'],
			exports: 'Store'
		}
	}
});

require([
	'underscore',
	'jquery',
	'backbone',
	'localStorage',
	'app'
], function(_, $, Backbone, Store, app){
	app.init();
});