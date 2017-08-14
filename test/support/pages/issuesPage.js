var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var issuesPage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'issues';

  _this._data = {
    elements: {
      newIssue: {
          css: '.btn-new',
          id: 'new_issue_link',
          isSingle: true
      }
    }
  };

};

inheritance.inherits(Page, issuesPage);
module.exports = issuesPage;
