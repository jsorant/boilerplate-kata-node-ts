import {Contact} from "../entities/Contact";

export interface ContactsRepository {
    add(contact: Contact): Promise<void>;

    list(): Promise<Contact[]>;
}
