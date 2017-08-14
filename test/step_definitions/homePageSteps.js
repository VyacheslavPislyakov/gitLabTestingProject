var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I click on new project button$/, function () {
    return this.pageFactory.currentPage.clickOnNewProjectButton();
	});
//And list of projects in "Your projects" tab doesn't contain "my-awesome-project" name
	When(/^list of projects in '(.+)' tab doesn't contain '(.+)' name$/, function (tabName, value) {
    return this.pageFactory.currentPage.checkIfValueIsPresentInTab(value);
	});

});
