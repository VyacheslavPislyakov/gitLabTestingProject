Feature: New project's creation
  As a user
  I can delete one of my projects on git.epam.com

@deletion@empty_project
Scenario: Deletion of an empty project.
    Given I navigate to the 'home' page
    Then I am on page with the title 'Projects · Dashboard · GitLab'
    And I click on 'newProjectButton'
    And I get to 'new-project' page
    Then I am on page with the title 'New Project · GitLab'
    And I fill field 'projectName' with the value 'my-awesome-project'
    And I click on 'creationButton'
    And I get to 'project' page
    And I remove an empty project
    And I get to 'home' page
    Then I am on page with the title 'Projects · Dashboard · GitLab'
    And list of projects in 'Your projects' tab doesn't contain 'my-awesome-project' name
