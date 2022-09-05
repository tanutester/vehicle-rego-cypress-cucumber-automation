Feature: Service Victoria

Scenario: Rego Check
  Given I open service victoria page
  Then I should see landing banner
  Then I click on Get started button


Scenario: check registration error
  Given check registration page is opened
  Then I should see the title
  Then I click on continue button
  Then I should see error box


