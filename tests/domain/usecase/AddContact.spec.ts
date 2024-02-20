import {expect, test, describe, beforeEach, Mock} from "vitest";
import {mock} from "vitest-mock-extended";
import {AddContact} from "../../../src/domain/usecase/AddContact";
import {Contact} from "../../../src/domain/entities/Contact";
import {ContactsRepository} from "../../../src/domain/ports/ContactsRepository";

describe("AddContact", () => {
    let repository: any;

    beforeEach(() => {
        repository = mock<ContactsRepository>();
    })

    test("should add a contact", async () => {
        const usecase = new AddContact(repository);

        const inputs = {
            name: "Alice",
            phone: "0102030405",
        };

        await usecase.execute(inputs);

        expect(repository.add).toHaveBeenCalledOnce();
        expect(repository.add).toHaveBeenCalledWith(new Contact("Alice", "0102030405"));
    });
});
