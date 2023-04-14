Feature: verifying all filter options in the product page

Scenario Outline: verify filter options by name
Given open product page
 When apply filter by <name> of the filter
 Then  verify products are <Productname> arranged by filters
 Examples:
  | name              | Productname              |
  |Name (A to Z)      |Sauce Labs Backpack      |
  |Name (Z to A)      |Test.allTheThings() T-Shirt (Red)     |
  |Price (low to high)|Sauce Labs Onesie|
  |Price (high to low)|Sauce Labs Fleece Jacket|
  