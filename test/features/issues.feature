Feature: Working with issues
  As a user
  I can work with issues

  @issue@project
  Scenario: Add an issue for an existing project
    Given I navigate to the 'home' page
    Then I am on page with the title 'Projects · Dashboard · GitLab'
    When I click on "projectForTestWarriors"
    And I get to 'project' page
    And I click on "issues"
    And I get to 'issues' page
    And I click on "newIssue"
    And I get to 'newIssue' page
    And I fill field "title" with the value "test_issue"
    And I fill field "description" with the value "text for check"
    And I click on "submitIssue"
    And I get to 'eachIssue' page
    Then I check "title" equal "test_issue"
    Then I check "description" equal "text for check"
