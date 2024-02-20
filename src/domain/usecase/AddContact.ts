import {Contact} from "../entities/Contact";
import {ContactsRepository} from "../ports/ContactsRepository";

export interface AddContactInputs {
    name: string;
    phone: string;
}

export class AddContact {
    readonly #repository;

    constructor(repository: ContactsRepository) {
        this.#repository = repository;
    }

    async execute(inputs: AddContactInputs): Promise<Contact> {
        const contact = new Contact(inputs.name, inputs.phone);
        await this.#repository.add(contact);
        return contact;
    }
}
