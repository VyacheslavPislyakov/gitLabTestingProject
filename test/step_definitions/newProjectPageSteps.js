var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I set internal visibility of the project$/, function () {
    return this.pageFactory.currentPage.setVisibility();
  });
	When(/^I fill projectName field with the value '([^']*)'$/, function (value) {
    return this.pageFactory.currentPage.fillName(value);
  });
	When(/^I fill projectDescription field with the value '([^']*)'$/, function (value) {
    return this.pageFactory.currentPage.fillDescription(value);
  });
	When(/^I click on creationButton$/, function () {
    return this.pageFactory.currentPage.clickOnCreationButton();
  });

});
