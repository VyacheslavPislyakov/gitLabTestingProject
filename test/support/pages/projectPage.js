var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var projectPage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'project';

  _this._data = {
    elements: {
      projectTitle: {
				css: '.project-title',
				isSingle: true
		  },
      projectDescription: {
 				css: '.project-home-desc > p',
 				isSingle: true
 		  },
      projectDescription: {
 				css: '.project-home-desc > p',
 				isSingle: true
 		  },
      shieldIcon: {
        css: '.fa-shield',
        isSingle: true
      },
      removeProjectButton: {
        css: '.btn-remove',
        isSingle: true
      }
   }
  };

  _this.checkProjectParameters = function(expectedTitle,expectedDescription){
    return browser.wait(EC.visibilityOf(_this.world.helper.elementGetter(_this._root,_this._data.elements.projectTitle)), 5000)
      .then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.projectTitle).getText();
      }).then((title)=>{
        return expect(title).to.equal(expectedTitle);
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.projectDescription).getText();
      }).then((description)=>{
        return expect(description).to.equal(expectedDescription);
      }).then(()=>{
        return browser.wait(EC.visibilityOf(_this.world.helper.elementGetter(_this._root,_this._data.elements.shieldIcon)), 5000)
      },(error)=>{
        console.log("Shield icon is not visible");
      });
  };
  _this.removeAnEmptyProject = function(){
    return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root,_this._data.elements.removeProjectButton)), 5000)
      .then(()=>{
         return _this.world.helper.elementGetter(_this._root,_this._data.elements.removeProjectButton).scrollIntoView();
      }).then(()=>{
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.removeProjectButton).click();
      }).then(()=>{
        return browser.wait(EC.alertIsPresent(), 5000);
      }).then(()=>{
      browser.switchTo().alert().accept();
      });
  };
};

inheritance.inherits(Page,projectPage);

module.exports = projectPage;
