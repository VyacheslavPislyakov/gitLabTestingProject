Feature: Correct search results

  @sshKeys
  Scenario: Getting to our sshKeys page
    Given I navigate to the 'sshKeys' page
    When I fill field 'keyField' with the sshKey
    Then Click to Add key 'buttonCreate'
	Then I check field sshKey 'installKeyField' with the value 'sshKey'
