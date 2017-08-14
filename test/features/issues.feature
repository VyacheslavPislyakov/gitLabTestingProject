Feature: Working with issues
  As a user
  I can work with issues

  @issue@project
  Scenario: Add an issue for an existing project
    Given I navigate to the 'home' page
    When I click on "projectForTestWarriors"
    And I click on "issues"
    And I click on "newIssue"
    And I fill field "title" with the value "test_issue"
    And I fill field "description" with the value "text for check"
    And I click on "submitIssue"
    Then I check "title" equal "test_issue"
    Then I check "description" equal "text for check"
