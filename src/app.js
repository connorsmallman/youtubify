var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var Videos = require("./videos/model");

var YouTubeApp = new Marionette.Application();

YouTubeApp.on("before:start", function() {
	var videos = new Videos();

	videos.fetch().then(function (data){
		console.log(data);
	});
});

YouTubeApp.start();