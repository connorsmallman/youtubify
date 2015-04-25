var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var SearchModule = require('./modules/search/search');

var YouTubeApp = new Marionette.Application();

var RootView = Marionette.LayoutView.extend({
	el: 'body',
	regions: {
        search: "#searchContainer"
    }
});

YouTubeApp.rootView = new RootView();

YouTubeApp.on("before:start", function () {
	var search = new SearchModule({
		app: YouTubeApp
	});

	search.load(YouTubeApp.rootView.search);

	search.search({
		url: "https://www.googleapis.com/youtube/v3/search",
		fields: {
			part: "snippet",
			maxResults: "1",
			q: "funny",
		},
		key: "AIzaSyBZ_urP_23209MzD8Q7y_63S3yX5szvpCI"
	}, function (results) {
		console.log(results);
	});
});

YouTubeApp.start();