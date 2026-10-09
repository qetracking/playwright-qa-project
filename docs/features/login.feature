Feature: Login

  As a user of the application
  I want to log in
  So that I can access the available features

  Background:
    Given the user is on the login page

  Scenario: Successful login
    When the user enters valid credentials
    And clicks the login button
    Then the user should access the inventory page

  Scenario: Login with an incorrect password
    When the user enters a valid username and an incorrect password
    And clicks the login button
    Then an error message should be displayed

  Scenario: Login without a username
    When the user leaves the username field empty
    And clicks the login button
    Then a message indicating that the username is required should be displayed
