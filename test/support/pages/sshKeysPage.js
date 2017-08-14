var expect = require('chai').expect;
var fs = require('fs');
var inheritance = require('./../helpers/inheritance'),
	Page = require('./page');

var profilePage = function(world) {
	var _this = this;
	_this.world = world;
	_this.marker = 'sshKeys';

	_this.url = 'https://git.epam.com/profile/keys';

	_this._data = {
		elements: {
			keyField: {
				id: 'key_key',
				isSingle: true
			},
			installKeyField:{
				css: '.well-pre',
				isSingle: true
			},
			testSSHKey: {
				css: 'li:nth-child(1) > div:nth-child(2) > a',
				isSingle: true
			},
			buttonCreate: {
				css: '.btn.btn-create',
				isSingle: true
			},
		},
		ssh: {
			sshKey: 'ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABAQC3YtGweJ0PL3CEB9rnGUEk4Shlw6dte4uBmzhnvdq1c2l4DYN+RBvVpAmeTHxjcgLB9ZtUJgOC5kSAMqNnzl4JCb3JVcNnJwq/RiUdSOFG737RQiyBEVVmHfL6/Y25mbEI5nsLjXtayNkzeiY02N2kgcR9Zzvv7fFkakef7AUBG4gOdiSbl6Z7Fv/l75e+ZwrxQBMx/5PBI5cFOm8hOwzXJkfMaJ9a0eH2TwtcH2eIejImsrSHfl+QPV9StJjfkydvJvn8GW8FZ591GICPMz3wKzpV3QdIoGwSdXHlO7S176W637hpwOasVUAvdMKHezngJ21hoIWLe6An3SAaLBib test_user@epam.com'
		}
	};

	//TODO read sshkey from the file
	// _this.readFileSSHKey = function () {
	// 	return fs.readFile('./sshKeyPub.txt', 'utf8', function(err, contents) {
	// 	    // console.log('aaaaaaaaaaaaaaaaaaa' + contents);
	// 		return contents;
	// 		// a = contents
	// 	});
	// 	// return a;
	// };


	_this.fillField = function(fieldName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName])), 5000).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView()
        }).then(element => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).sendKeys(_this._data.ssh.sshKey);
		});
	};

	_this.clickOn = function(elementName) {
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[elementName])), 5000).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[elementName]).scrollIntoView();
		}).then(element => {
			return element.click();
		}).then(() =>{
			browser.sleep(5000);
		});
	};

	_this.checkValueOfTheElement = function(fieldName, value){
		return browser.wait(EC.elementToBeClickable(_this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName])), 5000).then(() => {
			return _this.world.helper.elementGetter(_this._root, _this._data.elements[fieldName]).scrollIntoView();
        }).then(element => {
			return element.getText().then(txt => {
				// return console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaa ' + txt);
				return expect(txt).to.equal(value);
			});
		});
	};

};

inheritance.inherits(Page, profilePage);

module.exports = profilePage;
