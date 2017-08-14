var inheritance = require('./../helpers/inheritance'),
    Page = require('./page');

var homePage = function(world){
    var _this=this;
    _this.world = world;
    _this.marker = 'profilePage';

    _this.url = 'https://git.epam.com/profile';

    _this._data = {
        elements: {
            skypeField: {
                id: 'user_skype',
                isSingle: true
            },
            linkedinField: {
                id: 'user_linkedin',
                isSingle: true
            },
            twitterField: {
                id: 'user_twitter',
                isSingle: true
            },
            webSiteField: {
                id: 'user_website_url',
                isSingle: true
            },
            organizationField: {
                id: 'user_location',
                isSingle: true
            },
            buttonUpdate: {
                css: '.btn.btn-success',
                isSingle: true
            },
        }
    };

    _this.insertTextSkypeField = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.skypeField).waitReady()
        .then((element)=>{
                return element.sendKeys('test_skype');
        });
    };

    _this.insertTextLinkedinField = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.linkedinField).waitReady()
        .then((element)=>{
                return element.sendKeys('test_linkedin');
        });
    };

    _this.insertTextTwitterField = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.twitterField).waitReady()
        .then((element)=>{
                return element.sendKeys('test_twitter');
        });
    };

    _this.insertTextWebSiteField = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.webSiteField).waitReady()
        .then((element)=>{
                return element.sendKeys('test_website');
        });
    };

    _this.insertTextOrganizationField = function(){
        return _this.world.helper.elementGetter(_this._root,_this._data.elements.organizationField).waitReady()
        .then((element)=>{
                return element.sendKeys('test_organization');
        });
    };

    _this.clickOn = function(elementName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), 5000)
			.then(() => {
				_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).click();
			});
	};

};

inheritance.inherits(Page,homePage);

module.exports = homePage;
