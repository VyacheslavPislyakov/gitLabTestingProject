<<<<<<< HEAD
var homePage = require('./homePage'),
    searchPage = require('./searchPage'),
    issuesPage = require('./issuesPage'),
    newIssuePage = require('./newIssuePage'),
    eachIssuePage = require('./eachIssuePage'),
    repositorePage = require('./repositorePage'),
    newFilePage = require('./newFilePage'),
    filePage = require('./filePage');

=======
var profilePage = require('./profilePage');
var homePage = require('./homePage');
>>>>>>> 03296e38ac1a26cd73af7be4915c86dfc122b21e
var newProjectPage = require('./newProjectPage');
var projectPage = require('./projectPage');


var PageFactory = function(world){

    var _this = this;

    _this.currentPage = 'undefined';

    _this.getPage = function(page){
        var pages = {
            'profile': profilePage,
            'home': homePage,
            'search' : searchPage,
            'issues' : issuesPage,
            'newIssue' : newIssuePage,
            'eachIssue' : eachIssuePage,
            'repositore' : repositorePage,
            'newFile' : newFilePage,
            'file' : filePage,
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
