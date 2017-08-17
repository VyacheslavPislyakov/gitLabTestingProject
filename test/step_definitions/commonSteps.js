var {
	defineSupportCode
} = require('cucumber');

defineSupportCode(function({Given,When,Then}) {

	When(/^I authorize$/, function() {
		return this.pageFactory.currentPage.authorize();
	});

	Given(/^I am on page with the title '(.+)'$/, function(expectedTitle) {
		return this.pageFactory.currentPage.getTitle()
			.then((title) => {
				return expect(title).to.equal(expectedTitle);
			});
	});

	When(/^I fill field '([^']*)' with the value '([^']*)'$/, function(fieldName, value) {
		return this.pageFactory.currentPage.fillField(fieldName, value);
	});

	When(/^I click on '([^']*)'$/, function(elementName) {
		return this.pageFactory.currentPage.clickOn(elementName);
	});

	When(/^I get to '([^']*)' page$/, function(pageName) {
		return this.pageFactory.getPage(pageName);
	});

	Then(/^I check '([^']*)' equal '([^']*)'$/, function(fieldName, value) {
		return this.pageFactory.currentPage.checkValueOfTheElement(fieldName, value);
	});

});
