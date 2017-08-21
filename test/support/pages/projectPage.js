var inheritance = require('./../helpers/inheritance'),
	Page = require('./page');

var projectPage = function(world) {
	var _this = this;
	_this.world = world;
	_this.marker = 'project';

	_this._data = {
		elements: {
			projectTitle: {
				css: '.project-title',
				isSingle: true
			},
			projectDescription: {
				css: '.project-home-desc > p',
				isSingle: true
			},
			projectDescription: {
				css: '.project-home-desc > p',
				isSingle: true
			},
			shieldIcon: {
				css: '.fa-shield',
				isSingle: true
			},
            privateIcon: {
				css: '.fa.fa-lock',
				isSingle: true
			},
			removeProjectButton: {
				css: '.btn-remove',
				isSingle: true
			},
			readmeLink: {
				css: 'a.underlined-link',
				text: 'README',
				isSingle: true
			},
			repository: {
				css: 'a[title="Repository"]',
				isSingle: true
			},
			issues: {
				css: '.shortcuts-issues',
				isSingle: true
			},
			settingsTab: {
				css: 'span',
				text: 'Settings',
				isSingle: true
			}
		}
	};

	_this.checkProjectParameters = function(expectedTitle, expectedDescription) {
		return browser.wait(EC.visibilityOf(_this.world.helper.elementGetter(_this._root, _this._data.elements.projectTitle)), _this.timeout)
			.then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.projectTitle).getText();
			}).then((title) => {
				return expect(title).to.equal(expectedTitle);
			}).then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.projectDescription).getText();
			}).then((description) => {
				return expect(description).to.equal(expectedDescription);
			}).then(() => {
				return browser.wait(EC.visibilityOf(_this.world.helper.elementGetter(_this._root, _this._data.elements.shieldIcon)), _this.timeout)
			}, (error) => {
				console.log("Shield icon is not visible");
			});
	};

    _this.checkProjectVisibility = function(expectedTitle, expectedDescription) {
		return browser.wait(EC.visibilityOf(_this.world.helper.elementGetter(_this._root, _this._data.elements.projectTitle)), _this.timeout)
			.then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.projectTitle).getText();
			}).then((title) => {
				return expect(title).to.equal(expectedTitle);
			}).then(() => {
				return browser.wait(EC.visibilityOf(_this.world.helper.elementGetter(_this._root, _this._data.elements.privateIcon)), _this.timeout)
			}, (error) => {
				console.log("Private icon is not visible");
			});
	};

	_this.removeAnEmptyProject = function() {
		return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root, _this._data.elements.removeProjectButton)), _this.timeout)
			.then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.removeProjectButton).scrollIntoView();
			}).then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.removeProjectButton).click();
			}).then(() => {
				return browser.wait(EC.alertIsPresent(), 5000);
			}).then(() => {
				browser.switchTo().alert().accept();
			});
	};

	_this.clickOn = function(elementName) {
		return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), _this.timeout)
			.then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).click();
			});
	};


};

inheritance.inherits(Page, projectPage);

module.exports = projectPage;
