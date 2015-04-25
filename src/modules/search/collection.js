var Backbone = require("backbone");

module.exports = Backbone.Collection.extend({
	url: function () {
		return this.options.url;
	},
	initialize: function (model, options) {
		this.options = options
	}
});