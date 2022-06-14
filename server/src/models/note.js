const { Schema, model } = require("mongoose");

const noteSchema = new Schema(
  {
    firstName: { type: String },
    lastName: { type: String },
    phoneNumber: { type: Number },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Note", noteSchema);
