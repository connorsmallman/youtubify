'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');
var sinon = require('sinon');
require('jasmine-sinon');

var searchFixture = require('./searchFixture');
var validResponse = require('./helpers/validResponse');

var SearchModel = require('../src/modules/search/models/searchModel');
var SearchView  = require('../src/modules/search/views/searchView');

var searchModule = require('../src/modules/search/search');

describe("Search Module", function () {
  describe("Search Model", function () {
    beforeEach(function () {
      this.searchModel = new SearchModel();
    });

  	it("Search Model should have defaults", function () {
      expect(this.searchModel.attributes.searchValue).toEqual('');
      expect(this.searchModel.attributes.searching).toEqual(false);
    });
  });

  describe("Initializing Search View", function () {
    beforeEach(function () {
      this.searchView = new SearchView();
    });

    it("Should create a div setElement", function () {
      expect(this.searchView.el.nodeName).toEqual('DIV');
      expect($(this.searchView.el)).toHaveClass('container-fluid');
    });
  });
});