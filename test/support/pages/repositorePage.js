var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var repositorePage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'repositore';

  _this._data = {
    elements: {
      plusButton: {
          css: '.add-to-tree',
          isSingle: true
      },
      newFile: {
          css: '.dropdown-menu>li:nth-child(1)>a',
          isSingle: true
      }
    }
  };

  _this.clickOn = function(elementName){
    return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root,_this._data.elements[elementName])), _this.timeout)
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements[elementName]).click()
      });
  };

};

inheritance.inherits(Page, repositorePage);
module.exports = repositorePage;
