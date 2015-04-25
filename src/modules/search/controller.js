var Marionette = require('backbone.marionette');
var SearchBarView = require('./view');
var Collection = require('./collection');

var serialize = require('../../helpers/serialize');

module.exports = Marionette.Object.extend({
	initialize: function (options) {
		this.module = options.module;
	},
	loadSearchBar: function (container) {
		var view = new SearchBarView();

		container.show(view);
	},
	setupSearch: function (settings) {
		this.options = settings.options || {};
		this.searchField = settings.searchField || "";
		this.query = "?" + serialize(this.options) + "&" + this.searchField + "=";
		this.url = settings.url + this.query;

		console.log(this.url);
	},
	search: function (query, callback) {
		var url = this.url + encodeURI(query);
		var collection = new Collection([], { url: url });

		collection.fetch().done(function () {
			callback(collection);
		});
	}
});