Feature: New project's creation
  As a user
  I can delete one of my projects on git.epam.com

Background:
  Given I navigate to the 'home' page
  Then I am on page with the title 'Projects · Dashboard · GitLab'
  And I click on 'newProjectButton'
  And I get to 'new-project' page
  Then I am on page with the title 'New Project · GitLab'
  And I fill field 'projectName' with the value 'my-awesome-project'
  And I click on 'creationButton'
  And I get to 'project' page

@deletion@empty_project
Scenario: Deletion of an empty project.
    And I remove an empty project
    And I get to 'home' page
    Then I am on page with the title 'Projects · Dashboard · GitLab'
    And list of projects in 'Your projects' tab doesn't contain 'my-awesome-project' name

@deletion@full_project
Scenario: Deletion of a project with some content.
    And I click on 'readmeLink'
    And I get to 'newFile' page
    And I fill field 'fileEditor' with the value 'text for check'
    And I click on 'commitChanges'
    And I get to 'file' page
    And I click on 'settingsTab'
    And I get to 'project-settings' page
    And I click on 'removeProjectButton'
    And I confirm the deletion of 'my-awesome-project' project
    And I get to 'home' page
    Then I am on page with the title 'Projects · Dashboard · GitLab'
    And list of projects in 'Your projects' tab doesn't contain 'my-awesome-project' name
