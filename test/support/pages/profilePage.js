var expect = require('chai').expect;
var inheritance = require('./../helpers/inheritance'),
	Page = require('./page');

var profilePage = function(world) {
	var _this = this;
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

	_this.fillField = function(fieldName, value) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName])), 5000).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView()
        }).then(element => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).sendKeys(value);
		});
	};

	_this.clickOn = function(elementName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), 5000).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).scrollIntoView();
		}).then(element => {
			return element.click();
		})
	};

	_this.checkValueOfTheElement = function(fieldName, value){
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName])), 5000).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView();
        }).then(element => {
			return element.getAttribute('value').then(txt => {
				// return console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa' + txt);
				return expect(txt).to.equal(value);

			});
		});
	};

};

inheritance.inherits(Page, profilePage);

module.exports = profilePage;
