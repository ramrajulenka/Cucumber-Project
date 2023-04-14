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

public class ProductFilters {
	WebDriver driver;
	@Given("open product page")
	public void open_product_page() {

		WebDriverManager.chromedriver().setup();
		driver=new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("https://www.saucedemo.com");
		driver.findElement(By.name("user-name")).sendKeys("standard_user");
		driver.findElement(By.name("password")).sendKeys("secret_sauce");
		driver.findElement(By.xpath("//input[@id=\"login-button\"]")).click();

	}

	@When("apply filter by (.*) of the filter")
	public void apply_filter_by_of_the_filter(String string) throws InterruptedException {
		driver.findElement(By.xpath("//select[@class='product_sort_container']")).click();
		driver.findElement(By.xpath("//option[contains(.,'"+string+"')]")).click();
		
		
	}
	@Then("verify products are (.*) arranged by filters")
	public void verify_products_are_arranged_by_filters(String string) {
		String verify=driver.findElement(By.xpath("//div[text()='"+string+"']")).getText();
		Assert.assertEquals(string, verify);
		driver.close(); 
	}

	
}
