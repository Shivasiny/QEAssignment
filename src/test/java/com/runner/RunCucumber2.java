package com.runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;


@RunWith(Cucumber.class)
@CucumberOptions(
    features = {"src/main/resources/Feature"},
    glue = {"com.stepdefinition"},
    monochrome = true,
    dryRun = false,
    plugin = {"html:TestReport/Reports", "json:TestJSON/Reports.json"},
    tags = {"@LoginAuthenticationFailuresValidation"}
)
public class RunCucumber2 {
}