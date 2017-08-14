Feature: Correct search results
  As a user
  I can search anything on the main page of website
  And should get appropriate results.

  @home
  Scenario: Getting to our home page
    Given I navigate to the 'home' page
    When Login on page