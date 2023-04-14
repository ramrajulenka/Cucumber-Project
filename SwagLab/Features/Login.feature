Feature: Login Page Test 
Background:
Given login page should open

Scenario: verify login page with valid username and password
    When  enter valid Username and password 
    When click button
    Then  home page display
    Then Logout 
Scenario Outline: verify loginPage with Invalid Data
When userName and password <userName> and <password>
Examples:
|userName|password|
|rama    |admin123|
|Admin   |rama123 |
|admin   |admin   |
|        |admin123|
|Admin   |        |