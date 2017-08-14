Feature: Search for a project
  As a user
  I can search for a project and get the correct result

  @all@search@project
  Scenario: Search for an existing project by name
    Given I navigate to the 'home' page
    Then I am on page with the title 'Projects · Dashboard · GitLab'
    When I perform a search of "projectForTestWarriors"
    And I get to 'search' page
    Then I am on page with the title "projectForTestwarriors · Search · GitLab"
    Then I check "searchResult" equal "projectForTestWarriors"
