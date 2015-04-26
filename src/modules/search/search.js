var ResultsCollection = require('./models/resultsCollection');
var SearchView = require('./views/searchView');
var SearchController = require('./controller');
var SearchRouter = require('./controller');
var Backbone = require('backbone');

var serialize = require("../../helpers/serialize");

module.exports = function () {
	var module = {};

	module.load = function (settings) {
		var view = new SearchView();
		var region = settings.region;

		region.show(view);
	};

	module.setSearchSettings = function (settings) {
		var url = settings.url || "";
		var options = settings.options || {};
		var searchField = settings.searchField || "";
		var query = "?" + serialize(options) + "&" + searchField + "=";

		this.url = (url + query) || "";
	};

	module.search = function (query, callback) {
		var url = this.url + encodeURI(query);
		var collection = new ResultsCollection([], { url: url });

		collection.fetch().done(function () {
			callback(collection);
		});
	}

	return module;
}