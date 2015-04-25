var Layout = require("./layout");

module.exports = function (settings) {
	var module = {};
	var collection = {};

	module.app = settings.app;

	module.clearSearch = function () {
		collection.reset();
	};

	module.search = function () {
		
	};

	module.load = function (region) {
		var view = new Layout();

		region.show(view);
	};

	return module;
}