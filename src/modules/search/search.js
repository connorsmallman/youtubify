var _ = require("underscore");
var Layout = require("./layout");
var Collection = require("./collection");
var serialize = require("../../helpers/serialize");
var Backbone = require("backbone");

module.exports = function (settings) {
	var module = {};

	module.app = settings.app;

	// module.clearSearch = function () {
	// 	collection.reset();
	// };

	module.search = function (options, callback) {
		var fields = options.fields || {};
		var query = "?" + serialize(fields);

		if(options.key){
			query+= "&key=" + options.key;
		}

		var url = options.url + query;

		var collection = new Collection([], { url: url });

		collection.fetch().done(function () {
			callback(collection);
		});
	};

	module.load = function (options) {
		var view = new Layout();

		options.region.show(view);
	};

	return module;
}