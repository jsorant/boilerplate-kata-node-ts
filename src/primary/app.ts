import express from "express";
import bodyParser from "body-parser";
import {AddContact, AddContactInputs} from "../domain/usecase/AddContact";
import {InMemoryContactsRepository} from "../secondary/InMemoryContactsRepository";

export const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const port = 3000;

const contactsRepository = new InMemoryContactsRepository();

app.post("/contacts", async (req: any, res: any) => {
    if (req.body.name === "") {
        res.status(400).json({message: "Contact name is empty"});
    } else {
        const usecase = new AddContact(contactsRepository)
        const inputs: AddContactInputs = {
            name: req.body.name,
            phone: req.body.phone
        }

        const newContact = await usecase.execute(inputs);

        res.status(200).json({
            name: newContact.name,
            phone: newContact.phone,
        });
    }
});

app.get("/contacts/find", async (req: any, res: any) => {
    const contacts = await contactsRepository.list();
    const contact = contacts
        .find((contact) => contact.name === req.body.name);
    res.status(200).json(contact);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
