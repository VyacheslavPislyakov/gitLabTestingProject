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

			},

			searchForm: {
				css: '#search',
				isSingle: true
			}
		}
	};
	_this.authorize = function() {
		exec('./login.exe', [process.env.MY_USERNAME, process.env.MY_PASSWORD], function(err, data) {
			console.log(err);
			console.log(data.toString());
		});
	}

	_this.clickOn = function(elementName) {
		return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), 10000)
			.then(() => {
				_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).click();
			});
	};

	_this.checkIfValueIsPresentInTab = function(value) {
		return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root, _this._data.elements.projectName)), 5000)
			.then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.projectName).each(element => {
					element.getText()
						.then(function(text) {
							expect(text).not.to.equal(value);
						});
				});
			});
	};

	_this.performSearch = function(projectName) {
		return _this.world.helper.elementGetter(_this._root, _this._data.elements["searchForm"]).sendKeys(projectName)
			.then(() => {
				return browser.actions().sendKeys(protractor.Key.ENTER).perform();
			})
	}

};

inheritance.inherits(Page, homePage);

module.exports = homePage;
