const mongoose = require("mongoose");

const MovieCreditsSchema = new mongoose.Schema({
  movieId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "movie",
  },
  crew: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "person",
    },
  ],
  cast: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "person",
    },
  ],
});

const MovieCreditsModel = new mongoose.model(
  "movie-credits",
  MovieCreditsSchema,
);

module.exports = MovieCreditsModel;
