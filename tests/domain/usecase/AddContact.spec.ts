import { expect, test, describe } from "vitest";
import { AddContact } from "../../../src/domain/usecase/AddContact";
import { Contact } from "../../../src/domain/Contact";
import { ContactsRepository } from "../../../src/domain/ports/ContactsRepository";

class FakeRepository implements ContactsRepository {
  public called = false;
  public contact: Contact | undefined = undefined;

  async add(contact: Contact): Promise<void> {
    this.called = true;
    this.contact = contact;
  }
}

describe("AddContact", () => {
  test("should add a contact", async () => {
    const fakeRepository = new FakeRepository();
    const usecase = new AddContact(fakeRepository);

    const inputs = {
      name: "Alice",
      phone: "0102030405",
    };

    await usecase.execute(inputs);

    expect(fakeRepository.called).toBeTruthy();
    expect(fakeRepository.contact?.name).toStrictEqual("Alice");
    expect(fakeRepository.contact?.phone).toStrictEqual("0102030405");
  });
});
