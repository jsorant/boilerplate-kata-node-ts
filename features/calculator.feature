Feature: Calculator

  Scenario: Add
    Given a calculator
    When I add two numbers
    Then I should have the sum of those two numbers