'use strict';

var Marionette = require('backbone.marionette');

var SearchController = Marionette.Object.extend({
	searchQuery: function (value) {
		this.trigger("search:query", value);
	},
	sendSearchResults: function (results) {
		this.trigger("search:results", results);
	},
	setSearchState: function (state) {
		if(state === "empty") {
			this.trigger("search:empty");
		}
	}
});

module.exports = new SearchController();