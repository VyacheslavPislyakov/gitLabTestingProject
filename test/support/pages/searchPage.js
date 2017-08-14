var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var searchPage = function(world) {
  var _this=this;
  _this.world = world;
  _this.marker = 'search';

  _this._data = {
    elements: {
      searchResult: {
          css: '.project-name'
      }
    }
  };

};

inheritance.inherits(Page, searchPage);
module.exports = searchPage;
