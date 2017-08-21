var expect = require('chai').expect;
var fs = require('fs');
var inheritance = require('./../helpers/inheritance'),
	Page = require('./page');

var profilePage = function(world) {
	var _this = this;
	_this.world = world;
	_this.marker = 'sshKeys';

	_this.url = 'https://git.epam.com/profile/keys';

	_this._data = {
		elements: {
			keyField: {
				id: 'key_key',
				isSingle: true
			},
			installKeyField: {
				css: '.well-pre',
				isSingle: true
			},
			testSSHKey: {
				css: 'li:nth-child(1) > div:nth-child(2) > a',
				isSingle: true
			},
			buttonCreate: {
				css: '.btn.btn-create',
				isSingle: true
			},
			buttonRemove: {
				css: '.fa.fa-trash',
				isSingle: false
			}
		}
	};

	_this.readFileSSHKey = function() {
		return fs.readFileSync('./sshKeyPub.txt', 'utf8');
	};


	_this.fillField = function(fieldName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName])), _this.timeout).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView()
		}).then(element => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).sendKeys(_this.readFileSSHKey());
		});
	};

	_this.clickOn = function(elementName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), _this.timeout).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).scrollIntoView();
		}).then(element => {
			return element.click();
		});
	};

	_this.checkValueOfTheElement = function(fieldName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName])), _this.timeout).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView();
		}).then(element => {
			return element.getText().then(txt => {
				return expect(txt).to.equal(_this.readFileSSHKey());
			});
		});
	};

	_this.removeSSHKey = function(elementName) {
		return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), _this.timeout).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).first().scrollIntoView();
		}).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).first().click();
		}).then(() => {
			return browser.wait(EC.alertIsPresent(), _this.timeout);
		}).then(() => {
			browser.switchTo().alert().accept();
		});
	}

};

inheritance.inherits(Page, profilePage);

module.exports = profilePage;
