var Marionette = require('backbone.marionette');
var $ = require('jquery');
var SearchBarView = require('./views/searchbar');
var SearchingView = require('./views/searching');
var Collection = require('./collection');

var serialize = require('../../helpers/serialize');

module.exports = Marionette.Object.extend({
	initialize: function (options) {
		var self = this;

		this.module = options.module;

		var view = new SearchBarView();

		this.module.view.show(view);

		view.on("searching:view:init", function (view) {
			var value = view.$("#search").val();

			self.loadSearchingState(value);
		});
	},
	setupSearch: function (settings) {
		var url = settings.url || "";
		var options = settings.options || {};
		var searchField = settings.searchField || "";
		var query = "?" + serialize(options) + "&" + searchField + "=";

		this.url = (url + query) || "";
	},
	loadSearchingState: function (value) {
		var view = new SearchingView({
			value: value
		});

		this.module.view.show(view);
	},
	search: function (query, callback) {
		var url = this.url + encodeURI(query);
		var collection = new Collection([], { url: url });

		collection.fetch().done(function () {
			callback(collection);
		});
	}
});