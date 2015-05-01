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
		if(state === "search") {
			this.trigger("state:search");
		}
		else {
			this.trigger("state:searching");
		}
	}
});

module.exports = new SearchController();