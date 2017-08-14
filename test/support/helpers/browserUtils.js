var BrowserUtils = function(world){
    var _this = this;

    _this._data = {};

    _this.clearLocalStorage = function (){
        return browser.executeScript('window.localStorage.clear();');
    };
    _this.navigateTo = function(page){
        // world.pageFactory.getPage(page);
        // return browser.get(_this.url)

        _this.data = curPage = world.pageFactory.getPage(page);
        return browser.get(_this.data.url);

    };

    _this.changePage = function(page){
        world.pageFactory.getPage(page);
        return true;
    };
};

module.exports = BrowserUtils;
