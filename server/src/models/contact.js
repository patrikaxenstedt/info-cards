const { Schema, model } = require("mongoose");

const contactSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: String },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Contact", contactSchema);
