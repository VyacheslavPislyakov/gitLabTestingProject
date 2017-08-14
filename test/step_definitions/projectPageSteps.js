var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

	When(/^I have my project created with the name '([^']*)', the project description '([^']*)' and visible internally$/, function (projectName, projectDescription) {
    return this.pageFactory.currentPage.checkProjectParameters(projectName, projectDescription);
  });

	When(/^I remove an empty project$/, function () {
    return this.pageFactory.currentPage.removeAnEmptyProject();
  });

});
