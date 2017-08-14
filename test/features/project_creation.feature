Feature: New project's creation
  As a user
  I can create new project on git.epam.com

@creation
Scenario: Creation of a new project, filling project name and project description fields and setting internal visibility.
    Given I navigate to the 'home' page
    Then I am on page with the title 'Projects · Dashboard · GitLab'
    And I click on 'newProjectButton'
    And I get to 'new-project' page
    Then I am on page with the title 'New Project · GitLab'
    And I fill field 'projectName' with the value 'test-project-name'
    And I fill field 'projectDescription' with the value 'This is my new project born to be tested'
    And I set internal visibility of the project
    And I click on 'creationButton'
    And I get to 'project' page
    And I have my project created with the name 'test-project-name', the project description 'This is my new project born to be tested' and visible internally
