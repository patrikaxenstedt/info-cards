const { Router } = require("express");
const router = Router();

const {
  getContacts,
  createContact,
  getContact,
  deleteContact,
} = require("../controllers/contacts");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContact).delete(deleteContact);

module.exports = router;
