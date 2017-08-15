var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var eachIssuePage = function(world){
  var _this=this;
  _this.world = world;
  _this.marker = 'eachIssue';

  _this._data = {
    elements: {
      title: {
          css: 'h2',
          isSingle: true
      },
      description: {
          css: '.wiki>p',
          isSingle: true
      }
    }
  };

  _this.checkValueOfTheElement = function(fieldName, value){
    return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView()
      .then(element => {
        return element.getText().then(txt => {
          return expect(txt).to.equal(value);
          });
        });
  };

};

inheritance.inherits(Page, eachIssuePage);
module.exports = eachIssuePage;
