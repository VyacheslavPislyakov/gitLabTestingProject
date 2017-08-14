Feature: Correct search results
  As a user
  I can search anything on the main page of website
  And should get appropriate results.

  @home
  Scenario: Getting to our home page
    Given I navigate to the 'profile' page
    When Fill of Skype's field
    When Fill of LinkedIn's field
    When Fill of Twitter's field
    When Fill of WebSite's field
    When Fill of Organization's field
    Then Update profile of the user
    Given I navigate to the 'profile' page
