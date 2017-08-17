Feature: Working with project files
  As a user
  I can add files to the project

  Background:
  Given I navigate to the 'home' page
  Then I am on page with the title 'Projects · Dashboard · GitLab'
  And I click on 'newProjectButton'
  And I get to 'new-project' page
  Then I am on page with the title 'New Project · GitLab'

  @file@project@all
    Scenario: Add README.md file to the empty project
    #precondition
    And I fill field 'projectName' with the value 'project-for-readme'
    And I click on 'creationButton'
    And I get to 'project' page
    #test
    And I click on 'readmeLink'
    And I get to 'newFile' page
    And I fill field 'fileEditor' with the value 'text for check'
    And I click on 'commitChanges'
    And I get to 'file' page
    Then I check 'title' equal 'README.md'
    Then I check 'description' equal 'text for check'
    #postcondition
    And I click on 'settingsTab'
    And I get to 'project-settings' page
    And I click on 'removeProjectButton'
    And I confirm the deletion of 'project-for-readme' project

  @file@project@all
    Scenario: Add file to the existing project
    #precondition
    And I fill field 'projectName' with the value 'project-for-file'
    And I click on 'creationButton'
    And I get to 'project' page
    And I click on 'readmeLink'
    And I get to 'newFile' page
    And I fill field 'fileEditor' with the value 'text for check'
    And I click on 'commitChanges'
    And I get to 'file' page
    #test
    When I click on 'repository'
    And I get to 'repositore' page
    When I click on 'plusButton'
    When I click on 'newFile'
    And I get to 'newFile' page
    And I fill field 'fileName' with the value 'test_name'
    And I fill field 'fileEditor' with the value 'text for check'
    When I click on 'commitChanges'
    And I get to 'file' page
    Then I check 'title' equal 'test_name'
    Then I check 'text' equal 'text for check'
    #postcondition
    And I click on 'settingsTab'
    And I get to 'project-settings' page
    And I click on 'removeProjectButton'
    And I confirm the deletion of 'project-for-file' project
