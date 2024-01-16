import { describe } from "node:test";
import { expect, test } from "vitest";

describe("Calculator", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});

function sum(a: number, b: number): number {
  return a + b;
}
