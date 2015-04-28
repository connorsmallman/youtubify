'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var sinon = require('sinon');

var SearchModel = require('../src/modules/search/models/searchModel');

describe("Search Module", function() {
	describe("Search Model", function() {
		beforeEach(function() {
	  		this.searchModel = new SearchModel();
		});

		it("should have defaults values", function() {
			expect(this.searchModel.get("searchValue")).toEqual("");
			expect(this.searchModel.get("searching")).toEqual(false);
		});
	});
});