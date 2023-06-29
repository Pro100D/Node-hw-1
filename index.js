const { program } = require("commander");
const contacts = require("./contacts.js");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const getContactId = await contacts.getContactById(id);
      return console.log(getContactId);

    case "add":
      const newContact = await contacts.addContact(name, email, phone);
      return console.log(newContact);

    case "remove":
      const deletedContact = await contacts.removeContact(id);
      return console.log(deletedContact);
  }
}

invokeAction(argv);

// invokeAction({ action: "list" });
// invokeAction({ action: "get", id: "qdggE76Jtbfd9eWJHrssH" });
// invokeAction({
//   action: "add",
//   name: "dania",
//   email: "asd@mail.com",
//   phone: "123-123-123",
// });
// invokeAction({ action: "remove", id: "e6ywwRe4jcqxXfCZOj_1e" });
