package com.basepackage;

import com.pagefactory.PageFac;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

public class BaseClass {
    public static WebDriver driver;
    public static void browserLaunch(){

        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        driver.manage().window().maximize();
     }
     public static void urlLoad(String url)
     {
         driver.get(url);
         driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
     }   
    public WebElement searchElementById(String id) {
        return driver.findElement(By.id(id));
    }

    public WebElement searchElementByXpath(String xpath) {
        return driver.findElement(By.xpath(xpath));
    }
    public WebElement searchElementByName(String name) {
        return driver.findElement(By.name(name));
    }
    public WebElement searchElementByClass(String className) {
        return driver.findElement(By.className(className));
    }
    public static  String path = System.getProperty("user.dir");
    public static String path1 = System.getProperty("user.dir");
    public static String getProp(String pf) throws IOException {
        File fl = new File(path+"/Adactin.properties/"); // 
        FileInputStream fis = new FileInputStream(fl);
        Properties prp = new Properties();
        prp.load(fis);
        return prp.getProperty(pf);
    }

     public static void closeBrowser(){
        driver.close();
     }

}
