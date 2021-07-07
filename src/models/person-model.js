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
  birthdayISO: {
    type: Date,
  },
  deathdayISO: {
    type: Date,
  },
  placeOfBirth: String,
});

PersonSchema.virtual("birthday")
  .set((date) => {
    // Expected format: yyyy-mm-dd
    this.birthdayISO = new Date(date);
  })
  .get(() => {
    return this.birthdayISO.toISOString().substring(0, 10);
  });

PersonSchema.virtual("deathday")
  .set((date) => {
    // Expected format: yyyy-mm-dd
    this.deathdayISO = new Date(date);
  })
  .get(() => {
    return this.deathdayISO.toISOString().substring(0, 10);
  });

const PersonModel = new mongoose.model("person", PersonSchema);

module.exports = PersonModel;
