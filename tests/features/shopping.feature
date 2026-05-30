@shopping
Feature: Shopping cart flow
  As a customer
  I want to search for products and add them to my cart
  So that I can purchase items I need

  Background:
    Given user is on the home page

  @smoke
  Scenario: User searches for a product and adds it to cart
    When user navigates to Products page
    And user searches for "Blue Top"
    Then search results for "Blue Top" are displayed
    When user adds the first product to cart
    And user continues shopping
    And user goes to cart
    Then cart contains 1 product

  @smoke
  Scenario Outline: User can search for different product categories
    When user navigates to Products page
    And user searches for "<product>"
    Then search results for "<product>" are displayed

    Examples:
      | product   |
      | Dress     |
      | Top       |
      | Jeans     |
