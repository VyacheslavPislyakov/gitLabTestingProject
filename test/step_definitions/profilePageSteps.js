var {defineSupportCode} = require('cucumber');

defineSupportCode(function({Given, When, Then}) {

    When(/^Fill of Skype's field$/, function () {
        return this.pageFactory.currentPage.insertTextSkypeField();
    });

    When(/^Fill of LinkedIn's field$/, function () {
        return this.pageFactory.currentPage.insertTextLinkedinField();
    });

    When(/^Fill of Twitter's field$/, function () {
        return this.pageFactory.currentPage.insertTextTwitterField();
    });

    When(/^Fill of WebSite's field$/, function () {
        return this.pageFactory.currentPage.insertTextWebSiteField();
    });

    When(/^Fill of Organization's field$/, function () {
        return this.pageFactory.currentPage.insertTextOrganizationField();
    });

    Then(/^Update profile of the user$/, function () {
        return this.pageFactory.currentPage.clickOnUpdateProfileSettings();
    });
});
