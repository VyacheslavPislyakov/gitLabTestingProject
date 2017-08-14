var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

  Then(/^I check '([^']*)' include '([^']*)'$/, function(fieldName, value) {
    return this.pageFactory.currentPage.checkValueOfTheElementInclude(fieldName, value);
  });

});
