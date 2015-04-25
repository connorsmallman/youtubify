var Marionette = require("backbone.marionette");

var searchTemplate = require("./search-template.hbs");

module.exports = Marionette.ItemView.extend({
	template: searchTemplate
});