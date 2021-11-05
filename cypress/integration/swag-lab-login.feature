Feature: Login Feature
 
Scenario: Login Validation
 
Given I am in the Swag Labs login page
And I do assertion of an url
When I do a registration for my user by entering valid username and valid password
Then I do login successfully