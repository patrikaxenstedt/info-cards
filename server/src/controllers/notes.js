const notesCtrl = {};

const Note = require("../models/Note");

notesCtrl.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

notesCtrl.createNote = async (req, res) => {
  const { firstName, lastName, phoneNumber } = req.body;
  const newNote = new Note({
    firstName,
    lastName,
    phoneNumber,
  });
  await newNote.save();
  res.json("New note added");
};

notesCtrl.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
};

notesCtrl.deleteNote = async (req, res) => {
  await Note.findByIdAndDelete(req.params.id);
  res.json("Note was deleted.");
};

module.exports = notesCtrl;
