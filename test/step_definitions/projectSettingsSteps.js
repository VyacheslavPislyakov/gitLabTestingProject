var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I confirm the deletion of '([^']*)' project$/, function (projectName) {
    return this.pageFactory.currentPage.confirmProjectDeletion(projectName);
  });

});
