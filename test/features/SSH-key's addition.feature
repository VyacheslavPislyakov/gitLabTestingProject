Feature: Correct search results

	@all @sshKeys
	Scenario: Getting to our sshKeys page
		Given I navigate to the 'sshKeys' page
		When I fill field 'keyField' with the sshKey
		Then Click to Add key 'buttonCreate'
		Then I check field sshKey 'installKeyField' with the sshKey
		#PostConditions
        When I navigate to the 'sshKeys' page
		Then Remove SSHKey of the user 'buttonRemove'
