import { When, Then, Given } from "@cucumber/cucumber";
import assert from "assert";

Given("a calculator", function () {
  this.calculator = new Calculator();
});

When("I add two numbers", function () {
  this.sum = this.calculator.add(1, 2);
});

Then("I should have the sum of those two numbers", function () {
  assert.strictEqual(this.sum, 3);
});

class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }
}
