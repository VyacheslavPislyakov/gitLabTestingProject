Feature: Search for a project
  As a user
  I can search for a project and get the correct result

  @search@project
  Scenario: Search for an existing project by name
    Given I navigate to the 'home' page
    When I perform a search of "projectForTestWarriors"
    Then I am on page with the title "projectForTestwarriors · Search · GitLab"
    Then I check "searchResult" equal "projectForTestWarriors"
