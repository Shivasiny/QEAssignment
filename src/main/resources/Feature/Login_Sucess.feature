@LoginSuccess
Feature: Login_Success
  Scenario: To verify Adactin url login successfully
    Given Browser Launch and Url Load
    And Wait for the element to be visible
    When Give the valid username in the username bar
    And Give the valid password in the password bar
    When click on LoginButton
    Then verify is on LoginSuccessPage
    When close the existing browser

