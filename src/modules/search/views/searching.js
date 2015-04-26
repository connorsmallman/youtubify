var Marionette = require('backbone.marionette');
var $ = require('jquery');

var searchingTemplate = require('./searching-template.hbs');

module.exports = Marionette.ItemView.extend({
	initialize: function (data) {
		this.value = data.value;
	},
	serializeData: function () { 
		return {
			"value": this.value
		}
	},
	onDomRefresh: function () {
		$(this.ui.input).focus().val(this.value);
	},
	className: "fullwidth",
	ui: {
		input: "#searching"
	},
	template: searchingTemplate
});