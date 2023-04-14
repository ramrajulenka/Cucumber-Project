package StepDefination;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.junit.Assert;
import org.junit.validator.PublicClassValidator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class LoginTestCases {
	WebDriver driver;
	@Given("login page should open")
	public void login_page_should_open() {
		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.saucedemo.com"); 
	}

	@When("enter valid Username and password")
	public void enter_valid_Username_and_password() {
		driver.findElement(By.name("user-name")).sendKeys("standard_user");
		driver.findElement(By.name("password")).sendKeys("secret_sauce");
	}

	
	@Then("home page display")
	public void home_page_display() {
	   String title=driver.findElement(By.xpath("//div[@class=\"app_logo\"]")).getText();
	   Assert.assertEquals("Swag Labs", title);
	}

	@Then("Logout")
	public void logout() {
	  driver.findElement(By.xpath("//button[@id=\"react-burger-menu-btn\"]")).click();
	  driver.findElement(By.linkText("Logout")).click();
	  driver.close();
	}
@When("userName and password (.*) and (.*)")
public void userName_and_password_and(String user , String pass) {
	driver.findElement(By.name("user-name")).sendKeys(user);
	driver.findElement(By.name("password")).sendKeys(pass);
	driver.findElement(By.xpath("//input[@id=\"login-button\"]")).click();
	driver.close();
	
	
	
}
	@When("click button")
	public void click_button() {
		driver.findElement(By.xpath("//input[@id=\"login-button\"]")).click();
	}

}
