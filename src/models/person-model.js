const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Person name is required"],
  },
  roles: [
    {
      type: String,
      enum: ["director", "screenwriter", "actor", "producer", "composer"],
    },
  ],
  birthday: {
    type: Date,
  },
  deathday: {
    type: Date,
  },
  movies: [
    {
      movieId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "movie",
      },
      roles: [
        {
          type: String,
          required: true,
          enum: ["director", "screenwriter", "actor", "producer", "composer"],
        },
      ],
    },
  ],
});

const PersonModel = new mongoose.model("person", PersonSchema);

module.exports = PersonModel;
