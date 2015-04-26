var _ = require('underscore');
var SearchCollection = require('./collection');
var SearchController = require('./controller');
var SearchRouter = require('./controller');
var Backbone = require('backbone');

var serialize = require("../../helpers/serialize");

module.exports = function (settings) {
	var module = {};

	module.app = settings.app;
	module.view = settings.view;

	module.collection = new SearchCollection();

	module.controller = new SearchController({
		module: module
	});

	module.router = new SearchRouter({
		module: module
	});

	return module;
}