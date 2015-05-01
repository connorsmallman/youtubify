'use strict';

var Marionette = require('backbone.marionette');
var $ = require('jquery');
var _ = require('underscore');
var SearchModel = require('../models/searchModel');

var searchTemplate = require('./search-template.hbs');
var searchingTemplate = require('./searching-template.hbs');

var searchController = require('../controller');

var model = new SearchModel();

module.exports = Marionette.ItemView.extend({
	className: "container-fluid",
	ui: {
		searchStateInput: "#search",
		searchingStateInput: "#searching"
	},
	events: {
		"keyup @ui.searchStateInput":"loadSearchingState",
		"keyup @ui.searchingStateInput":"search"
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
		var value = $(this.ui.searchingStateInput).val();
		
		if(value.length && event.keyCode === 13){
			searchController.searchQuery(value);
		}
		else if (value.length === 0){
			this.loadSearchState();
		}
	},
	loadSearchState: function () {
		this.model.set({searching: false, searchValue: ""});
		searchController.setSearchState("search"); 
	},
	loadSearchingState: function (event) {
		var value = $(this.ui.searchStateInput).val();

		if(value.length){
			this.model.set({searching: true, searchValue: value});
			searchController.setSearchState("searching"); 
		}
	},
	onRender: function () {
		if(this.model.get("searching")){
			var value = this.model.get("searchValue");

			$(this.ui.searchingStateInput).focus().val(value);
		} else {
			$(this.ui.searchStateInput).focus();
		}
	},
	changeState: function () {
		this.render();
	}
});