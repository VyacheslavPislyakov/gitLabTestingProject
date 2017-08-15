Feature: Working with project files

	@visibility
	Scenario: change visibility of the project
		Given I navigate to the 'home' page
		Then I am on page with the title 'Projects · Dashboard · GitLab'
		And I click on 'newProjectButton'
		And I get to 'new-project' page
		Then I am on page with the title 'New Project · GitLab'
		And I fill field 'projectName' with the value 'testProject'
		And I fill field 'projectDescription' with the value 'This is my test Project'
		And I set internal visibility of the project
		And I click on 'creationButton'
		And I get to 'project' page
		#And I have my project created with the name 'testProject', the project description 'This is my test Project' 	and visible internally
		And I click on 'settingsTab'
	    And I get to 'project-settings' page
	    And I click on 'projectVisibilitySelect'
		And I click on 'saveChangesButton'
		And I get to 'project' page
		And I have my project created with the name 'testProject' and visible private
