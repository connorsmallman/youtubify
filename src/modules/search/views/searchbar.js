var Marionette = require("backbone.marionette");

var searchTemplate = require("./search-template.hbs");

module.exports = Marionette.ItemView.extend({
	className: "container",
	template: searchTemplate,
	events: {
		"keyup #search":"loadSearchingView"
	},
	loadSearchingView: function () {
		this.trigger("search:view:init", this);
	}
});