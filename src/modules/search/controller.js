var Marionette = require('backbone.marionette');
var $ = require('jquery');
var SearchView = require('./views/searchView');
var Collection = require('./collection');

var serialize = require('../../helpers/serialize');

module.exports = Marionette.Object.extend({
	initialize: function (options) {
		var self = this;
		var initialSearchValue = "";

		this.module = options.module;
		this.module.views = {};

		var view = new SearchView();

		this.module.region.show(view);
	},
	setupSearch: function (settings) {
		var url = settings.url || "";
		var options = settings.options || {};
		var searchField = settings.searchField || "";
		var query = "?" + serialize(options) + "&" + searchField + "=";

		this.url = (url + query) || "";
	},
	search: function (query, callback) {
		var url = this.url + encodeURI(query);
		var collection = new Collection([], { url: url });

		collection.fetch().done(function () {
			callback(collection);
		});
	}
});