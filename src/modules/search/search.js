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

	module.search = function (params, callback) {
		var fields = params.fields || {};
		var query = "?" + serialize(fields);

		if(params.key){
			query+= "&key=" + params.key;
		}

		var url = params.url + query;

		var collection = new Collection([], {url: url});

		collection.fetch().then(function (results) {
			callback(results);
		});
	};

	module.load = function (region) {
		var view = new Layout();

		region.show(view);
	};

	return module;
}