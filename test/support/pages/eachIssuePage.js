var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var eachIssuePage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'eachIssue';

  _this._data = {
    elements: {
      title: {
          css: 'h2',
          isSingle: true
      },
      description: {
          css: '.wiki>p',
          isSingle: true
      }
    }
  };

};

inheritance.inherits(Page, eachIssuePage);
module.exports = eachIssuePage;
