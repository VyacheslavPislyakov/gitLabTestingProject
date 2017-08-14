var profilePage = require('./profilePage');
var homePage = require('./homePage');
var newProjectPage = require('./newProjectPage');
var projectPage = require('./projectPage');
var sshKeysPage = require('./sshKeysPage');
var homePage = require('./homePage'),
    searchPage = require('./searchPage'),
    issuesPage = require('./issuesPage'),
    newIssuePage = require('./newIssuePage'),
    eachIssuePage = require('./eachIssuePage'),
    repositorePage = require('./repositorePage'),
    newFilePage = require('./newFilePage'),
    filePage = require('./filePage'),
    profilePage = require('./profilePage'),
    newProjectPage = require('./newProjectPage'),
    projectPage = require('./projectPage'),
    projectSettingsPage = require('./projectSettingsPage');


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
            'project': projectPage,
            'sshKeys': sshKeysPage
            'project-settings': projectSettingsPage
        };
        if(!pages[page]){
            throw new Error('Wrong page name: '+pages[page]);
        }
        _this.currentPage = new pages[page](world);
        return _this.currentPage;
    };
};

module.exports = PageFactory;
