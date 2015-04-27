'use strict';

var Marionette = require('backbone.marionette');
var $ = require('jquery');
var SearchModel = require('../models/searchModel');

var searchTemplate = require('./search-template.hbs');
var searchingTemplate = require('./searching-template.hbs');

var model = new SearchModel();

module.exports = Marionette.ItemView.extend({
	className: "container-fluid",
	ui: {
		input: "#search"
	},
	events: {
		"keyup @ui.input":"search"
	},
	model: model,
	modelEvents: {
        'change': 'changeState'
    },
	getTemplate: function () {
		if(this.model.get("searching") === true){
			return searchingTemplate
		}
		else {
			return searchTemplate
		}
	},
	search: function () {
		var value = $(this.ui.input).val();

		if(value === ""){
			this.model.set({searching: false, searchValue: ""});
		}else{
			this.model.set({searching: true, searchValue: value });
		}
	},
	changeState: function () {
		this.render();
	},
	onRender: function () {
		$(this.ui.input).focus().val(this.model.get("searchValue"));
	}
});