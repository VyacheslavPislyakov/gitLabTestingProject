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

  _this.clickOn = function(elementName){
    return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root,_this._data.elements[elementName])), 5000)
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements[elementName]).click()
      });
  };

  _this.fillField = function(fieldName, value) {
    return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView()
      .then(element => {
        return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).sendKeys(value);
        });
  };

};

inheritance.inherits(Page, newIssuePage);
module.exports = newIssuePage;
