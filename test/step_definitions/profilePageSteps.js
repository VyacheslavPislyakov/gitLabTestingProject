var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Then(/^Update profile of the user '(.+)'$/, function (button) {
        return this.pageFactory.currentPage.clickOn(button);
    });

    When(/^I check field '([^']*)' with the value '([^']*)'$/, function(fieldName, value) {
		return this.pageFactory.currentPage.checkValueOfTheElement(fieldName, value);
	});
});
