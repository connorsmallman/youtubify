'use strict';

var SearchView = require('./views/searchView');
var Backbone = require('backbone');
var $ = require('jquery');

var searchContoller = require('./controller');
var serialize = require("../../helpers/serialize");
var searchController = require('./controller');

module.exports = function () {
	var module = {};

	module.load = function (settings) {
		var region = settings.region;
		var url = settings.url || "";
		var options = settings.options || {};
		var searchField = settings.searchField || "";
		var query = "?" + serialize(options) + "&" + searchField + "=";

		module.url = (url + query) || "";
		
		var searchView = new SearchView();

		region.show(searchView);
	};

	module.searchResults = function (callback) {
		console.log(module.url);
	}

	searchController.on("search:query", function (value){
		$.ajax({
		  url: module.url + value,
		}).done(function(results) {
			//need error handler
			console.log(results);
			searchController.sendSearchResults(results);
		});
	});

	module.controller = searchController;

	return module;
}