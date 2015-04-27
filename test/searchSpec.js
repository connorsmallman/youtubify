'use strict';

var $ = require('jquery');
var _ = require('underscore');
var Backbone = require('backbone');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

var SearchModule = require('../src/modules/search/search');

describe("Search Module", function() {
  var search = new SearchModule();

  beforeAll(function () {
  });

  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
});