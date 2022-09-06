Feature: check the rego successfully for service victoria.

"""Scenario: select vehicle type
  Given I am on registration detail page
  Then I should see the title
  When I click on vehicle type "car"
  When I click on vehicle type "motorcycle"
  When I click on vehicle type "caravan" """


Scenario: Rego Check
  Given I am on the registration page
  Then I should see landing banner
  When I click on Get started button
  Then I should see the vehicle detail page


Scenario: check registration error
  Given I am on registration detail page
  Then I should see the title
  When I click on continue button
  Then I should see error box


Scenario: check wrong registration number
  Given I am on registration detail page 
  Then I should see the title
  When I enter rego number "gthb"
  And I click on continue button
  Then I should get the error message


Scenario: check car registration success
  Given I am on registration detail page
  Then I should see the title
  When I enter rego for vehicle type "car" "1VR9HR"
  And I click on continue button
  Then I should see the status "Vehicle registered"


Scenario: check motorcycle registration success
  Given I am on registration detail page
  Then I should see the title
  When I click on motorcycle
  And I enter rego for vehicle type "motorcycle" "1Y7VX"
  And I click on continue button
  Then I should see the status "Registration cancelled"
  
