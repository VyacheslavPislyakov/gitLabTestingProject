var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Then(/^Update profile of the user '(.+)'$/, function (button) {
        return this.pageFactory.currentPage.clickOn(button);
    });

    Then(/^I check field '([^']*)' with the value '([^']*)'$/, function(fieldName, value) {
		return this.pageFactory.currentPage.checkValueOfTheElement(fieldName, value);
	});

    Then(/^I remove value of the field '([^']*)'$/, function(fieldName) {
		return this.pageFactory.currentPage.removeValue(fieldName);
	});

});
