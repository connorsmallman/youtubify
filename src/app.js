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
});

YouTubeApp.start();