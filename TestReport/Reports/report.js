$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/Feature/Login_Authentication_Failures_Validation.feature");
formatter.feature({
  "name": "Login_Authentication_Failures_Validation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginAuthenticationFailuresValidation"
    }
  ]
});
formatter.scenario({
  "name": "To verify that Adactin URL displays an invalid error message when wrong credentials are entered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginAuthenticationFailuresValidation"
    }
  ]
});
formatter.step({
  "name": "Browser Launch and Url Load",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_Launch_and_Url_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for the element to be visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.wait_element_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the wrong username in the username bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.give_the_wrong_username_in_the_username_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the wrong password in the password bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.give_the_wrong_password_in_the_password_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify displays InvalidMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_displays_InvalidMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the existing browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.close_the_existing_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify that an error appears when the password is not entered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginAuthenticationFailuresValidation"
    }
  ]
});
formatter.step({
  "name": "Browser Launch and Url Load",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_Launch_and_Url_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for the element to be visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.wait_element_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the valid password in the password bar",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.give_the_valid_password_in_the_password_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for the element to be visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.wait_element_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify displays PasswordErrorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_displays_PasswordErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the existing browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.close_the_existing_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify that Adactin URL displays an error message when credentials are empty",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginAuthenticationFailuresValidation"
    }
  ]
});
formatter.step({
  "name": "Browser Launch and Url Load",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_Launch_and_Url_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for the element to be visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.wait_element_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify displays UsernameErrorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_displays_UserNameErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the existing browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.close_the_existing_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify that an error appears when the password is not entered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginAuthenticationFailuresValidation"
    }
  ]
});
formatter.step({
  "name": "Browser Launch and Url Load",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_Launch_and_Url_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for the element to be visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.wait_element_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the valid password in the password bar",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.give_the_valid_password_in_the_password_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify displays PasswordErrorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_displays_PasswordErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the existing browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.close_the_existing_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify that an error appears when the username is not entered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginAuthenticationFailuresValidation"
    }
  ]
});
formatter.step({
  "name": "Browser Launch and Url Load",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_Launch_and_Url_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for the element to be visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.wait_element_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the valid username in the username bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.give_the_valid_username_in_the_username_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify displays UsernameErrorMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_displays_UserNameErrorMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the existing browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.close_the_existing_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify that an error appears when an incorrect username is entered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginAuthenticationFailuresValidation"
    }
  ]
});
formatter.step({
  "name": "Browser Launch and Url Load",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_Launch_and_Url_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for the element to be visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.wait_element_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the wrong username in the username bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.give_the_wrong_username_in_the_username_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the valid password in the password bar",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.give_the_valid_password_in_the_password_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify displays InvalidMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_displays_InvalidMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the existing browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.close_the_existing_browser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "To verify that an error appears when an incorrect password is entered",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@LoginAuthenticationFailuresValidation"
    }
  ]
});
formatter.step({
  "name": "Browser Launch and Url Load",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.browser_Launch_and_Url_Load()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Wait for the element to be visible",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.wait_element_visible()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the valid username in the username bar",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.give_the_valid_username_in_the_username_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Give the wrong password in the password bar",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.give_the_wrong_password_in_the_password_bar()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify displays InvalidMessage",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.verify_displays_InvalidMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "close the existing browser",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.close_the_existing_browser()"
});
formatter.result({
  "status": "passed"
});
});