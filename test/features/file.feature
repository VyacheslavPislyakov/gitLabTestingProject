Feature: Working with project files
  As a user
  I can add files to the project

  @file@project
  Scenario: Add README.md file to the empty project
    Given I navigate to the 'home' page
    When I click on ""
    And I click on ""
    And I click on "newIssue"
    And I fill field "title" with the value "test_issue"
    And I fill field "description" with the value "text for check"
    And I click on "submitIssue"
    Then I check "title" equal "test_issue"
    Then I check "description" equal "text for check"

    @file@project
    Scenario: Add file to the existing project
      Given I navigate to the 'home' page
      When I click on "projectForTestWarriors"
      And I click on "repositore"
      And I click on "plusButton"
      And I click on "newFile"
      And I fill field "fileName" with the unique value "test_name"
      And I fill field "fileEditor" with the value "text for check"
      And I click on "commitChanges"
      Then I check "title" equal "test_name"
      Then I check "description" equal "text for check"
