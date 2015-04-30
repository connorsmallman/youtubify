'use strict';

var Marionette = require('backbone.marionette');
var $ = require('jquery');
var SearchModel = require('../models/searchModel');

var searchTemplate = require('./search-template.hbs');
var searchingTemplate = require('./searching-template.hbs');

var searchController = require('../controller');

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
	search: function (event) {
		if(event.keyCode === 13 && this.model.get("searching") === true){
			var value = $(this.ui.input).val();

			searchController.searchQuery(value);
		} else {
			var value = $(this.ui.input).val();

			if(value === ""){
				searchController.setSearchState("empty");
				this.model.set({searching: false, searchValue: ""});
			}else{
				this.model.set({searching: true, searchValue: value });
			}
		}
	},
	changeState: function () {
		this.render();
	},
	onRender: function () {
		$(this.ui.input).focus().val(this.model.get("searchValue"));
	}
});