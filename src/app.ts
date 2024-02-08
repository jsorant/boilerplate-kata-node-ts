import express from "express";
import bodyParser from "body-parser";
import { Contact } from "./domain/Contact";

export const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = 3000;

let contacts: Contact[] = [];

app.post("/contacts", (req: any, res: any) => {
  if (req.body.name === "") {
    res.status(400).json({ message: "Contact name is empty" });
  } else {
    const newContact = new Contact(req.body.name, req.body.phone);
    contacts.push(newContact);

    res.status(200).json({
      name: newContact.name,
      phone: newContact.phone,
    });
  }
});

app.get("/contacts/find", (req: any, res: any) => {
  const contact = contacts.find((contact) => contact.name === req.body.name);
  res.status(200).json(contact);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
