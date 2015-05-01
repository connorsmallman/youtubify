'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var SearchModule = require('./modules/search/search');

var videoTemplate = require("./modules/videos/video-template.hbs");

var YouTubeApp = new Marionette.Application();

var Controller = Marionette.Object.extend({
	searchResults: function (method, results){
		this.trigger("search:results", results);
	}
});

var RootView = Marionette.LayoutView.extend({
	el: 'body',
	regions: {
        search: "#searchBarContainer",
        results: "#resultsContainer"
    }
});

var VideoView = Marionette.ItemView.extend({
	tagName: "div",
	className: "video",
	template: videoTemplate
});

var ResultsView = Marionette.CollectionView.extend({
	className: "results",
	childView: VideoView
});

var ResultsModel = Backbone.Model.extend({
	idAttribute: "model_id"
});
var ResultsCollection = Backbone.Collection.extend({
	model: ResultsModel
});

YouTubeApp.rootView = new RootView();
YouTubeApp.controller = new Controller();

YouTubeApp.on("before:start", function () {
	var search = new SearchModule();

	search.load({
		region: YouTubeApp.rootView.search,
		url: "api/videos/search",
		options: {
			part: "snippet",
			maxResults: "10",
		},
		searchField: "q"
	});

	search.controller.on("search:results", function (results) {
		console.log(results);
		YouTubeApp.controller.searchResults("results", results);
	});

	search.controller.on("state:search", function () {
		YouTubeApp.controller.searchResults("results", "");
	});
});

YouTubeApp.controller.on("search:results", function (results){
	var collection = new ResultsCollection(results);

	console.log(collection);

	var view = new ResultsView({
		collection: collection
	});

	YouTubeApp.rootView.results.show(view);
});

YouTubeApp.start();