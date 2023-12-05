@LoginAuthenticationFailuresValidation
Feature: Login_Authentication_Failures_Validation
  Scenario: To verify that Adactin URL displays an invalid error message when wrong credentials are entered
    Given Browser Launch and Url Load
    And Wait for the element to be visible
    When Give the wrong username in the username bar
    When Give the wrong password in the password bar
    When click on LoginButton
    Then verify displays InvalidMessage
    When close the existing browser

  Scenario: To verify that Adactin URL displays an error message when credentials are empty
    Given Browser Launch and Url Load
    And Wait for the element to be visible
    When click on LoginButton
    Then verify displays UsernameErrorMessage
    When close the existing browser

  Scenario: To verify that an error appears when the username is not entered
    Given Browser Launch and Url Load
    And Wait for the element to be visible
    When Give the valid username in the username bar
    When click on LoginButton
    Then verify displays UsernameErrorMessage
    When close the existing browser

  Scenario: To verify that an error appears when the password is not entered
    Given Browser Launch and Url Load
    And Wait for the element to be visible
    And Give the valid password in the password bar
    When click on LoginButton
    Then verify displays PasswordErrorMessage
    When close the existing browser

  Scenario: To verify that an error appears when an incorrect username is entered
    Given Browser Launch and Url Load
    And Wait for the element to be visible
    When Give the wrong username in the username bar
    And Give the valid password in the password bar
    When click on LoginButton
    Then verify displays InvalidMessage
    When close the existing browser

  Scenario: To verify that an error appears when an incorrect password is entered
    Given Browser Launch and Url Load
    And Wait for the element to be visible
    When Give the valid username in the username bar
    And Give the wrong password in the password bar
    When click on LoginButton
    Then verify displays InvalidMessage
    When close the existing browser