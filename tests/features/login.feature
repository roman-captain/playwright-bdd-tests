@auth
Feature: User authentication
  As a registered customer
  I want to be able to log in and log out
  So that I can access my account and orders

  Background:
    Given user is on the home page

  @smoke
  Scenario: User cannot login with invalid credentials
    When user navigates to Login page
    And user logs in with email "invalid@test.com" and password "wrongpass"
    Then login error message is displayed

  @regression
  Scenario Outline: Login fails for various invalid credential combinations
    When user navigates to Login page
    And user logs in with email "<email>" and password "<password>"
    Then login error message is displayed

    Examples:
      | email               | password    |
      | notexist@test.com   | pass123     |
      | wrong@email.com     | 12345678    |
      | test@test.com       | badpass     |
