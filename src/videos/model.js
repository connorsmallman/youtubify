var Backbone = require("backbone");

var key = "AIzaSyBZ_urP_23209MzD8Q7y_63S3yX5szvpCI"

var Videos = Backbone.Collection.extend({
	url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=funny&key=" + key,
});

module.exports = Videos;