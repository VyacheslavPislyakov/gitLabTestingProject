var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var newFilePage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'newFile';

  _this._data = {
    elements: {
      fileName: {
          css: '#file_name',
          isSingle: true
      },
      fileEditor: {
          css: '.file-editor .ace_text-input',
          isSingle: true
      },
      commitChanges: {
          css: '.commit-btn',
          isSingle: true
      }
    }
  };

  _this.fillField = function(fieldName, value) {
    return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView()
      .then(element => {
        return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).sendKeys(value);
        });
  };

_this.clickOn = function(elementName){
  return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root,_this._data.elements[elementName])), _this.timeout)
    .then(()=>{
      return _this.world.helper.elementGetter(_this._root,_this._data.elements[elementName]).click()
      .then(()=>{
        return browser.wait(EC.invisibilityOf(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])));
      })
    });
};

};

inheritance.inherits(Page, newFilePage);
module.exports = newFilePage;
