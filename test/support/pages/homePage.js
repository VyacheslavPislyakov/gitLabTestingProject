var inheritance = require('./../helpers/inheritance'),
	Page = require('./page');

var homePage = function(world) {
	var _this = this;
	_this.world = world;
	_this.marker = 'home';
	_this.url = 'https://git.epam.com/';


	_this._data = {
		elements: {
			newProjectButton: {
				css: '.btn.btn-new',
				text: 'New project',
				isSingle: true
			},
			projectName: {
				css: '.project-name',
				isSingle: false
			}
			accountLink: {
				css: '.navbar__account',
				text: 'My account',
				isSingle: true
			},
			loginDetailsLink: {
				css: '.navbar__account-dropdown li:nth-child(8) a',
				isSingle: true
			},
			loginButton: {
				css: '.button[data-synthetics="header-account-dropdown-login"]',
				isSingle: true
			},
			searchField: {
				css: 'input.navbar__search-field',
				isSingle: true
			},
			searchButton: {
				css: 'button.button.button--icon',
				isSingle: true
			}
		}
	};

	_this.clickOn = function(elementName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), 5000)
			.then(() => {
				_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).click();
			});
	};

	_this.checkIfValueIsPresentInTab = function(value) {
		return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root, _this._data.elements.projectName)), 5000)
			.then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.projectName)
			}).then((elements) => {
				for (var i = 0; i < elements.length; i++) {
					if (elements[i].getText() === value) return "Project has not been deleted. Tab contains project's name"
				}
			});
	};

	_this.clickOnAccountLink = function() {
		return _this.world.helper.elementGetter(_this._root, _this._data.elements.accountLink).waitReady()
			.then((element) => {
				return element.click();
			});
	};
	_this.clickOnLoginButton = function() {
		return _this.world.helper.elementGetter(_this._root, _this._data.elements.loginButton).click()
			.then(() => {
				return _this.world.browserUtils.changePage('login');
			});
	};

	_this.makeQuery = function(query) {
		return _this.world.helper.elementGetter(_this._root, _this._data.elements.searchField).sendKeys(query).then(() => {}).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements.searchButton).click();
		}).then(() => {
			return _this.world.browserUtils.changePage('query-results');
		});
	};
	_this.clickOnLoginDetailsLink = function() {
		return _this.world.helper.elementGetter(_this._root, _this._data.elements.loginDetailsLink).waitReady()
			.then((element) => {
				element.click();
			}).then(() => {
				return _this.world.browserUtils.changePage('login-details')
			});
	};
};

inheritance.inherits(Page, homePage);

module.exports = homePage;
