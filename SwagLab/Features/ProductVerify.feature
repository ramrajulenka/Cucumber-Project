Feature: verify product by name
Background:
Given Login
Scenario Outline:
When click product by name <Productname>
And verify Clicking Product <Productname>
Then Logout ProductPage
Examples:
| Productname           |
|Sauce Labs Backpack    |
|Sauce Labs Bike Light|
|Sauce Labs Bolt T-Shirt|
|Sauce Labs Fleece Jacket|
|Sauce Labs Onesie|
|Test.allTheThings() T-Shirt (Red) |
