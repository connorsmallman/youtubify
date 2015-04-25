var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var SearchModule = require('./modules/search/search');

var videoTemplate = require("./videos/video-template.hbs");

var YouTubeApp = new Marionette.Application();

var RootView = Marionette.LayoutView.extend({
	el: 'body',
	regions: {
        search: "#searchContainer",
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

var ResultsModel = Backbone.Model.extend({});

YouTubeApp.rootView = new RootView();

YouTubeApp.on("before:start", function () {
	var search = new SearchModule({
		app: YouTubeApp
	});

	search.controller.loadSearchBar(YouTubeApp.rootView.search);
	search.controller.setupSearch({
		url: "api/videos/search",
		options: {
			part: "snippet",
			maxResults: "10",
		},
		searchField: "q"
	});
	search.controller.search("funny", function (resultsCollection) {
		var view = new ResultsView({collection: resultsCollection});

		YouTubeApp.rootView.results.show(view);
	});
});

YouTubeApp.start();