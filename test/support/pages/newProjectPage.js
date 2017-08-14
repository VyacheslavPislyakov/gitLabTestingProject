var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var newProjectPage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'new-project';

  _this._data = {
    elements: {
      projectName: {
				id: 'project_path',
				isSingle: true
		   },
      projectDescription: {
        id: 'project_description',
        isSingle: true
      },
      internalVisibilityButton: {
        id: 'project_visibility_level_10',
        isSingle: true
      },
      creationButton:{
        css: 'input[value="Create project"]',
        isSingle: true
      }
    }
  };

  _this.fillField = function(fieldName,value){
    return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root,_this._data.elements[fieldName])), 5000)
      .then(()=>{
        _this.world.helper.elementGetter(_this._root,_this._data.elements[fieldName]).sendKeys(value);
      });
  };

  _this.setVisibility = function(){
    return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root,_this._data.elements.internalVisibilityButton)), 5000)
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.internalVisibilityButton).click();
      });
  };

  _this.clickOn = function(elementName){
    return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root,_this._data.elements[elementName])), 5000)
      .then(()=>{
        _this.world.helper.elementGetter(_this._root,_this._data.elements[elementName]).click();
      });
  };
};

inheritance.inherits(Page,newProjectPage);

module.exports = newProjectPage;
