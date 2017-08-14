var homePage = require('./homePage');

var newProjectPage = require('./newProjectPage');
var projectPage = require('./projectPage');
    loginPage = require('./loginPage');


var PageFactory = function(world){

    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page){
        var pages = {
            'home': homePage,
            'new-project': newProjectPage,
            'project': projectPage
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage;
    };
};

module.exports = PageFactory;
