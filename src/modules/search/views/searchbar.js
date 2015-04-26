var Marionette = require('backbone.marionette');

var searchTemplate = require('./search-template.hbs');
var searchingTemplate = require('./searching-template.hbs');

module.exports = Marionette.ItemView.extend({
	className: "container",
	template: searchTemplate,
	events: {
		"keyup #search":"loadSearchingState"
	},
	loadSearchingState: function () {
		this.trigger("searching:view:init", this);
	}
});