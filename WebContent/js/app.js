/*global $ */
/*jshint unused:false */
var app = app || {};
var ENTER_KEY = 13;
var ESC_KEY = 27;

$(function () {
	'use strict';
	console.log('Createing the app instance.');
	
	// The Application
	// ---------------

	// Our overall **AppView** is the top-level piece of UI.
	app.AppView = Backbone.View.extend({

		// Instead of generating a new element, bind to the existing skeleton of
		// the App already present in the HTML.
		el: '#todoapp',

		hw_tpl: _.template('Hello World!'),
	
		// At initialization we bind to the relevant events on the `Todos`
		// collection, when items are added or changed. Kick things off by
		// loading any preexisting todos that might be saved in *localStorage*.
		initialize: function () {
			console.log('Createing the view instance.');
		},

		// Re-rendering the App just means refreshing the statistics -- the rest
		// of the app doesn't change.
		render: function () {
			this.$el.html(this.hw_tpl());
			console.log('render the view.');			
			return this;
		},

		// Generate the attributes for a new Todo item.
		newAttributes: function () {
			return {
				title: 'Not yet',
				completed: false
			};
		},

	});
	
	new app.AppView().render();
	
	console.log('The app view is initialized!');

});

