var {defineSupportCode} = require("cucumber");

defineSupportCode(function({Before, BeforeAll,	After, setDefaultTimeout}) {

	setDefaultTimeout(60 * 1000);

	Before(function() {
		return browser.driver.manage().window().maximize();
	});

	// BeforeAll(function() {
	// 	exec('./login.exe', [process.env.MY_USER, process.env.MY_PASS], function(err, data) {
	// 		console.log(process.env.MY_USER.toString());
	// 		console.log(data.toString());
	// 	});
	// 	return browser.sleep(10000);
	// });

	After(function() {
        return browser.executeScript('window.localStorage.clear();')
        .then(function () {
            browser.manage().deleteAllCookies();
        });
	});
});
