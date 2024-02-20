import {ContactsRepository} from "../domain/ports/ContactsRepository";
import {Contact} from "../domain/entities/Contact";

export class InMemoryContactsRepository implements ContactsRepository {

    #contacts: Contact[] = [];

    async add(contact: Contact): Promise<void> {
        this.#contacts.push(contact);
    }

    async list(): Promise<Contact[]> {
        return this.#contacts;
    }
}