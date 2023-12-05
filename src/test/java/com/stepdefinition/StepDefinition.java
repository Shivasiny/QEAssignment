package com.stepdefinition;

import com.basepackage.BaseClass;
import com.basepackage.Utility;
import com.pagefactory.PageFac;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import java.io.IOException;

import static org.junit.Assert.assertEquals;

public class StepDefinition {
    @Given("Browser Launch and Url Load")
    public void browser_Launch_and_Url_Load() throws IOException {
        BaseClass.browserLaunch();
        System.out.println(BaseClass.path + "Path123");
        System.out.println(BaseClass.path1 + "\\src\\main\\resources\\Feature");
        BaseClass.urlLoad(BaseClass.getProp("adactinUrl"));
    }

    @When("Give the valid username in the username bar")
    public void give_the_valid_username_in_the_username_bar() throws IOException {
        PageFac al = new PageFac();
        al.userName.sendKeys(BaseClass.getProp("adacUserName"));

    }
    @And("Wait for the element to be visible")
    public void wait_element_visible() {
        PageFac pageFac = new PageFac();
        Utility.visibilityWait(pageFac.loginPage);
    }

    @And("Give the valid password in the password bar")
    public void give_the_valid_password_in_the_password_bar() throws IOException {
        PageFac al = new PageFac();
        al.passWord.sendKeys(BaseClass.getProp("adacPassWord"));
    }
    @When("click on LoginButton")
    public void click_on_LoginButton() {
        PageFac al=new PageFac();
        al.login.click();
    }

    @Then("verify is on LoginSuccessPage")
    public void verify_is_on_LoginSuccessPage() throws IOException {
        PageFac al = new PageFac();
        String verify=al.welcomeMenu.getText();
        String loginverify=BaseClass.getProp("loginSuccessVerify");
        assertEquals(loginverify,verify);
    }
    @Then("verify displays InvalidMessage")
    public void verify_displays_InvalidMessage() throws IOException {
        PageFac al=new PageFac();
        al.invalidText.isDisplayed();
    }
    @Then("verify displays PasswordErrorMessage")
    public void verify_displays_PasswordErrorMessage() throws IOException {
        PageFac al=new PageFac();
        al.passWordError.isDisplayed();
    }
    @Then("verify displays UsernameErrorMessage")
    public void verify_displays_UserNameErrorMessage() throws IOException {
        PageFac al=new PageFac();
        al.userNameError.isDisplayed();
    }

    @When("close the existing browser")
    public void close_the_existing_browser() {
        BaseClass.closeBrowser();
    }
    @And("Give the wrong password in the password bar")
    public void give_the_wrong_password_in_the_password_bar() throws IOException {
        PageFac al = new PageFac();
        al.passWord.sendKeys(BaseClass.getProp("adacInvalidPassWord"));
    }
    @When("Give the wrong username in the username bar")
    public void give_the_wrong_username_in_the_username_bar() throws IOException {
        PageFac al = new PageFac();
        al.userName.sendKeys(BaseClass.getProp("adacInvalidUserName"));

    }
}

