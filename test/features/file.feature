Feature: Working with project files
  As a user
  I can add files to the project

Background:
  Given I navigate to the 'home' page
  Then I am on page with the title 'Projects · Dashboard · GitLab'
  And I click on 'newProjectButton'
  And I get to 'new-project' page
  Then I am on page with the title 'New Project · GitLab'
  And I fill field 'projectName' with the value 'testProject10'
  And I click on 'creationButton'
  And I get to 'project' page

  @all@file@project
  Scenario: Add README.md file to the empty project
    And I click on 'readmeLink'
    And I get to 'newFile' page
    And I fill field 'fileEditor' with the value 'text for check'
    And I click on 'commitChanges'
    And I get to 'file' page
    Then I check 'title' equal 'README.md'
    Then I check 'description' equal 'text for check'
