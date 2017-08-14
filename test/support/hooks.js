var {defineSupportCode} = require("cucumber");

defineSupportCode(function({Before,	After, setDefaultTimeout}) {

	setDefaultTimeout(60 * 1000);

	Before(function() {
		return browser.driver.manage().window().maximize();
	});

	After(function() {
        return browser.executeScript('window.localStorage.clear();')
        .then(function () {
            browser.manage().deleteAllCookies();
        });
	});
});
