const mongoose = require("mongoose");
// const connectToMongo = require("../db");

// connectToMongo();
const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    default:"General"
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

modeules.export = mongoose.model("notes", NotesSchema);
