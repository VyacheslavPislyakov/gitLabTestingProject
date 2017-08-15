var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var searchPage = function(world) {
  var _this=this;
  _this.world = world;
  _this.marker = 'search';

  _this._data = {
    elements: {
      searchResult: {
          css: '.project-name',
          isSingle: true
      },
      projectForWork: {
          css: 'h3 .project',
          isSingle: true
      }
    }
  };

  _this.checkValueOfTheElementInclude = function(fieldName, value){
        return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).getText()
          .then(txt => {
            return expect(txt).to.include(value);
            });
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

inheritance.inherits(Page, searchPage);
module.exports = searchPage;
