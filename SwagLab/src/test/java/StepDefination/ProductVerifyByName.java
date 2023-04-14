package StepDefination;

import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class ProductVerifyByName {
WebDriver driver;
@Given("Login")
public void login() {
	WebDriverManager.chromedriver().setup();
	driver=new ChromeDriver();
	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	driver.get("https://www.saucedemo.com"); 
	driver.findElement(By.name("user-name")).sendKeys("standard_user");
	driver.findElement(By.name("password")).sendKeys("secret_sauce");
	driver.findElement(By.xpath("//input[@id=\"login-button\"]")).click();
}
@When("click product by name (.*)")
public void click_product_by_nameSauce_Labs_Backpack(String str) {
	driver.findElement(By.xpath("//div[text()='"+str+"']")).click();
    
}
@When("verify Clicking Product (.*)")
public void verify_Clicking_Product_Sauce_Labs_Backpack(String str) {
	String verify=driver.findElement(By.xpath("//div[text()='"+str+"']")).getText();
	Assert.assertEquals(str, verify);
   
}
@Then("Logout ProductPage")
public void logout_ProductPage() {
	driver.findElement(By.xpath("//button[@id=\"react-burger-menu-btn\"]")).click();
	  driver.findElement(By.linkText("Logout")).click();
	  driver.close();
}
}
