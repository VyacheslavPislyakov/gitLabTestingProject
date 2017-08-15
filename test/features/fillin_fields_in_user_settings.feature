Feature: Correct search results

	@all @profile
	Scenario: Getting to our home page
		Given I navigate to the 'profile' page
		When I fill field 'skypeField' with the value 'test_skype'
		When I fill field 'linkedinField' with the value 'test_linkedin'
		When I fill field 'twitterField' with the value 'test_twitter'
		When I fill field 'webSiteField' with the value 'test_website'
		When I fill field 'organizationField' with the value 'test_organization'
		Then Update profile of the user 'buttonUpdate'
		When I navigate to the 'home' page
		And I navigate to the 'profile' page
		Then I check field 'skypeField' with the value 'test_skype'
		Then I check field 'linkedinField' with the value 'test_linkedin'
		Then I check field 'twitterField' with the value 'test_twitter'
		Then I check field 'webSiteField' with the value 'test_website'
		Then I check field 'organizationField' with the value 'test_organization'
