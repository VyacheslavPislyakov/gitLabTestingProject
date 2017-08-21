var inheritance = require('./../helpers/inheritance'),
	Page = require('./page');

var projectSettingsPage = function(world) {
	var _this = this;
	_this.world = world;
	_this.marker = 'project-settings';

	_this._data = {
		elements: {
			removeProjectButton: {
				css: 'input[value="Remove project"]',
				isSingle: true
			},
			modalDialog: {
				css: '.modal-dialog',
				isSingle: true
			},
			modalDialogInput: {
				id: 'confirm_name_input',
				isSingle: true
			},
			confirmButton: {
				css: 'input[value="Confirm"]',
				isSingle: true
			},
			projectVisibilitySelect: {
				css: 'option',
        text: 'Private',
				isSingle: true
			},
      saveChangesButton: {
				css: '.btn.btn-save',
				isSingle: true
			},
		}
	};
	_this.clickOn = function(elementName) {
		return browser.wait(EC.presenceOf(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), _this.timeout)
			.then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).scrollIntoView();
			}).then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).click();
			});
	};
	_this.confirmProjectDeletion = function(projectName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements.modalDialog)), _this.timeout)
			.then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.modalDialogInput);
			}).then((element) => {
				return element.sendKeys(projectName);
			}).then(() => {
				return _this.world.helper.elementGetter(_this._root, _this._data.elements.confirmButton).click();
			});
	};
};
inheritance.inherits(Page, projectSettingsPage);

module.exports = projectSettingsPage;
