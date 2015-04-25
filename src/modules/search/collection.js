var Backbone = require("backbone");
var Model = require("./model");

module.exports = Backbone.Collection.extend({
	url: function () {
		return this.options.url;
	},
	initialize: function (model, options) {
		this.options = options
	},
	model: Model
});