var Backbone = require("backbone");
var _ = require("underscore");

var key = "AIzaSyBZ_urP_23209MzD8Q7y_63S3yX5szvpCI"

var Videos = Backbone.Collection.extend({
	url: function(){
		return "https://www.googleapis.com/youtube/v3/search?part=" + this.options.part + "&maxResults=" + this.options.maxResults + "&q=" + this.options.query + "&key=" + key;
	},
	initialize: function(models, options){
		this.options = options;
	}
});

module.exports = Videos;