var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var homePage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'home';

  _this._data = {
    elements: {
      newProjectButton: {
				css: '.btn.btn-new',
        text: 'New project',
				isSingle: true
		  },
      projectName: {
				css: '.project-name',
        isSingle: false
		  }
    }
  };
  _this.clickOn = function(elementName){
    return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root,_this._data.elements[elementName])), 5000)
      .then(()=>{
        _this.world.helper.elementGetter(_this._root,_this._data.elements[elementName]).click();
      });
  };

  _this.checkIfValueIsPresentInTab = function(value){
    return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root,_this._data.elements.projectName)), 5000)
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.projectName)
      }).then((elements)=>{
        for(var i = 0; i< elements.length; i++){
          if(elements[i].getText() === value) return "Project has not been deleted. Tab contains project's name"
        }
      });
  };
};

inheritance.inherits(Page,homePage);

module.exports = homePage;
