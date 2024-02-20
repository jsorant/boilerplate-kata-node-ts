import { expect, test, describe } from "vitest";
import { Contact } from "../../../src/domain/entities/Contact";

describe("Contact", () => {
  test("should not create without a name", () => {
    expect(() => new Contact("", "0102010201")).toThrowError("name is missing");
  });

  test("should create with a name and a phone number", () => {
    const contact = new Contact("Alice", "0102010201");
    expect(contact.name).toBe("Alice");
    expect(contact.phone).toBe("0102010201");
  });
});
