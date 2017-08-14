var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var filePage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'file';

  _this._data = {
    elements: {
      title: {
          css: '.file-title-name',
          isSingle: true
      },
      description: {
          css: '#LC1',
          isSingle: true
      }
    }
  };

};

inheritance.inherits(Page, filePage);
module.exports = filePage;
