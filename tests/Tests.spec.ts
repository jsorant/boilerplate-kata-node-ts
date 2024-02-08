import { expect, test, describe } from "vitest";

import supertest from "supertest";
import { app } from "../src/app";

const wrappedApp = supertest(app);

// Contacts app
// - Add contact
//  - contact = name / tel
//     name pas vide
//     tel = string 10 caractere
//  - POST
// - chercher un contact par nom
//   - doit matcher le nom

describe("Contacts", () => {
  describe("Add contact", () => {
    test("should add a new contact", async () => {
      const response = await addContact("John Doe", "0450971111");

      expect(response.body).toEqual({ name: "John Doe", phone: "0450971111" });
      expect(response.status).toEqual(200);
    });

    test("should not add a contact if name is empty", async () => {
      const response = await addContact("", "0450971111");

      expect(response.body).toEqual({ message: "Contact name is empty" });
      expect(response.status).toEqual(400);
    });
  });

  describe("Find contact", () => {
    test("should retrieve a contact that has been added", async () => {
      await addContact("John Doe", "0450971111");

      const response = await findContact("John Doe");

      expect(response.body.name).toBe("John Doe");
      expect(response.body.phone).toBe("0450971111");
    });

    test("should retrieve a contact that has been added amongst others", async () => {
      await addContact("John Doe", "0450971111");
      await addContact("Alice", "0450971112");

      const response = await findContact("John Doe");

      expect(response.body.name).toBe("John Doe");
      expect(response.body.phone).toBe("0450971111");
    });
  });
});

async function findContact(name: string) {
  return await wrappedApp
    .get("/contacts/find")
    .send({ name })
    .set("Accept", "application/json");
}

async function addContact(name: string, phone: string): Promise<any> {
  return await wrappedApp
    .post("/contacts")
    .send({ name, phone })
    .set("Accept", "application/json");
}
