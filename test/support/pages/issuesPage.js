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

  _this.clickOn = function(elementName){
    return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root,_this._data.elements[elementName])), 5000)
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements[elementName]).click()
        .then(()=>{
          return browser.wait(EC.invisibilityOf(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])));
        })
      });
  };

};

inheritance.inherits(Page, issuesPage);
module.exports = issuesPage;
