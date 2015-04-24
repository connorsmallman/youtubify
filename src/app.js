var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var Videos = require("./videos/model");

var YouTubeApp = new Marionette.Application();

YouTubeApp.on("before:start", function() {
	var initialData;

	var videos = new Videos(initialData, {
		part: "snippet",
		maxResults: "10",
		query: "good music"
	});

	videos.fetch().then(function (data){
		console.log(data);
	});
});

YouTubeApp.start();