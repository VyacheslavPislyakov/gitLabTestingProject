var profilePage = require('./profilePage');
var homePage = require('./homePage');
var newProjectPage = require('./newProjectPage');
var projectPage = require('./projectPage');
var sshKeysPage = require('./sshKeysPage');


var PageFactory = function(world){

    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page){
        var pages = {
            'profile': profilePage,
            'home': homePage,
            'new-project': newProjectPage,
            'project': projectPage,
            'sshKeys': sshKeysPage
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage;
    };
};

module.exports = PageFactory;
