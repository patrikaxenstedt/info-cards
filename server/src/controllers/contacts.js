const contactsCtrl = {};

const Contact = require("../models/contact");

contactsCtrl.getContacts = async (req, res) => {
  const contacts = await Contact.find();
  res.json(contacts);
};

contactsCtrl.createContact = async (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;
  const newContact = new Contact({
    firstName,
    lastName,
    phoneNumber,
  });
  await newContact.save();
  res.json("New contact card added");
};

contactsCtrl.getContact = async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  res.json(contact);
};

contactsCtrl.deleteContact = async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id);
  res.json("Contact card was deleted.");
};

module.exports = contactsCtrl;
