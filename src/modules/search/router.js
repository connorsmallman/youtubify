var Backbone = require("backbone");

module.exports = Backbone.Router.extend({
	routes: {
		"searching": "showSearchingState"
	},
	showSearchingState: function () {
		console.log("searching")
	}
});