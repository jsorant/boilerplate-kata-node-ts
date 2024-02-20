import {expect, test, describe} from "vitest";
import {Contact} from "../../src/domain/entities/Contact";
import {InMemoryContactsRepository} from "../../src/secondary/InMemoryContactsRepository";

describe("InMemoryContactsRepository", () => {
    test("should add a contact", async () => {
        const sut = new InMemoryContactsRepository();

        const contact = new Contact("Alice", "0102030405");
        await sut.add(contact);

        const contacts = await sut.list();

        expect(contacts.length).toBe(1);
        expect(contacts[0]).toStrictEqual(contact);
    });
});
