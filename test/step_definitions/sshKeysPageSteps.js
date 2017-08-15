var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {
    Then(/^Click to Add key '(.+)'$/, function (button) {
        return this.pageFactory.currentPage.clickOn(button);
    });

    Then(/^I check field sshKey '([^']*)' with the sshKey$/, function(fieldName) {
		return this.pageFactory.currentPage.checkValueOfTheElement(fieldName);
	});

	When(/^Click to sshKey '(.+)'$/, function (button) {
        return this.pageFactory.currentPage.clickOn(button);
    });

	When(/^I fill field '([^']*)' with the sshKey$/, function(fieldName) {
		return this.pageFactory.currentPage.fillField(fieldName);
	});

    Then(/^Remove SSHKey of the user '([^']*)'$/, function(fieldName) {
		return this.pageFactory.currentPage.removeSSHKey(fieldName);
	});

});
