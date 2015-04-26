var Backbone = require('backbone');

module.exports = Backbone.Model.extend({
	defaults: {
		searchValue : "",
		searching: false
	}
});