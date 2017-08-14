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

};

inheritance.inherits(Page, newFilePage);
module.exports = newFilePage;
