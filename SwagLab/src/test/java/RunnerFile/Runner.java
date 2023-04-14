package RunnerFile;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features={".\\Features\\ProductVerify.feature",".\\Features\\Login.feature",".\\Features\\ProductVerify.feature"},
                           glue="StepDefination",
                           monochrome=true,
                       //    dryRun=true,
                     
                          plugin= {"pretty","html:target/test-output","json:CucumberReports/cucumber.json","junit:CucumberReports/cucumber.xml"}
                           
		
		
		
		
		)
public class Runner {

}
