var Page = function(){};

Page.prototype._root = element(by.css('body'));

Page.prototype._commonData = {
    elements: {}
};

Page.prototype.url = '';
Page.prototype.timeout = 10000;

Page.prototype.getTitle = function(){
    return browser.getTitle();
};

module.exports = Page;
