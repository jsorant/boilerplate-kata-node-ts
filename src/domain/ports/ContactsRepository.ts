import { Contact } from "../Contact";

export interface ContactsRepository {
  add(contact: Contact): Promise<void>;
}
