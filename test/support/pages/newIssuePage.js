var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var newIssuePage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'newIssue';

  _this._data = {
    elements: {
      title: {
          css: '#issue_title',
          isSingle: true
      },
      description: {
          css: '#issue_description',
          isSingle: true
      },
      submitIssue: {
          css: '.btn-create',
          isSingle: true
      }
    }
  };

};

inheritance.inherits(Page, newIssuePage);
module.exports = newIssuePage;
