var Backbone = require("backbone");
var ResultsModel = require("./resultsModel");

module.exports = Backbone.Collection.extend({
	url: function () {
		return this.options.url;
	},
	initialize: function (model, options) {
		this.options = options
	},
	model: ResultsModel
});