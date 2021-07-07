const mongoose = require("mongoose");

const MovieCreditsSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "movie",
  },
  crew: [
    {
      personId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "person",
      },
      department: String,
      job: String,
    },
  ],
  cast: [
    {
      personId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "person",
      },
      character: String,
    },
  ],
});

MovieCreditsSchema.virtual("user", {
  ref: "Person",
  localField: "cast.personId",
  foreignField: "_id",
});

const MovieCreditsModel = new mongoose.model(
  "movie-credits",
  MovieCreditsSchema,
);

module.exports = MovieCreditsModel;
