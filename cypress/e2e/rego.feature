Feature: Service Victoria Rego Check

"""Scenario: select vehicle type
  Given I am on registration detail page
  Then I should see the title
  When I click on vehicle type "car"
  When I click on vehicle type "motorcycle"
  When I click on vehicle type "caravan" """


Scenario: Displays service victoria registration page
  Given I am on the registration page
  Then I should see landing banner
  When I click on Get started button
  Then I should see the vehicle detail page


Scenario: Displays error when rego is not provided
  Given I am on registration detail page
  Then I should see the title
  When I click on continue button
  Then I should see error box


Scenario: Displays error when rego is invalid
  Given I am on registration detail page 
  Then I should see the title
  When I enter rego number "gthb"
  And I click on continue button
  Then I should get the error message


Scenario: Status page displays registration details for a valid rego
  Given I am on registration detail page
  Then I should see the title
  When I enter rego for vehicle type "car" "1PV3CL"
  And I click on continue button
  Then I should see the status "Vehicle registered"


Scenario: Status page displays registration details for a cancelled rego
  Given I am on registration detail page
  Then I should see the title
  When I click on motorcycle
  And I enter rego for vehicle type "motorcycle" "1Y7VX"
  And I click on continue button
  Then I should see the status "Registration cancelled"


Scenario: Displays error when user enter invalid rego number
  Given I am on registration detail page
  Then I should see the title
  When I enter invalid rego
  And I click on continue button
  Then I should get the error under rego input

Scenario: Status page displays registration details for a valid VIN
  Given I am on registration detail page
  Then I should see the title
  When I click on vehicle identification number
  And I enter a valid VIN
  And I click on continue button
  Then I should see the status "Vehicle registered"


  
