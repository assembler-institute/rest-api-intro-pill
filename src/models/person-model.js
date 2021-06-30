const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Person name is required"],
  },
  roles: [
    {
      type: String,
      enum: ["DIRECTOR", "SCREENWRITER", "ACTOR", "PRODUCER", "COMPOSER"],
    },
  ],
  birthday: {
    type: Date,
  },
  deathday: {
    type: Date,
  },
  placeOfBirth: String,
});

const PersonModel = new mongoose.model("person", PersonSchema);

module.exports = PersonModel;
