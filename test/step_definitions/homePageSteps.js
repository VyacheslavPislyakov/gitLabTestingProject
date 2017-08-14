var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {


	When(/^I click on new project button$/, function () {
    return this.pageFactory.currentPage.clickOnNewProjectButton();
	});

	When(/^list of projects in '(.+)' tab doesn't contain '(.+)' name$/, function (tabName, value) {
    return this.pageFactory.currentPage.checkIfValueIsPresentInTab(value);
	});

  When(/^I click on my account and login links$/, function () {
    return this.pageFactory.currentPage.clickOnAccountLink().then(()=>{
      return this.pageFactory.currentPage.clickOnLoginButton()
    });
  });

  Given(/^I click on login details link$/, function () {
  return this.pageFactory.currentPage.clickOnAccountLink()
  .then(()=>{
    return this.pageFactory.currentPage.clickOnLoginDetailsLink();
    });
});

});
