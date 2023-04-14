$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/Login.feature");
formatter.feature({
  "name": "Login Page Test",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "login page should open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestCases.login_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify login page with valid username and password",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "enter valid Username and password",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestCases.enter_valid_Username_and_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestCases.click_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "home page display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCases.home_page_display()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginTestCases.logout()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify loginPage with Invalid Data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "userName and password \u003cuserName\u003e and \u003cpassword\u003e",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password"
      ]
    },
    {
      "cells": [
        "rama",
        "admin123"
      ]
    },
    {
      "cells": [
        "Admin",
        "rama123"
      ]
    },
    {
      "cells": [
        "admin",
        "admin"
      ]
    },
    {
      "cells": [
        "",
        "admin123"
      ]
    },
    {
      "cells": [
        "Admin",
        ""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "login page should open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestCases.login_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify loginPage with Invalid Data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "userName and password rama and admin123",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestCases.userName_and_password_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "login page should open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestCases.login_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify loginPage with Invalid Data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "userName and password Admin and rama123",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestCases.userName_and_password_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "login page should open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestCases.login_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify loginPage with Invalid Data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "userName and password admin and admin",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestCases.userName_and_password_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "login page should open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestCases.login_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify loginPage with Invalid Data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "userName and password  and admin123",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestCases.userName_and_password_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "login page should open",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginTestCases.login_page_should_open()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify loginPage with Invalid Data",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "userName and password Admin and ",
  "keyword": "When "
});
formatter.match({
  "location": "LoginTestCases.userName_and_password_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:Features/ProductVerify.feature");
formatter.feature({
  "name": "verify product by name",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click product by name \u003cProductname\u003e",
  "keyword": "When "
});
formatter.step({
  "name": "verify Clicking Product \u003cProductname\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "Logout ProductPage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Productname"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ]
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ]
    },
    {
      "cells": [
        "Sauce Labs Onesie"
      ]
    },
    {
      "cells": [
        "Test.allTheThings() T-Shirt (Red)"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Login",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductVerifyByName.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click product by name Sauce Labs Backpack",
  "keyword": "When "
});
formatter.match({
  "location": "ProductVerifyByName.click_product_by_nameSauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Clicking Product Sauce Labs Backpack",
  "keyword": "And "
});
formatter.match({
  "location": "ProductVerifyByName.verify_Clicking_Product_Sauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout ProductPage",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductVerifyByName.logout_ProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Login",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductVerifyByName.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click product by name Sauce Labs Bike Light",
  "keyword": "When "
});
formatter.match({
  "location": "ProductVerifyByName.click_product_by_nameSauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Clicking Product Sauce Labs Bike Light",
  "keyword": "And "
});
formatter.match({
  "location": "ProductVerifyByName.verify_Clicking_Product_Sauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout ProductPage",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductVerifyByName.logout_ProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Login",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductVerifyByName.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click product by name Sauce Labs Bolt T-Shirt",
  "keyword": "When "
});
formatter.match({
  "location": "ProductVerifyByName.click_product_by_nameSauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Clicking Product Sauce Labs Bolt T-Shirt",
  "keyword": "And "
});
formatter.match({
  "location": "ProductVerifyByName.verify_Clicking_Product_Sauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout ProductPage",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductVerifyByName.logout_ProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Login",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductVerifyByName.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click product by name Sauce Labs Fleece Jacket",
  "keyword": "When "
});
formatter.match({
  "location": "ProductVerifyByName.click_product_by_nameSauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Clicking Product Sauce Labs Fleece Jacket",
  "keyword": "And "
});
formatter.match({
  "location": "ProductVerifyByName.verify_Clicking_Product_Sauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout ProductPage",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductVerifyByName.logout_ProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Login",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductVerifyByName.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click product by name Sauce Labs Onesie",
  "keyword": "When "
});
formatter.match({
  "location": "ProductVerifyByName.click_product_by_nameSauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Clicking Product Sauce Labs Onesie",
  "keyword": "And "
});
formatter.match({
  "location": "ProductVerifyByName.verify_Clicking_Product_Sauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout ProductPage",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductVerifyByName.logout_ProductPage()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "Login",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductVerifyByName.login()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "click product by name Test.allTheThings() T-Shirt (Red)",
  "keyword": "When "
});
formatter.match({
  "location": "ProductVerifyByName.click_product_by_nameSauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify Clicking Product Test.allTheThings() T-Shirt (Red)",
  "keyword": "And "
});
formatter.match({
  "location": "ProductVerifyByName.verify_Clicking_Product_Sauce_Labs_Backpack(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Logout ProductPage",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductVerifyByName.logout_ProductPage()"
});
formatter.result({
  "status": "passed"
});
});