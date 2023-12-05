package com.pagefactory;

import com.basepackage.BaseClass;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;


public class PageFac extends BaseClass{
    public PageFac() {
        PageFactory.initElements(driver, this);
    }
    @FindBy (name="username")
    public WebElement userName;
    @FindBy (id="password")
    public WebElement passWord;
    @FindBy (className = "login_button")
    public WebElement login ;
    @FindBy (className = "welcome_menu")
    public WebElement welcomeMenu;
    @FindBy (xpath = "//*[text()='Invalid Login details or Your Password might have expired. ']")
    public WebElement invalidText;
    @FindBy (id = "password_span")
    public WebElement passWordError;
    @FindBy (id="username_span")
    public WebElement userNameError;

    @FindBy(xpath = "//td[text()='Existing User Login - Build 1']")
    public WebElement loginPage;

}
